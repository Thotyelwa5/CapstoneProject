import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import router from '@/router'
import { useCookies } from 'vue3-cookies'
import authUser from '@/services/AuthenticateUser'

const CapstoneUrl = "http://localhost:3000/"

export default createStore({
  state: {
    users: null,
    user: null,
    books: null,
    book: null,
    spinner: false,
    token: null,
    msg: null,
    user: null,
    token: null,
    isLoggedIn: false,
    cart: []
  },
  mutations: {
    setUserData(state, user) {
      state.user = user
    },
    setBooks(state, books) {
      state.books = books
    },
    setBook(state, book) {
      state.book = book
    },
    setSpinner(state, value) {
      state.spinner = value
    },
    setToken(state, token) {
      state.token = token
    },
    setMsg(state, msg) {
      state.msg = msg
    },
    addToCart(state, book) {
      state.cart.push(book)
    },
    setUser(state, user) {
      state.user = user;
      state.isLoggedIn = true;
    },
    setToken(state, token) {
      state.token = token;
    },
    setDeletionStatus(state, status) {
      state.deletionStatus = status;
    },
    setUpdateStatus(state, status) {
      state.setUpdateStatus = status;
    },
    addToCart(state, item) {
      state.cart.push(item);
    },
    clearUser(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    removeFromCart(state, itemToRemove) {
      state.cart = state.cart.filter((item) => item.bookID !== itemToRemove.bookID);
    },
    updateCartItemQuantity(state, { item, quantity }) {
      const cartItem = state.cart.find((i) => i.bookID === item.bookID);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
    },
  },
  actions: {
    // ============fetchBooks and a Book
    async fetchBooks(context) {
      try {
        const { data } = await axios.get(`${CapstoneUrl}books`)
        context.commit("setBooks", data.results)
        console.log(data.results);
      } catch (e) {
        context.commit("setMsg", "An error occurred.")
      }
    },
    async fetchBook(context, bookID) {
      try {
        const { data } = await axios.get(`${CapstoneUrl}book/${bookID}`);
        context.commit("setBook", data.result[0]);
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },
    //==============DELETE A BOOK
    async deleteBook(context, bookID) {
      try {
        context.commit("setDeletionStatus", null);
        
        const response = await axios.delete(`${CapstoneUrl}books/${bookID}`);
        
        if (response.status !== 200) {
          throw new Error(`Failed to delete product. Status: ${response.status}`);
        }
        
        context.commit("removeBook", bookID);
        context.commit("setDeletionStatus", "success");
      } catch (error) {
        console.error("Error deleting product:", error);
        context.commit("setDeletionStatus", "error");
      }
    },
    //=======update the book
    async updateBook(context, updatedBookData) {
      try {
        context.commit("setUpdateStatus", null);
    
        const response = await axios.put(`${CapstoneUrl}books/${updatedBookData.bookID}`, updatedBookData);
    
        if (response.status === 200) {
          context.commit("updateBookInState", updatedBookData);
          context.commit("setUpdateStatus", "success");
        } else {
          throw new Error(`Failed to update book. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error updating book:", error);
        context.commit("setUpdateStatus", "error");
      }
    },
    

    // =============register and login users
    async registerUser({ commit }, userData) {
      try {
        const response = await axios.post(`${CapstoneUrl}register`, userData);
        const user = response.data;
        commit("setUser", user);
        if (response.status === 200) {
          sweet({
            icon: "success",
            title: "Registration Successful",
            text: "You have successfully registered.",
          });
        } else {
          sweet({
            icon: "error",
            title: "Registration Failed",
            text: "An error occurred during registration.",
          });
        }
      } catch (error) {
        sweet({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      }
    },
  
    async loginUser({ commit }, credentials) {
      try {
        const response = await axios.post(`${CapstoneUrl}login`, credentials);
        const { token, user } = response.data;
        commit("setToken", token);
        commit("setUser", user);
        sweet({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in.",
        });
      } catch (error) {
        sweet({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      }
    },

    //=========cart
    async addItemToCart({ commit }, item) {
      
      commit('addToCart', item);
    },
  
    
    async removeItemFromCart({ commit }, itemToRemove) {
      
      commit('removeFromCart', itemToRemove);
    },
  
   
    async updateItemQuantity({ commit }, { item, quantity }) {
     
      commit('updateCartItemQuantity', { item, quantity });
    },

  },
  modules: {} 
})

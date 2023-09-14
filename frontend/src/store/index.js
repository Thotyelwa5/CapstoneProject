import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import router from '@/router'
import Cookies from "js-cookie";
import { useCookies } from 'vue3-cookies'
import authUser from '@/services/AuthenticateUser'
const CapstoneUrl = "http://localhost:3000/"

export default createStore({
  state: {
    users: null,
    orders: [],
    user: null,
    books: null,
    book: null,
    spinner: false,
    msg: null,
    user: null,
    userData: null,
    token: null,
    isLoggedIn: false,
    selectedAuthor: null,
  },
  mutations: {
   setOrders(state, orders){
   state.orders = orders
   localStorage.setItem('orders', JSON.stringify(state.orders))
   },
   addToCart(state, { bookID, quantity }) {
    const orderItem = state.orders.find(item => item.bookID === bookID);
  
    if (orderItem) {
      orderItem.quantity += quantity;
    } else {
      const newItem = {
        bookID: bookID,
        quantity: quantity,
      };
      state.orders.push(newItem);
    }
  
    localStorage.setItem('order', JSON.stringify(state.orders));
  },  

  updateQuantity(state, { orderID, quantity }) {
    const item = state.orders.find(item => item.orderID === orderID);

    if (item) {
      item.quantity = quantity;
      localStorage.setItem('order', JSON.stringify(state.orders));
    }
  },

  removeFromCart(state, orderID) {
    state.orders = state.orders.filter(item => item.orderID !== orderID);
  },
    setUser(state, user) {
      state.user = user
    },
    setUser(state, user) {
      state.user = user;
      // state.isLoggedIn = true;
    },
    setUserData(state, userData){
      state.userData = userData;
      if (userData){
        const userDataForCookie ={
          msg: userData.msg,
          token: userData.token,
          result: userData.result
        };

        Cookies.set("userData", JSON.stringify(userDataForCookie), {
          expires : 1,
          path: "/",
          secure: true,
          sameSite: "None"
        })
      }
    },
    setToken(state, token){
      state.token = token ;
      Cookies.set("userToken", token ,{
        expires : 1,
          path: "/",
          secure: true,
          sameSite: "None"
      });
      state.isLoggedIn = true; 
    },
   
    setUsers(state, users) {
      state.users = users
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
    setOrder(state, bookID) {
      state.cart.push(bookID)
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
    setorders(state, orders){
      state.orders = orders
    },
    setUpdateStatus(state, status) {
      state.setUpdateStatus = status;
    },
    clearUser(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    setError(state, error){
      state.error= error
    }
  },
  actions: {
    //======logout
    logout({commit}) {
      //context.commit("setToken", null);
      //context.commit("setUserData", null);
      //context.commit("setUserRole", null);
      // Clear local storage
      localStorage.removeItem("userData");
      localStorage.removeItem("accessToken");
      commit("clearUser")
      // Clear cookies
      //Cookies.remove("userToken", { path: "/" });
//Cookies.remove("userData", { path: "/" });
// Cookies.remove("userData");
// Cookies.remove("userToken");
      window.location.reload();
    },

    //add to cart
    // async addToCart(context, { bookID, quantity }) {
    //   try {
    //     const userID = context.state.userData.result.userID; // Assuming userData contains the user information
    //     console.log("user id:", userID);
    //     const response = await fetch(`${CapstoneUrl}add-order/${userID}`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ bookID, quantity }),
    //     });
    
    //     if (!response.ok) {
    //       throw new Error(`Failed to add item to cart. Status: ${response.status}`);
    //     }
    
    //     const data = await response.json();
    //     context.commit("addToCart", data.result);
    //   } catch (error) {
    //     context.commit("setError", error.message);
    //   }
    // },

    // async addToCart(context, { bookID, quantity }) {
    //   try {
    //     // const userID = context.state.userData.result.userID; // Assuming userData contains the user information
    //     // console.log("User ID:",userID);
        
    //     const response = await fetch(`${CapstoneUrl}add-items/${userID}`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ bookID, quantity }),
    //     });
    
    //     if (!response.ok) {
    //       throw new Error(`Failed to add item to cart. Status: ${response.status}`);
    //     }
    
    //     const data = await response.json();
    //     const orders = context.state.orders.find(item => item.bookID === bookID);
    //     console.log(orders);
    
    //     if (orders) {
    //       // If the item is already in the cart, update its quantity
    //       orders.quantity += quantity;
    //     } else {
    //       // If the item is not in the cart, add it
    //       const newItem = {
    //         bookID: bookID,
    //         quantity: quantity,
    //       };
    //       context.commit("addToCart", newItem); // Call the original mutation
    //     }
    //   } catch (error) {
    //     context.commit("setError", error.message);
    //   }
    // },

    async addToCart(context, { bookID, quantity }) {
      try {
        // Fetch the userData from local storage
        const userDataJSON = localStorage.getItem('userData');
    
        // Check if userData exists in local storage
        if (userDataJSON) {
          // Parse the JSON data
          const userData = JSON.parse(userDataJSON);
    
          // Access the userID
          const userID = userData.result.userID;
          console.log("User ID:", userID);
    
          const response = await fetch(`${CapstoneUrl}add-orders/${userID}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ bookID, quantity }),
          });
    
          if (!response.ok) {
            throw new Error(`Failed to add item to cart. Status: ${response.status}`);
          }
    
          const data = await response.json();
          const orders = context.state.orders.find(item => item.bookID === bookID);
          console.log(orders);
    
          if (orders) {
            // If the item is already in the cart, update its quantity
            orders.quantity += quantity;
          } else {
            // If the item is not in the cart, add it
            const newItem = {
              bookID: bookID,
              quantity: quantity,
            };
            context.commit("addToCart", newItem); // Call the original mutation
          }
        } else {
          console.error('User data not found in local storage');
          context.commit("setError", "User data not found in local storage");
        }
      } catch (error) {
        context.commit("setError", error.message);
      }
    },    

    async updateCartQuantity(context, { orderID, quantity }) {
      try {
        const response = await fetch(`${CapstoneUrl}order/${orderID}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ quantity }),
        });
  
        if (!response.ok) {
          throw Error("Failed to update item quantity in cart");
        }
  
        context.commit("updateQuantity", { orderID, quantity });
      } catch (error) {
        context.commit("setError", error.message);
      }
    },
  
    async removeFromOrders(context, orderID) {
      const userID = context.state.userData.result.userID;
      console.log("User ID:", userID, "order ID:", orderID);
      try {
        const response = await fetch(`${CapstoneUrl}order/${userID}/${orderID}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw Error("Failed to remove item from cart");
        }
        context.commit("removeFromOrders", orderID);
      } catch (error) {
        context.commit("setError", error.message);
      }
    },

    // async getOrder(context) {
    //   const userID = context.state.userData?.result?.userID; 
    //   console.log('userID Store:', userID);
    
    //   if (userID) { 
    //     try {
    //       const response = await fetch(`${CapstoneUrl}order/${userID}`);
    //       if (!response.ok) {
    //         throw Error("Failed to retrieve cart items");
    //       }
    //       const data = await response.json();
    //       console.log("Data:", data);
    //       const orders = data.results;
    //       context.commit("setOrders", orders);
    //       console.log("Orders Store:", orders);
    //     } catch (error) {
    //       context.commit("setError", error.message);
    //     }
    //   } else {
    //     console.error('User data or userID not found in state');
    //   }
    // },

    // async getOrder(context) {
    //   const userData = context.state.userData;
    //   console.log('userData:', userData);
      
    //   const userID = userData?.result?.userID;
    //   console.log('userID Store:', userID);
    
    //   if (userID) {
    //     try {
    //       const response = await fetch(`${CapstoneUrl}order/${userID}`);
    //       if (!response.ok) {
    //         throw Error("Failed to retrieve cart items");
    //       }
    //       const data = await response.json();
    //       console.log("Data:", data);
    //       const orders = data.results;
    //       context.commit("setOrders", orders);
    //       console.log("Orders Store:", orders);
    //     } catch (error) {
    //       context.commit("setError", error.message);
    //     }
    //   } else {
    //     console.error('User data or userID not found in state');
    //   }
    // },

    async getOrder(context) {
      // Fetch the userData from local storage
      const userDataJSON = localStorage.getItem('userData');
    
      if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
    
        // Access the userID
        const userID = userData.result.userID;    
        // Now, you have userID available
        console.log('userID from local storage:', userID);
    
        try {
          const response = await fetch(`${CapstoneUrl}order/${userID}`);
          if (!response.ok) {
            throw Error("Failed to retrieve cart items");
          }
          const data = await response.json();
          console.log("Data:", data);
          const orders = data.result;
          // console.log("Orders From Store:", orders);
          context.commit("setOrders", orders);
          console.log("Orders Store:", orders);
        } catch (error) {
          context.commit("setError", error.message);
        }
      } else {
        console.error('User data not found in local storage');
        context.commit("setError", "User data not found in local storage");
      }
    },
    
 
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
     //==============DELETE A User
     async deleteUser(context, userID) {
      try {
        context.commit("setDeletionStatus", null);
        
        const response = await axios.delete(`${CapstoneUrl}user/${userID}`);
        
        if (response.status !== 200) {
          throw new Error(`Failed to delete user. Status: ${response.status}`);
        }
        
        context.commit("removeUser", userID);
        context.commit("setDeletionStatus", "success");
      } catch (error) {
        console.error("Error deleting user:", error);
        context.commit("setDeletionStatus", "error");
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

    // async loginUser(context, userData) {
    //   try {
    //     const response = await axios.post(`${CapstoneUrl}login`, userData, {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     });
    
    //     if (!response.data.token) {
    //       throw new Error('Failed to login user.');
    //     }
    
    //     const data = response.data;
    //     const accessToken = data.token;
    
    //     localStorage.setItem('userData', JSON.stringify(data));
    //     localStorage.setItem('accessToken', accessToken);
    
    //     context.commit('setUser', data.user);
    //     context.commit('setToken', accessToken);
    //     context.commit('setUserData', data);
    //     window.location.reload();
        
    //     return data;
    //   } catch (error) {
    //     console.error('Error logging in user:', error);
    //     context.commit('setError', error.message);
    //     throw error;
    //   }
    // },

    async loginUser(context, userData) {
      try {
        const response = await axios.post(`${CapstoneUrl}login`, userData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.data.token) {
          throw new Error('Failed to login user.');
        }
    
        const data = response.data;
        const accessToken = data.token;
    
        // Store user data and access token in localStorage
        console.log('userData in loginUser:', data);
        console.log('accessToken in loginUser:', accessToken);
        localStorage.setItem('userData', JSON.stringify(data));
        localStorage.setItem('accessToken', accessToken);
    
        // Commit mutations to set user-related state in Vuex
        context.commit('setUser', data.user);
        context.commit('setToken', accessToken);
        context.commit('setUserData', data);
    
        // Assuming that you have an isLoggedIn mutation, set it to true
        context.commit('isLoggedIn', true);

        context.dispatch('getOrder');
    
        // Refresh the page to reflect the user's logged-in status
        // window.location.reload();  
        return data;
      } catch (error) {
        console.error('Error logging in user:', error);
        context.commit('setError', error.message);
        throw error;
      }
    },    

    //=============fetch users
    async fetchUsers(context) {
      try{
        const {data} = await axios.get(`${CapstoneUrl}users`)
        context.commit("setUsers", data.results)
        console.log(data.results);
      }catch(e){
        context.commit("setMsg", "An error occured.")
      }
    },

  },
  modules: {} 
})

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
  },
  actions: {
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
        console.log(data.result);
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },
    async login(context, payload) {
      try {
        const { msg, token, result } = await axios(`${CapstoneUrl}user/login`);
        if (result) {
          context.commit('setUserData', result); 
          context.commit('setToken', token); 
          useCookies.set('LegitUser', { token, result });
          authUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back ${result?.firstName} ${result?.lastname}`, 
            icon: "success",
            timer: 2000,
          });
          router.push({ name: 'home' });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 2000,
          });
        }
      } catch (error) {
        console.error("An error occurred during login:", error);
      }
    } 
  },
  modules: {} 
})

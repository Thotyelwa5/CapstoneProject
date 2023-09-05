import { createStore } from 'vuex'
import axios from 'axios'
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
  getters: {
  },
  mutations: {
    setUser(state, users){
      state.users = users
    },
    setUser(state, user){
      state.user = user
    },
    setBooks(state, books){
      state.books = books
    },
    setBook(state, book){
      state.book = book
    },
    setSpinner(state, value){
      state.spinner = value
    },
    setToken(state, token){
      state.token = token
    },
    setmsg(state, msg){
      state.msg = msg
    },
    addToCart(state, book) {
      state.cart.push(book);
    },
  },
  actions: {
    async fetchBooks(context) {
      try{
        const {data} = await axios.get(`${CapstoneUrl}books`)
        context.commit("setBooks", data.results)
        console.log(data.results);
      }catch(e){
        context.commit("setMsg", "An error occured.")
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
  },
  modules: {
  }
})

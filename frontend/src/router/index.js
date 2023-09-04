import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Single from '@/components/SingleComp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/books',
    name: 'books',
    component: () => import('../views/BooksView.vue')
  },
  {
    path: "/single/:bookID",
    name: "Single",
    component: Single
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminVue.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CheckoutView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

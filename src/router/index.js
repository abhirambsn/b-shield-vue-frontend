import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter(to, from, next) {
      if (localStorage.getItem("authToken")) {
        next()
      } else {
        next({
          name: "Login",
          query: { redirectPath: to.fullPath }
        })
      }
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    beforeEnter(to, from, next) {
      localStorage.removeItem("authToken")
      alert("Logout Successful")
      next({
        name: "Login"
      })
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

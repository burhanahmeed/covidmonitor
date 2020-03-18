import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Index.vue'

Vue.use(VueRouter)

const routes = [
  {   
    path: '/index.html',
    component: Home,
    alias: '/'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/map',
    name: 'Map',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Map.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home/Index.vue'
import Continent from '../views/Continent.vue'
import Bingmap from '../views/BingMap.vue'

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
  },
  {
    path: '/continent',
    name: 'Continent',
    component: Continent
  },
  {
    path: '/bing-map',
    name: 'Bing Map',
    component: Bingmap
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

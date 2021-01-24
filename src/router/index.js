import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Filmes não curados',
    component: Home,
  },
  {
    path: '/dislikes',
    name: 'Filmes não curtidos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dislikes.vue')
  },
  {
    path: '/likes',
    name: 'Filmes curtidos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Likes.vue')
  },
  // {
  //   path: '/token',
  //   name: 'Gera Token',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/GeraToken.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

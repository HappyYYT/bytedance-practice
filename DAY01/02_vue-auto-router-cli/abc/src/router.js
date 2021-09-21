import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Abc',
      name: 'Abc',
      component: () => import('./views/Abc.vue')
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('./views/About.vue')
    },
    {
      path: '/HappyYYT',
      name: 'HappyYYT',
      component: () => import('./views/HappyYYT.vue')
    },
  ]
})

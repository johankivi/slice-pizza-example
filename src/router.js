import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pizzamenu',
      name: 'pizza-menu',
      component: () => import('./views/PizzaMenu.vue')
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('./views/Confirm.vue')
    },
    {
      path: '/tracking',
      name: 'tracking',
      component: () => import('./views/Tracking.vue')
    }
  ]
})

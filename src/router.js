import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import ProductList from './views/Product-list'
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 300)
    })
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login-form',
      component: Login,
    },
    {
      path: '/product-list',
      name: 'Product List',
      component: ProductList,
    },
  ]
})

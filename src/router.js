import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import ProductTable from './views/Product-table'
import ProductChart from './views/Product-chart'
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
            path: '/product-table',
            name: 'product-table',
            component: ProductTable,
        },
        {
            path: '/product-chart',
            name: 'product-chart',
            component: ProductChart,
        },
    ]
})

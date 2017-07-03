import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login/login.vue'
import index from '@/page/index/index.vue'
import App from '../App.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component:App,
      children: [
        {
          path: '',
          redirect: '/index'
        },
        {
          path: '/index',
          component: index,
        },
        {
          path: '/login',
          component: Login
        }
      ]
    }
  ]
})

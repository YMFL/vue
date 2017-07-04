import Vue from 'vue'
import Router from 'vue-router'

import home from '@/page/home/home.vue'
import Login from '@/page/login/login.vue'
import room from '@/page/room/room.vue'
import player from '@/page/player/player.vue'
import banner from '@/page/banner/banner.vue'
import adware from '@/page/adware/adware.vue'
import sweepstake from '@/page/sweepstake/sweepstake.vue'
import check from '@/page/check/check.vue'
import recharge from '@/page/recharge/recharge.vue'
import money from '@/page/money/money.vue'
import user from '@/page/user/user.vue'
import lottery from '@/page/lottery/lottery.vue'
import opinion from '@/page/opinion/opinion.vue'
import extension from '@/page/extension/extension.vue'
import league from '@/page/league/league.vue'

import App from '../App.vue'
import layout from '../components/layout.vue'
import Page404 from '@/page/error/error.vue'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component:App,
      children: [
        {
          path: '',
          redirect: '/main/home'
        },
        {
          path: '/login',
          component: Login,
          name:'login'
        },
        {
          path: 'main',
          component:layout ,
          redirect:'/main/home',
          children:[
            {
              path:'home',
              component:home,
              name:'home'
            }, {
              path:'room',
              component:room,
              name:'room'
            }, {
              path:'player',
              component:player,
              name:'player'
            }, {
              path:'banner',
              component:banner,
              name:'banner'
            }, {
              path:'adware',
              component:adware,
              name:'adware'
            }, {
              path:'sweepstake',
              component:sweepstake,
              name:'sweepstake'
            }, {
              path:'check',
              component:check,
              name:'check'
            }, {
              path:'recharge',
              component:recharge,
              name:'recharge'
            }, {
              path:'money',
              component:money,
              name:'money'
            }, {
              path:'user',
              component:user,
              name:'user'
            }, {
              path:'lottery',
              component:lottery,
              name:'lottery'
            }, {
              path:'opinion',
              component:opinion,
              name:'opinion'
            }, {
              path:'extension',
              component:extension,
              name:'extension'
            }, {
              path:'league',
              component:league,
              name:'league'
            }
          ]
        }
      ]
    },
    {
      path:'*',
      component:Page404
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

import Heard from '@/components/heard/Heard'

import Search from '@/components/search/Search'
import Order from '@/components/order/Order'
import Profile from '@/components/profile/Profile'
import  Waimai from '@/components/waimai/Waimai'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Heard',
      component: Heard,
        children:[
       {
            path: '/',
            name: 'Waimai',
            component: Waimai,   

        },
            {
                path: '/search',
                name: 'Search',
                component: Search
            },
            {
                path: '/order',
                name: 'Order',
                component: Order
            },

            {
                path: '/profile',
                name: 'Profile',
                component: Profile
            },]
    },



  ]
})

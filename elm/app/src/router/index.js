import Vue from 'vue'
import Router from 'vue-router'

import Heard from '@/components/heard/Heard'
import Show from '@/components/show/Show'
import Search from '@/components/search/Search'
import Order from '@/components/order/Order'
import Profile from '@/components/profile/Profile'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Heard',
      component: Heard
    },
      {
          path: '/',
          name: 'Show',
          component: Show
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
      },


  ]
})

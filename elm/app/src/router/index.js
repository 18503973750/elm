import Vue from 'vue'
import Router from 'vue-router'

import Heard from '@/components/heard/Heard'

import Search from '@/components/search/Search'
import Order from '@/components/order/Order'
import Profile from '@/components/profile/Profile'
import Waimai from '@/components/waimai/Waimai'
import Home from '@/components/Home/home'
import City from '@/components/City/city'
import Login from '@/components/login'
import Msite from '@/components/msite'
import Forget from '@/components/forget'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Heard',
            component: Heard,
            children: [
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
                },
            ]
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/city/:id',
            name: 'City',
            component: City
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/msite',
            name: 'msite',
            component: Msite
        },
        {
            path: '/forget',
            name: 'forget',
            component: Forget
        }

    ]
})


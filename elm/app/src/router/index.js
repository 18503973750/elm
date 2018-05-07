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

import Balance from '@/components/profile/Balance'
import Detail from '@/components/profile/Detail'
import Integral from '@/components/profile/Integral'
import Benefit from '@/components/profile/Benefit'
import Service from '@/components/profile/Service'
import Chome from '@/components/profile/Chome'
import Header from '@/components/profile/Header'
import Download from '@/components/profile/Download'
import Vip from '@/components/profile/Vip'
import Orderlist from '@/components/profile/Orderlist'

import Title from '@/components/waimai/Title'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Heard',
        component: Heard,
        children: [{
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
            }
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
<<<<<<< HEAD
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
=======
            path: '/balance',
            name: 'Balance',
            component: Balance
        },
        {
            path: '/integral',
            name: 'Integral',
            component: Integral
        },
        {
            path: '/benefit',
            name: 'Benefit',
            component: Benefit
        },
        {
            path: '/service',
            name: 'Service',
            component: Service
        },
        {
            path: '/chome',
            name: 'Chome',
            component: Chome,
>>>>>>> d6af991fa9d716c2e77bc225c769c4fabcde5641

        },
        {
            path: '/header',
            name: 'Header',
            component: Header
        },
        {
            path: '/download',
            name: 'Download',
            component: Download
        },
        {
            path: '/vip',
            name: 'Vip',
            component: Vip
        },
        {

            path: '/orderlist',
            name: 'Orderlist',
            component: Orderlist
        },
        {
            path: '/balance/detail',
            name: 'Detail',
            component: Detail
        }
    ]

})

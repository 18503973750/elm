import Vue from 'vue'
import Router from 'vue-router'

import Heard from '@/components/heard/Heard'

import Search from '@/components/search/Search'
import Order from '@/components/order/Order'
import Profile from '@/components/profile/Profile'
import Waimai from '@/components/waimai/Waimai'
import Home from '@/components/Home/home'
import City from '@/components/City/City'
import Login from '@/components/login'
import Forget from '@/components/forget'

import Balance from '@/components/profile/Balance'
import Detail from '@/components/profile/Detail'
import Integral from '@/components/profile/Integral'
import Benefit from '@/components/profile/Benefit'
import Benefit2 from '@/components/profile/Benefit2'

import Service from '@/components/profile/Service'
import Chome from '@/components/profile/Chome'
import Header from '@/components/profile/Header'
import Download from '@/components/profile/Download'
import Vip from '@/components/profile/Vip'
import Orderlist from '@/components/profile/Orderlist'
import Hbhistory from '@/components/profile/Hbhistory'
import Title from '@/components/waimai/Title'
import city1 from "@/components/profile/city"
import b2 from "@/components/profile/Benefit1"
import Exchange from "@/components/profile/Exchange"

import Commend from "@/components/profile/Commend"
import Coupon from "@/components/profile/Coupon"
import Payment from "@/components/profile/Payment"

import Cdetail from '@/components/waimai/Cdetail'

import ConfirmOrder from '@/components/confirmOrder'
import ChooseAddress from '@/components/chooseAddress'
import AddAddress from '@/components/addAddress'
 

import ConfirmOrder from '@/components/confirmOrder'


import Infor from '@/components/profile/Infor'
import Address from '@/components/profile/Address'
import add from '@/components/profile/add'
import addDetail from '@/components/profile/addDetail'
import forget1 from '@/components/profile/forget1'
import elm from '@/components/waimai/elm'
import setusername from '@/components/profile/setusername'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/waimai',
			name: 'Heard',
			component: Heard,
			children: [{
					path: '/waimai',
					name: 'waimai',
					component: Waimai
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
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/home',
			name: 'Home',
			component: Home
		},
		{
			path: '/city/:id',
			name: 'City',
			component: City,
},{

            path: '/Benefit/Commend',
            name: 'Commend',
            component: Commend
        },
        {
            path: '/Benefit/coupon',
            name: 'Coupon',
            component: Coupon
        },
        {
            path:'/Payment',
            name:'Payment',
            component:Payment
        },
        {
            path: '/elm',
            name: 'Cdetail',
            component: Cdetail
        },
        {
            path: '/confirmOrder',
            name: 'confirmOrder',
            component: ConfirmOrder,
            
        },
        {
            path: '/confirmOrder/chooseAddress',
            name: 'chooseAddress',
            component: ChooseAddress,                    
        },
        {
            path: '/confirmOrder/chooseAddress/addAddress',
            name: 'addAddress',
            component: AddAddress
        }        
        
      

    ]

		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/forget',
			name: 'forget',
			component: Forget
		},
		{
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
			path: '/benefit2',
			name: 'Benefit2',
			component: Benefit2
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
		},
		{
			path: '/Benefit/Hbhistory',
			name: 'Hbhistory',
			component: Hbhistory
		},
		{
			path: '/city1',
			name: 'city1',
			component: city1
		},
		{
			path: '/b2',
			name: 'b2',
			component: b2
		},
		{
			path: '/Benefit/exchange',
			name: 'Exchange',
			component: Exchange
		},
		{
			path: '/waimai',
			name: 'waimai',
			component: Waimai
		},
		{
			path: '/title',
			name: 'Title',
			component: Title
		},
		{
			path: '/',
			name: 'Title',
			component: Title
		},
		{

			path: '/Benefit/Commend',
			name: 'Commend',
			component: Commend
		},
		{
			path: '/Benefit/coupon',
			name: 'Coupon',
			component: Coupon
		},
		{
			path: '/Payment',
			name: 'Payment',
			component: Payment
		},
		{
			path: '/elm',
			name: 'Cdetail',
			component: Cdetail
		},

		{
			path: '/confirmOrder',
			name: 'confirmOrder',
			component: ConfirmOrder
		},
		{
			path: '/infor',
			name: 'Infor',
			component: Infor
		},
		{
			path: '/address',
			name: 'Address',
			component: Address
		},
		{
			path: '/add',
			name: 'add',
			component: add
		},
		{
			path: '/addDetail',
			name: 'addDetail',
			component: addDetail
		},
		{
			path: '/forget1',
			name: 'forget1',
			component: forget1
		},
		{
			path:'/elm',
			name:'elm',
			component:elm
		},
		{
			path:'/setusername',
			name:'setusername',
			component:setusername
		}
	




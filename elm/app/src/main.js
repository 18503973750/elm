// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'

import store from "./store";


import 'element-ui/lib/theme-chalk/index.css';
import {Plugin1} from '../static/js/plugin1.js';
Vue.use(Plugin1)



import ElementUI from 'element-ui'



import Vuex from 'vuex'

var VueTouch=require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
    store,
  components: { App },
  template: '<App/>'
})

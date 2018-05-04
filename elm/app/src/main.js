// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import ElementUI from 'element-ui'
<<<<<<< HEAD
import 'element-ui/lib/theme-chalk/index.css';
=======
import 'element-ui/lib/theme-chalk/index.css'

>>>>>>> c19b77660365778c3b11562487fa0fc1e02dca0b
import Vuex from 'vuex'


Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

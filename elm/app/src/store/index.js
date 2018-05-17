import Vuex from "vuex"
import Vue from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogin:0, 
    },
    mutations: {
	    changeLogin(state,data){
	        state.isLogin = data;
	    }
    }
})

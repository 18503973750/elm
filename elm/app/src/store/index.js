import Vuex from "vuex"
import Vue from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        order: ''
    },
    mutations: {
        order(state, data) {
            state.order = data;
            // console.log(data)

        }
    }
})

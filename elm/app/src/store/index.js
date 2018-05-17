import Vuex from "vuex"
import Vue from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        order: '',
        codes: []
    },
    mutations: {
        order(state, data) {
            state.order = data;
            // console.log(data)

        },
        codes(state, data) {
        		state.codes.push(data);
        },
        delete(state,index){
        	state.codes.splice(index,1)
        }
    }
})

import Vuex from "vuex"
import Vue from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        order: '',
        st:'',
        st1:'',
        st3:'',
        st4:''


    },
    mutations: {
        order(state, data) {
            state.order = data;


        },
        st(state,data){
            state.st=data


        },
        st1(state,data){
            state.st1=data

        },
        st3(state,data){
            state.st3=data
        },
        st4(state,data){
            state.st4=data
        },


    }
})

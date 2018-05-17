import Vuex from "vuex"
import Vue from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        order: '',
        st:'',
        st1:'',
        st2:'',
        st3:''

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
        st2(state,data){
            state.st2=data
            console.log(data+'!!!!')

        },
        st3(state,data){
            state.st3=data
            console.log(data+'??????')
        },

    }
})

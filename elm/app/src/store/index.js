import Vuex from "vuex"
import Vue from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogin:0, 
        order: '',
        codes: [],
        st:'',
        st1:'',
        st2:'',
        st3:'',       
    },
    mutations: {
               
        order(state, data) {
            state.order = data;
        },
        codes(state, data) {
    		state.codes.push(data);
        },
        delete(state,index){
        	state.codes.splice(index,1)
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

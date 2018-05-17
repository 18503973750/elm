import Vuex from "vuex"
import Vue from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogin: 0,
        order: '',
<<<<<<< HEAD
        st:'',
        st1:'',
        st3:'',
        st4:''


=======
        codes: [],
        st: '',
        st1: '',
        st2: '',
        st3: '',
>>>>>>> 517c09ff28d668decfdff66d9fceeffab0b21ea1
    },
    mutations: {
        st(state, data) {
            state.st = data

        },
<<<<<<< HEAD
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

=======
        st1(state, data) {
            state.st1 = data
        },
        st2(state, data) {
            state.st2 = data
            console.log(data + '!!!!')

        },
        st3(state, data) {
            state.st3 = data
            console.log(data + '??????')
        },
    },
>>>>>>> 517c09ff28d668decfdff66d9fceeffab0b21ea1

})
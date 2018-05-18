import Vuex from "vuex"
import Vue from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
<<<<<<< HEAD
    state: {
        isLogin: 0,
        order: '',

        st:'',
        st1:'',
        st3:'',
        st4:'',



        codes: [],


    },
    mutations: {

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


        st2(state, data) {
            state.st2 = data

        },

    },

=======
>>>>>>> 4a93e8c42fbb772544433f29dd4959cc5e2e7132

	state: {
		isLogin: 0,
		order: '',
		codes: [],
		st: '',
		st1: '',
		st2: '',
		st3: '',
	},
	mutations: {
		st(state, data) {
			state.st = data

		},
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
		//往address里添加列表
		codes(state, data) {
			state.codes.push(data);
		},
		//获取删除下标
		delete(state, index) {
			state.codes.splice(index, 1);
		}
	},
})
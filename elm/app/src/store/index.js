import Vuex from "vuex"
import Vue from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isLogin: 0,
		order: '',
		codes: [],
		st: '',
		st1: '',
		st2: '',
		st3: '',
		st4: '',
	},
	mutations: {
		st(state, data) {
			state.st = data

		},
		st1(state, data) {
			state.st1 = data
		},
		st3(state, data) {
			state.st3 = data
		},
		st4(state, data) {
			state.st4 = data
		},

		st2(state, data) {
			state.st2 = data
		},
		//往address里添加列表
		codes(state, data) {
			state.codes.push(data);
		},
		//获取删除下标
		delete(state, index) {
			state.codes.splice(index, 1);
		}
	}
})
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store=new Vuex.Store({
	state:{
		dialogFormVisible:false
	},
	mutations:{
		changedialogFormVisible(state,payload){
			state.dialogFormVisible=payload;
		}
	}
})
export default store;
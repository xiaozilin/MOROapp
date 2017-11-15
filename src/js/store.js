import vue from "vue"
import vuex from "vuex"

vue.use(vuex)
var store = new vuex.Store({
	state:{
		head:"1"
	},
	mutations:{
		what(a){
			a.head=1
		},
		whats(a,b){
			a.head=b
		}
	}
})
export default store
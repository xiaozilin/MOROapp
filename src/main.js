import Vue from 'vue'
import  VueRouter from 'vue-router'
import App from './App.vue'
import VueResource from "vue-resource"
import store from "./js/store.js"
// 定义Vue可以使用VueRouter
Vue.use(VueRouter)
Vue.use(VueResource)

import routers from './js/roeuter.js'
new Vue({
  el: '#app',
  render: h => h(App),
  router:routers,
  store:store
})

import VueRouter from 'vue-router'

import menu  from  '../component/nav/menu.vue'
import hot from "../hot/hot.vue"
import my from "../component/my/my.vue"
import find from "../component/find/find.vue"
import person from "../component/my/person.vue"
import load from "../component/load/load.vue"
import register from "../component/load/register.vue"
import mhot from "../hot/morehot.vue"
import news from "../hot/news.vue"
import moro from "../component/nav/moro.vue"
import push from "../component/nav/push.vue"
import attach from "../component/nav/attach.vue"
export default new VueRouter({
	routes:[
		{path:'/menu',component:menu},
		{path:'/hot',component:hot},
		{path:'/find',component:find},
		{path:'/my',component:my},
		{path:'/person',component:person},
		{path:'/register',component:register},
		{path:'/mhot',component:mhot},
		{path:'/news',component:news},
		{path:'/load',component:load},
		{path:'/moro',component:moro,
		children:[
		{path:"/push",component:push},
		{path:"/attach",component:attach},
		{path:"/*",component:push}
		]
		},
		{path:"*",redirect:"/my"}
	]

})

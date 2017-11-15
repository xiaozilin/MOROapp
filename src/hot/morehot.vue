<template>
	<main>
		<div id="bg">
				<p id="ping">
				<span @click="fn" style="float: left;">&nbsp;&lt;</span>
				热门标签
				</p>
			</div>
			<ul>
				<li v-for="v in fill">
					<h1>
						#{{v.name}}
						<img src="../assets/椭圆 919.png" alt="" />
						<span>{{v.play}}</span>
						<span class="right"><router-link :to="v.id">更多>
						</router-link>
						</span>
					</h1>
					<ul class="pill">
						<li v-for="i in v.such"><img :src="i" alt="" /></li>
					</ul>
			</li>
			</ul>
	</main>
</template>

<script>
	export default{
		template:"",
		methods:{
			fn(){
				this.$router.go(-1);
			}
		},
		data(){
			return{
				fill:""
			}
		},
		mounted(){
			this.$http.get("data.json").then(function(res){
				this.fill=res.body.hot;
				console.log(this.fill)
			})
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
		color: #000;
		font-family: "微软雅黑";
	}
	.pill li{
		float: left;
		width: 33%;
		padding: 0;
		text-align: center;
	}
	.pill{
		width: 100%;
		height: 400px;
		border-bottom: 1px solid #666;
	}
	#ping{
			height: 100px;
			font-size: 50px;
			line-height: 100px;
			text-align: center;
			color: #000;
			width: 100%;
			background:#fff
		}
		#ping span{
			font-size: 85px;
			position: absolute;
			top: 5px;
			left: 10px;
		}
	#bg{
			width: 100%;
		}
		ul{
			background: #fff;
			width: 100%;
		}
		ul li{
			width: 100%;
			padding: 0 10px;
			box-sizing: border-box;
		}
		ul li h1{
			font-size: 48px;
			padding: 30px;
		}
		ul li h1 span{
			font-size: 40px;
			color: #ddd;
		}
		ul li h1 img{
			margin-left: 3%;
			width: 4%;
		}
		.right{
			float: right;
		}
		.right a{
			color: red;
			
		}
</style>
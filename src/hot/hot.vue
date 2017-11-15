<template>
	<main>
		<div id="select">
			<p @click="selected">{{msg}} 
				<img src="../assets/返回按钮 拷贝 2.png" alt="" style="transform: scale(1.5);" />
				<span @click.stop="screen" id="right">性别筛选</span>
			</p>
			<ul id="fillter">
				<li @click="can">全部</li>
				<li @click="can">男</li>
				<li @click="can">女</li>
				<li @click="can">取消</li>
			</ul>
			<ul class="change">
				<li @click="day">24小时排行榜</li>
				<li @click="week">周榜</li>
				<li @click="mouth">月榜</li>
				<li @click="cancel">取消</li>
			</ul>
			<ul id="collo">
				<li style="color: red;border-bottom: 2px solid red;" id="c-c" @click="fn">搭配</li>
				<li id="c-d" @click="fk" style="float: right;">博主</li>
			</ul>
		</div>
		<div id="collocation">
			<ul id="rank">
				<li v-for="(v,i) in list">
					<router-link to="/null">
						<img class="good" :src="v.url" alt="" />
						<p style="width: 100%;text-align: center;font-size: 30px;"><img style="width: 10%;" src="../assets/椭圆 919.png" alt="" />{{v.rec}}</p>
					</router-link>
				</li>
			</ul>
			<ul id="blogger">
				<li v-for="v in arr">
					<router-link to="/">
						<img style="float: left;margin-top: 50px;margin-left: 5%;transform: scale(1.5);" :src="v.iurl" alt="" />
						<div class="bill">
						<h1 class="name">{{v.name}}</h1>
						<span class="size">{{v.where}}/{{v.height}}/{{v.style}}</span>
						<span class="follow">+关注</span>
						</div>
					</router-link>
					<ul class="list">
						<li v-for="i in v.url"><router-link to="/"><img :src="i" alt="" /></router-link></li>
					</ul>
				</li>
			</ul>
		</div>
	</main>
</template>
<script>
	export default {
		template: "",
		data() {
			return {
				msg: "24小时排行榜",
				list:"",
				arr:""
			}
		},
		mounted(){
			this.$http.get("data.json").then(function(red){
				this.arr=red.body.data
				this.list=red.body.rank
			}),
			this.$store.state.head="热榜"
		},
		methods: {
			selected() {
				var i = document.getElementsByClassName("change")[0];
				i.style.display = "block";
			},
			day() {
				this.msg = "24小时排行榜"
				document.getElementsByClassName("change")[0].style.display = "none"
			},
			week() {
				this.msg = "周榜"
				document.getElementsByClassName("change")[0].style.display = "none"
			},
			mouth() {
				this.msg = "月榜"
				document.getElementsByClassName("change")[0].style.display = "none"
			},
			cancel() {
				document.getElementsByClassName("change")[0].style.display = "none"
			},
			screen() {
				document.getElementById("fillter").style.display = "block"
			},
			can() {
				document.getElementById("fillter").style.display = "none"
			},
			fn(){
				document.getElementById("c-c").style.color="red";
				document.getElementById("c-d").style.color="#666";
				document.getElementById("rank").style.display="block"
				document.getElementById("blogger").style.display="none"
				document.getElementById("c-c").style.borderBottom="2px solid red"
				document.getElementById("c-d").style.borderBottom="0px"
			},
			fk(){
				document.getElementById("c-c").style.color="#666";
				document.getElementById("rank").style.display="none"
				document.getElementById("blogger").style.display="block"
				document.getElementById("c-d").style.borderBottom="2px solid red"
				document.getElementById("c-c").style.borderBottom="0px"
				document.getElementById("c-d").style.color="red";
			}
		}
	}
</script>
<style scoped>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	
	#select {
		height: 202px;
		background: #FFFFFF;
		font-size: 40px;
		line-height: 100px;
	}
	
	#select p {
		text-align: center;
		width: 100%;
		position: relative;
	}
	
	#collo {
		background: #fff;
		padding: 0px 40px;
		height: 100px;
		border-bottom: 1px solid #666;
	}
	
	#collo li {
		float: left;
		color: #666;
	}
	
	#right {
		right: 20px;
		color: #666;
		position: absolute;
		z-index: 10;
	}
	
	.change {
		display: none;
		background: #FFFFFF;
		position: absolute;
		width: 50%;
		left: 225px;
		top: 100px;
		z-index: 1;
	}
	.bill{
		width: 100%;
		height: 200px;
	}
	.change li {
		width: 100%;
		text-align: center;
	}
	
	#fillter {
		background: #fff;
		width: 100%;
		text-align: center;
		position: absolute;
		bottom: 90px;
		display: none;
		left: 0;
		z-index: 1;
	}
	.list{
		width: 100%;
	}
	#blogger li .list li{
		float: left;
		width: 31%;
	}
	#blogger li .list li img{
		width: 100%;
	}
	#collocation {
		background: #fff;
	}
	
	#collocation li {
		float: left;
		margin: 10px;
		width: 31%;
	}
	
	#collocation li .good {
		width: 100%;
	}
	#blogger{
		background: #fff;
		overflow: hidden;
		width: 100%;
		display: none;
	}
	#blogger li{
		width:98%;
		position: relative;
	}
	.follow{
		position: absolute;
		top: 70px;
		right: 0px;
		font-size: 36px;
		border-radius: 80px;
		border: 1px solid red;
		width: 20%;
		text-align: center;
		height: 70px;
		line-height: 70px;
	}
	.name{
		font-size: 50px;
		position: absolute;
		top: 40px;
		left: 200px;
		color: #000;
	}
	.size{
		position: absolute;
		top: 120px;
		left: 200px;
		color: #666;
		font-size: 36px;
	}
</style>
<template>
	<main>
		<div id="load">
			<img style="width: 100%;" src="../../assets/图层 1890.png" alt="" />
			<router-link to="/find"><span id="go">随便逛逛</span></router-link>
			<div id="theme">
				<h1>M O R K E</h1>
				<span>连 接 一 切 有 品 味 的 人</span>
			</div>
			
			<input v-model="name" type="tel" name="" id="" value="" placeholder="   手机号" required/>			
			<input v-model="eq" type="number" name="" id="" value="" placeholder="   验证码" style="width: 70%;" />
			<span id="oil">获取验证码</span>
			<input v-model="psd" type="password" name="" id="" value="" placeholder="   密码" required/>

			<p @click="land" class="loading">注册</p>
			<p style="font-size: 20px;text-align: center;">点击注册表示同意用户协议</p>
			
			<p class="font">快捷登录</p>
			<ul id="fast">
				<li><img src="../../assets/图层 700.png" alt="" /></li>
				<li><img src="../../assets/图层 701.png" alt="" /></li>
				<li><img src="../../assets/图层 703.png" alt="" /></li>
			</ul>
		</div>
	</main>
</template>

<script>
	export default{
		template:"",
		data(){
			return{
				name:"",
				psd:"",
				eq:""
			}
		},
		mounted(){
			
		},
		methods:{
			land(){
				
			}
			
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	#oil{
		width: 25%;
		line-height: 100px;
		font-size: 48px;
		color: red;
		float: right;
	}
	#regi{
		color: #fff;
		position: absolute;
		top: 20px;
		left: 30px;
		font-size: 48px;
	}
	#fast li{
		width: 33%;
		float: left;
		text-align: center;
	}
	.font{
		text-align: center;
		font-size: 36px;
		margin: 150px 0;
	}
	.loading{
		text-align: center;
		font-size: 48px;
		width: 50%;
		color: #fff;
		border-radius: 80px;
		line-height: 100px;
		height: 100px;
		background: pink;
		border: 1px solid pink;
		margin: 138px auto;
	}
	input{
		width: 100%;
		height: 100px;
		border: 0px;
		font-size: 46px;
	}
	input:nth-of-type(1){
		margin-top: 30px;
		border-bottom: 1px solid #666;
	}
	input:nth-of-type(2){
		border-bottom: 1px solid #666;
	}
	input:nth-of-type(3){
		border-bottom: 1px solid #666;
	}
	#theme{
		color: #fff;
		position: absolute;
		top: 250px;
		width: 100%;
		text-align: center;
	}
	#theme h1{
		font-size: 80px;
	}
	#theme span{
		font-size: 46px;
	}
	#load{
		position: absolute;
		background: #fff;
		z-index: 20;
		height: 1745px;
	}
	#go{
		position: absolute;
		right: 40px;
		top: 40px;
		color: #fff;
		font-size: 38px;
	}
</style>
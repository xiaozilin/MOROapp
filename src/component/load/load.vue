<template>
	<main>
		<div id="load">
			<img style="width: 100%;" src="../../assets/图层 1890.png" alt="" />
			<router-link to="/find"><span id="go">随便逛逛</span></router-link>
			<router-link to="/register"><span id="regi">注册</span></router-link>
			<div id="theme">
				<h1>M O R K E</h1>
				<span>连 接 一 切 有 品 味 的 人</span>
			</div>
			
			<input v-model="name" type="tel" name="" id="" value="" placeholder="   手机号" required/>			
			<input v-model="psd" type="password" name="" id="" value="" placeholder="   密码" required/>
			<span style="font-size: 42px;color: #666;float: right;margin-right: 3%;margin-top: 20px;">忘记密码</span>
			<p id="erro">{{er}}</p>
			<p @click="land" class="loading">登陆</p>
			
			
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
				er:"账号和密码错误",
				user:""
			}
		},
		mounted(){
			this.$http.get("data.json").then(function(res){
				this.user=res.body.users
			})
		},
		methods:{
			land(){
				for(var i=0;i<this.user.length;i++){
					if(this.name==this.user[i].id&&this.psd==this.user[i].psw){
						document.getElementById("erro").style.display="none";
						this.name="";
						this.psd="";
						this.$router.push({ path: '/my' })
						break;
					}else{
						document.getElementById("erro").style.display="block";
						this.name="";
						this.psd="";
					}
				}
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
	#erro{
		color: red;
		display:none;
		font-size: 50px;
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
		margin: 200px auto;
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
	<template>
		<main>
			<div id="bg">
				<img style="width: 100%;" :src="v[0].backgr" alt="" />
				<p id="ping">
				<span @click="fn" style="float: left;">&nbsp;&lt;</span>
				<span style="float: right;width: 5%;margin-right: 2%;"><img style="width: 100%;" src="../../assets/矩形 584.png" alt="" @click="share" /></span>
				<span style="float: right;width: 5%;margin-right: 5%;"><img style="width: 100%;" src="../../assets/矩形 1755.png" alt="" /></span>
				</p>
			<img id="blogger" :src="v[0].bg" alt="" />
			</div>
				<div id="massage">
					<span class="follow">私信</span>
					<p>{{v[0].name}}</p>
					<router-link to="/moro"><h1 style="color: #000;">MORO BLOGGER</h1></router-link>
					<span>{{v[0].saying}}</span>
					<ul>
						<li>{{v[0].follow}}关注</li>
						<li>{{v[0].fans}}543粉丝</li>
					</ul>
					<p class="friend">关注</p>
				</div>
			<div id="through">
				<ul class="list">
					<li>发布</li>
					<li>BOOK</li>
					<li>赞过的</li>
				</ul>
				<ul>
					<li><img src="../../assets/图层 624.png" alt="" /></li>
					<li><img src="../../assets/图层 625.png" alt="" /></li>
					<li><img src="../../assets/图层 626.png" alt="" /></li>
				</ul>
			</div>
			<div id="shareit">
				<h1>分享到 <span @click="back" style="float: right;">返回</span></h1>
				<ul>
					<li><router-link to=""><img src="../../assets/图层 700.png" alt="" /><p>微博</p></router-link></li>
					<li><router-link to=""><img src="../../assets/图层 701.png" alt="" /><p>微信好友</p></router-link></li>
					<li><router-link to=""><img src="../../assets/图层 702.png" alt="" /><p>朋友圈</p></router-link></li>
					<li><router-link to=""><img src="../../assets/图层 703.png" alt="" /><p>QQ空间</p></router-link></li>
				</ul>
			</div>
	</main>
	</template>
	<script type="text/javascript">
		export default{
			template:"",
			data(){
				return{
					v:""
				}
			},
			methods:{
				fn(){
					this.$router.go(-1);
				},
				share(){
					document.getElementById("shareit").style.display="block";
					document.getElementsByTagName("html")[0].style.background="red"
				},
				back(){
					document.getElementById("shareit").style.display="none"
					document.getElementsByTagName("html")[0].style.background="#eee"
					
				}
			},
			mounted(){
				this.$http.get("data.json").then(function(res){
					this.v=res.body.people;
					
				})
			}
		}
	</script>
	<style scoped>
		#shareit{
			background: #FFFFFF;
			position: absolute;
			bottom: 0;
			left: 0;
			margin-bottom: 76px;
			width: 100%;
			display: none;
		}
		#shareit h1{
			font-size: 36px;
			margin: 50px;
		}
		#shareit ul li{
			float: left;
			width: 25%;
			text-align: center;
		}
		#shareit ul li p{
			font-size: 36px;
			color: #000;
		}
		#through{
			background: #fff;
			width: 100%;
			height: 500px;
		}
		#through .list{
			width: 100%;
			height: 70px;
			line-height: 70px;
		}
		#through .list li{
			float: left;
			border-left: 1px solid #999;
			width: 33%;
			margin-bottom: 50px;
			font-size: 36px;
			border-top: 1px solid #999;
			text-align: center;
		}
		#through li{
			text-align: center;
			float: left;
			width: 33%;
		}
		#through .list li:nth-of-type(1){
			border-left: 0;
		}
		*{
			margin: 0;
			padding: 0;
			list-style: none;
			text-decoration: none;
		}
		.friend{
			width: 25%;
			text-align: center;
			border-radius: 70px;
			margin: auto;
			margin-top: 130px;
			height: 100px;
			line-height: 100px;
			border: 3px solid palevioletred;
			color: palevioletred;
		}
		#bg{
			width: 100%;
		}
		#ping{
			position: absolute;
			top: 0;
			left: 0;
			font-size: 85px;
			color: #666;
			width: 98%;
		}
		#massage{
			text-align: center;
			padding-top: 110px;
			background: #fff;
			padding-bottom: 50px;
		}
		#massage p{
			font-size: 50px;
		}
		#massage h1{
			margin: 20px auto;
			background: pink;
			border-radius: 87px;
			border: 1px solid pink;
			height: 100px;
			line-height: 100px;
			width: 50%;
		}
		#massage span{
			font-size: 35px;
			color: #666;
		}
		#massage ul{
			margin-top: 50px;
			width: 100%;
		}
		#massage ul li{
			width: 50%;
			float: left;
			font-size:45px;
		}
		#blogger{
			position: absolute;
			top: 450px;
			left:0;
			transform: scale(1.5);
			right: 0;
			margin: auto;
		}
		.follow{
		position: absolute;
		top: 570px;
		right: 5%;
		font-size: 36px;
		border-radius: 80px;
		border: 1px solid #000;
		width: 20%;
		text-align: center;
		height: 70px;
		line-height: 70px;
	}
	</style>
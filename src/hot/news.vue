<template>
	<main>
		<img style="width: 100%;" src="../assets/图层 990.png" alt="" />
		<span id="back" @click="back"></span>
		<div id="font">
			<span>MORO 热门话题</span>
			<p>#就是爱玩色</p>
		</div>
		<p id="bone">
		<span class="brow">1777777浏览数</span>
		<span class="coll">733搭配</span>
		<span class="follow">已关注</span>
		</p>
		<p id="mast">谁说多层搭配的秋冬只能性冷淡？<br />色彩碰撞才够味<br />快来上传你的撞色LOOK，这个秋冬你最亮眼。</p>
		<ul id="banner">
			<li style="color: red;border-bottom: 3px solid red;">最新</li>
			<li>用户</li>
		</ul>
		<ul id="hot">
			<li>
				<div>
					<img style="width: 18%;float: left;" src="../assets/图层 9901.png" alt="" />
					<p>MeggieM_</p>
					<span>杭州市/173cm/长发</span>
					<span style="float: right;">10-26 15:33</span>
				</div>
				<span class="pic">3张</span>
				<img class="feel" src="../assets/图层 989.png" alt="" />
				
			</li>
			<li>
				<div>
					<img style="width: 18%;float: left;" src="../assets/图层 9901.png" alt="" />
					<p>MeggieM_</p>
					<span>杭州市/173cm/长发</span>
					<span style="float: right;">10-26 15:33</span>
				</div>
				<span>3张</span>
				<img class="feel" src="../assets/图层 989.png" alt="" />
				
			</li>
		</ul>
	</main>
</template>

<script>
	export default {
		template:"",
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.pic{
		background: #000000;
		color: #fff;
		width: 20%;
		
		border-radius: 80px;
		font-size: 36px;
	}
	#hot .feel{
		margin-top: 60px;
	}
	#hot li div span{
		font-size: 32px;
	}
	#hot li div p{
		font-size: 52px;
		padding-top: 20px;
	}
	#hot li{
		padding: 40px;
	}
	#banner{
		padding-top: 30px;
		width: 100%;
		background: #fff;
		height: 60px;
	}
	#banner li{
		float: left;
		width: 50%;
		text-align: center;
		font-size: 42px;
	}
	#mast{
		background: #FFFFFF;
		padding: 40px;
		font-size: 38px;
		color: #666;
		border-bottom: 1px solid #666;
	}
	#bone{
		font-size: 40px;
		color: #666;
		padding: 20px;
		width: 100%;
		box-sizing: border-box;
		background: #fff;
		height: 130px;
		line-height: 80px;
		border-bottom: 1px solid #666;
	}
	#bone .coll{
		float: left;
		margin-left: 40px;
	}
	#bone .follow{
		float: right;
		margin-right: 30px;
		border-radius: 80px;
		background: red;
		width: 20%;
		color: #fff;
		text-align: center;
		height: 80px;
	}
	#bone .brow{
		float: left;
	}
	*{
		margin: 0;
		padding:0;
		list-style: none;
		text-decoration: none;
	}
	#font{
		font-size: 32px;
		color: #fff;
		width: 100%;
		text-align: center;
		position: absolute;
		top: 300px;
		left: 0;
	}
	#font p{
		font-size: 60px;
	}
	#back{
		position: absolute;
		top: 35px;
		width: 11%;
		height: 100px;
		line-height: 100px;
		border-radius: 50%;
		text-align: center;
		z-index: 10;
		left: 30px;
		background:transparent;
	}
</style>
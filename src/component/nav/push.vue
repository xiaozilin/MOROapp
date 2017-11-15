<template>
	<main style="background: #fff;">
		<div id="baners">
			<ul id="banner">
				<li>
					<router-link to="/">
						<img src="../../assets/图层 1.png" alt="" />
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<img src="../../assets/图层 1.png" alt="" />
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<img src="../../assets/图层 1.png" alt="" />
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<img src="../../assets/图层 1.png" alt="" />
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<img src="../../assets/图层 1.png" alt="" />
					</router-link>
				</li>
			</ul>
			<ol>
				<li style="background: #999;"></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ol>
		</div>
		<ul id="nav">
			<li><div><p>种草</p><p>全网时髦单间</p></div><img src="../../assets/图层 2.png" alt="" /></li>
			<li><div><p>闲置</p><p>好物找东家</p></div><img src="../../assets/图层 3.png" alt="" /></li>
			<li><div><p>折扣</p><p>这些值得入手</p></div><img src="../../assets/图层 4.png" alt="" /></li>
			<li><div><p>人气榜</p><p>优质博主推荐</p></div><img src="../../assets/图层 5.png" alt="" /></li>
		</ul>
		<img style="width: 100%;" src="../../assets/图层 6.png" alt="" />
	</main>
</template>

<script>
	
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	#nav img{
		width: 30%;
	}
	#nav li div{
		float: left;
		margin-right: 50px;
		font-size: 36px;
	}
	#nav li div p:nth-of-type(2){
		color: #666;
	}
	#nav li{
		float: left;
		width: 50%;
		height: 200px;
		border: 1px solid #000;
		box-sizing: border-box;
		padding: 50px;
	}
	#nav{
		height: 400px;
		background: #fff;
		margin: 30px 0;
	}
	#baners ol{
		position: absolute;
		bottom: 0;
		width: 100%;
		left: 50%;
		margin-left: -15%;
		text-align: center;
	}
	#baners ol li{
		float:left;
		border-radius:50%;
		width: 3%;
		margin: 10px;
		height: 30px;
		background: #fff;
	}
	#baners{
		width: 100%;
		height: 460px;
		position: relative;
		overflow: hidden;
	}
	#banner{
		width: 500%;
		position: absolute;
		left: 0;
		
	}
	#banner li{
		width: 20%;
		float: left;
	}
	#banner li img{
		width: 100%;
	}
</style>
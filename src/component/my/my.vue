<template>
	<main>
		<h1>我</h1>
			<router-link to="/person">
				<div id="personal">
				<img style="transform:scale(1);" src="../../assets/图层 1838.png" alt="" />
				<span style="font-size: 36px;color: #000;">24k纯帅</span>
				</div>
			</router-link>
			
		
		<ul>
			<li>
				<router-link to="/pass">
					<img src="../../assets/形状 1.png" alt="" />
					<span> 我赞过的搭配</span>
					<span style="float: right; font-size: 24px;" >
						<img src="../../assets/V.png" alt=""/>
					</span>
				</router-link>
			</li>
			<li>
				<router-link to="/book">
					<img src="../../assets/矩形 1755.png" alt="" />
					<span> 我赞过的搭配</span>
					<span style="float: right; font-size: 24px;" >
						<img src="../../assets/V.png" alt=""/>
					</span>
				</router-link>
			</li>
			<li>
				<router-link to="/my-discount">
					<img src="../../assets/矩形 5881.png" alt="" />
					<span> 我收藏的折扣</span>
					<span style="float: right; font-size: 24px;" >
						<img src="../../assets/V.png" alt=""/>
					</span>
				</router-link>
			</li>
			<li>
				<router-link to="/my-brand">
					<img src="../../assets/椭圆 1755.png" alt="" />
					<span> 我关注的品牌</span>
					<span style="float: right; font-size: 24px;" >
						<img src="../../assets/V.png" alt=""/>
					</span>
				</router-link>
			</li>
		</ul>
		<ul>
			<li>
				<router-link to="/my-brand">
					<img src="../../assets/圆V1238.png" alt="" />
					<span> 博主成长特权</span>
					<span style="float: right; font-size: 24px;" >
						<img src="../../assets/V.png" alt=""/>
					</span>
				</router-link>
			</li>
			<li>
				<router-link to="/my-brand">
					<img src="../../assets/搜索.png" alt="" />
					<span> 查找微博好友</span>
					<span style="float: right; font-size: 24px;" >
						<img src="../../assets/V.png" alt=""/>
					</span>
				</router-link>
			</li>
			<li>
				<router-link to="/my-brand">
					<img src="../../assets/形状 1757.png" alt="" />
					<span> 设置</span>
					<span style="float: right; font-size: 24px;" >
						<img src="../../assets/V.png" alt=""/>
					</span>
				</router-link>
			</li>
		</ul>
		<div id="fall">
			<router-link to="load" style="color: #000;">退出当前用户</router-link>
		</div>
		
	</main>
	
</template>

<script>
	export default{
		template:"",
		mounted(){
			this.$store.commit("whats","我的")
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
	#fall{
		width: 98%;
		height: 100px;
		line-height: 100px;
		text-align: center;
		font-size: 46px;
		margin-top: 300px;
		margin-bottom: 150px;
		background: #DB7093;
	}
	h1{
		text-align: center;
		background: #fff;
		width: 100%;
		height: 100px;
		line-height: 100px;
	}
	#personal{
		background: #fff;
		position: relative;
		margin: 20px 0;
		padding: 0px 40px;
	}
	#personal span{
		position: absolute;
		font-size: 30px;
		top: 50px;
	}
	ul{
		margin: 30px 0;
		background: #fff;
	}
	ul li{
		list-style: none;
		padding: 30px 15px;
		border-bottom: 1px solid #ddd;
	}
	ul li a{
		color: #000;
		text-decoration: none;
	}
	ul li a span{
		font-size: 40px;
	}
	img{
		transform: scale(1.1);
		margin-right: 20px;
	}
</style>
<template>
	<main>
		<ul id="d-d">
			<li>
				<router-link to="/menu">
					<h1 id="big">M</h1>
					<p>首页</p>
				</router-link>
			</li>
			<li>
				<router-link to="/find">
					<h1 id="big">O</h1>
					<p>发现</p>
				</router-link>
			</li>
			<li>
				<router-link to="/hot">
					<h1 id="big">R</h1>
					<p>热榜</p>
				</router-link>
			</li>
			<li>
				<router-link to="/my">
					<h1 id="big">O</h1>
					<p>我的</p>
				</router-link>
			</li>
		</ul>
	</main>
</template>
<script>
	export default{
		template:"",
		methods:{
			
		}
	}
</script>
<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	#d-d {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
	}
	#d-d li {
		width: 25%;
		float: left;
		list-style: none;
		text-align: center;
	}
	#big{
		font-size: 50px;
		font-family:"黑体";
	}
	#d-d li a {
		text-align: center;
		text-decoration: none;
	}
</style>
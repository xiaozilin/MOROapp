<template>
	<main>
		<h1>MORO</h1>
		<ul>
			<li><router-link to="push">推送</router-link></li>
			<li><router-link to="attach">关注</router-link></li>
		</ul>
		<router-view></router-view>
	</main>
</template>

<script>
	export default{
		template:"",
		data(){
			return{
				
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
	h1{
		text-align: center;
		font-size: 64px;
		background: #fff;
	}
	ul li {
		width: 50%;
		text-align: center;
		font-size: 46px;
		background: #fff;
		float: left;
	}
</style>
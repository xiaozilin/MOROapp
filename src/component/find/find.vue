<template>
	<main>
		<div id="sreach">
			<input id="rake" type="text" name="" value="" placeholder="          搜索搭配、单品、用户" />
		</div>
		<div id="label">
			<p>热门标签
			<router-link to="/mhot" style="float:right;color: red;text-decoration: none;">更多>&nbsp;&nbsp;&nbsp;</router-link>
			</p>
			<ul id="l-label">
				<li v-for="v in arr">
					<router-link to="/hotsole">
						<img :src="v.url" alt="" />
					</router-link>
				</li>
			</ul>
		</div>
		<div id="blog-r">
			<p>推荐博主
			<router-link to="/more-b" style="color: red;text-decoration: none;position: absolute;top: 40px;left: 830px;">更多></router-link>
			</p>
			<ul id="blog-i">
				<li v-for="(v,i) in list">
					<router-link to="/blog">
						<img :src="v.burl" alt="" style="transform: scale(1.5);margin: 40px;" />
						<h1 style="color: #000;">{{v.name}}</h1>
						<p style="color:#666;">{{v.height}}/{{v.style}}</p>
						<ul id="blog-img">
							<li v-for="i in v.url"><img :src="i" alt="" style="width: 75%;" /></li>
						</ul>
						<p style="color: #666;padding: 20px;">编辑寄语：{{v.saying}}</p>
					</router-link>
				</li>
			</ul>
	</div>
	<div>
		<div id="subject">
			<p>热门标签
			<router-link to="/more-s" style="float:right;color: red;text-decoration: none;">更多>&nbsp;&nbsp;&nbsp;</router-link>
			</p>
			<ul>
				<li>
					<router-link to="/nothing">
						<img src="../../assets/图层 842.png" alt="" />
					</router-link>
				</li>
				<li>
					<router-link to="/nothing">
						<img src="../../assets/图层 796.png" alt="" />
					</router-link>
				</li>
			</ul>
		</div>
	</div>
	</main>
</template>

<script>
	export default{
		template:"",
		data(){
			return{
				arr:"",
				list:""
			}
		},
			mounted(){
				this.$http.get("data.json").then(function(res){
					this.arr=res.body.label
					this.list=res.body.my
				}),
				this.$store.state.head="发现"
			}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		text-decoration: none;
		list-style: none;
	}
	main{
		width: 100%;
		overflow: hidden;
	}
	#sreach{
		background: #fff;
		width: 100%;
		border-bottom: 1px solid #ddd;
		padding: 20px;
		text-align: center;
	}
	#sreach #rake{
		border-radius: 20px;
		border: 1px solid #000;
		height: 80px;
		width: 90%;
		font-size: 30px;
		background: url(../../assets/搜索.png) no-repeat;
		background-position: 25px 21px;
	}
	#label{
		background: #fff;
		width: 104%;
		border: 1px solid #ddd;
	}
	#label p{
		font-size: 40px;
		padding: 40px;
	}
	#subject{
		background: #fff;
		width: 104%;
		border: 1px solid #ddd;
	}
	#subject p{
		font-size: 40px;
		padding: 40px;
	}
	#blog-r p{
		font-size: 40px;
		padding: 40px;
		position: relative;
	}
	#l-label{
		height: 300px;
	}
	#l-label li{
		float: left;
		padding: 40px;
		list-style: none;
	}
	#l-label li a img{
		transform:scale(1.1);
	}
	#blog-r{
		width: 300%;
		background: #fff;
		overflow: hidden;
		padding-bottom: 20px;
	}
	#blog-i{
		background: #fff;
	}
	#blog-i li{
		border: 1px solid #ddd;
		width: 30%;
		float: left;
		margin-right: 20px;
	}
	#blog-i li a{
		display: block;
		text-align: center;
	}
	#blog-img{
		width: 100%;
		height: 285px;
	}
	#blog-img li{
		float: left;
		width: 33%;
		margin: 0;
		border: none;
	}
	#subject ul{
		
	}
	#subject ul li{
		width: 100%;
		text-align: center;
	}
	#subject ul li img{
		width: 80%;
		margin-left: -40px;
		margin-bottom: 30px;
	}
</style>
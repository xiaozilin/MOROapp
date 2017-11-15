<template>
	<main>
		<div id="bg">
				<img style="width: 100%;" :src="msg[0].bg" alt="" />
			<img id="blogger" :src="msg[0].head" alt="" />
			</div>
			<div id="massage">
					<span class="follow">编辑</span>
					<p>{{msg[0].name}}</p>
					<ul>
						<li>{{msg[0].follow}}关注</li>
						<li>{{msg[0].fans}}粉丝</li>
					</ul>
				</div>
				<div id="through">
				<ul class="list">
					<li>发布{{msg[0].look}}</li>
					<li>BOOK{{msg[0].book}}</li>
					<li>赞过的{{msg[0].res}}</li>
				</ul>
				<ul>
					<li v-for="v in msg[0].url"><img :src="v" alt="" /></li>
				</ul>
			</div>
	</main>
</template>

<script>
	export default{
		template:"",
		data(){
			return{
				msg:""
			}
		},
		mounted(){
			this.$http.get("data.json").then(function(res){
				this.msg=res.body.list
			})
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	html{
		background: #fff;
	}
	#bg{
			width: 100%;
		}
		#blogger{
			position: absolute;
			top: 450px;
			left:0;
			transform: scale(1.5);
			right: 0;
			margin: auto;
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
		#massage{
			text-align: center;
			padding-top: 110px;
			background: #fff;
			padding-bottom: 50px;
		}
		#massage p{
			font-size: 50px;
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
		#through{
			background: #fff;
			width: 100%;
			height: 500px;
			padding-top: 50px;
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
</style>
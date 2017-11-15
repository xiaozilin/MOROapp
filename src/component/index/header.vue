	<template>
		<main>
			<h1>{{n}}</h1>
		</main>
	</template>
<script>
	export default{
		template:"",
		computed:{
			n(){
				return this.$store.state.head
			}
			
		}
	}
</script>
	
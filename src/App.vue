<template>
    <main>
    	
        <router-view></router-view>
        <v-footer></v-footer>
    </main>
</template>
<script>
    import vfooter from './component/index/footer.vue'
    import vheader from './component/index/header.vue'
    export default{
        components:{
          'v-footer':vfooter,
          "v-header":vheader
        }
    }
</script>
<style>
</style>
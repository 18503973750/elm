<template>
	<div>
		<p v-if="name!=null">{{this.$route.query.name}}</p>
		<!--<p>{{this.$route.query.password}}</p>-->
		<p v-else>登录/注册</p>
		<!--<p>{{name}}</p>-->
		<p @click="TC">退出</p>
	</div>
</template>

<script>
	export default {
		name:'OUT',
		data(){
			return{
				name:this.$route.query.name
			}
		},
		methods:{
			TC(){
				this.$router.push({
					path:'/LOGIN1',
					query:{NOname:true}
				})
				//退出
				var outurl = 'http://cangdu.org:8001/v2/signout'
				this.$http.get(outurl).then(res => {
					console.log(res.data.message);
				})
			}
		}
	}
</script>

<style scoped>
	
</style>
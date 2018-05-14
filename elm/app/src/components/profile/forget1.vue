<template>
	<div class="out">
		<div class="top">
			<div class="top_one">
				<router-link to="/vip" class="el-icon-arrow-left">
				</router-link>
				<span>重置密码</span>
			</div>
		</div>
		<div class="yzm MarginTop">
			<img :src="IMG.code" />
		</div>
		<div class="change" @click="HYZ">换一张</div>
	</div>
</template>

<script>
	export default {
		name: 'forget1',
		data() {
			return {
              IMG:{}
			}
		},
		created() {
			var url = 'http://cangdu.org:8001/v1/captchas'
			this.$http.post(url).then(res => {
				console.log(res.data);
				this.IMG = res.data
			})
		},
		methods:{
			HYZ(){
				var url = 'http://cangdu.org:8001/v1/captchas'
				this.$http.post(url).then(res=>{
					this.IMG = res.data
				})
			}
		}

	}
</script>

<style scoped>
	.top {
		background: #3190e8;
		border: .05rem solid #3190e8;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
	
	.top_one {
		color: white;
		padding: .5rem;
		padding-bottom: .8rem;
		font-size: .8rem;
	}
	
	.top_one .el-icon-arrow-left {
		color: white;
	}
	
	.top_one span {
		padding-left: 5rem;
	}
	
	.yzm {
		width: 5rem;
		height: 3rem;
		border: .1rem red solid;
	}
</style>
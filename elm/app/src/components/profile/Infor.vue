<template>
	<div class="out">
		<div class="top">
			<div class="top_one">
				<router-link to="/Benefit" class="el-icon-arrow-left">
				</router-link>
				<span>账户信息</span>
			</div>
		</div>
		<input type="file" />
		<div class="touxiang MarginTop">
			<span>头像</span>
			<div class="IMG">
				<img src="../../img/touxiang.jpg" alt="" />
				<span class="el-icon-arrow-right"></span>
			</div>
		</div>
		<ul>
			<li class="LI1">
				<span>用户名</span>
				<span class="el-icon-arrow-right"></span>
			</li>
			<li class="LI2">
				<span>收货地址</span>
				<span class="el-icon-arrow-right"  @click="DZ"></span>
			</li>
		</ul>
		<p>账号绑定</p>
		<ul>
			<li>
				<div>
					<img src="" alt="" />
					<span>手机</span>
				</div>
				<span class="el-icon-arrow-right"></span>
			</li>
		</ul>
		<p>安全设置</p>
		<ul>
			<li>
				<span >登录密码</span>
				<div>
					修改
					<span class="el-icon-arrow-right"></span>
				</div>
			</li>
		</ul>

	</div>
</template>

<script>
	//引入头像上传插件
	import Cropper from 'cropperjs'
	export default {
		name: "Infor",
		methods:{
			DZ(){
				this.$router.push({
					path:'/address'
				})
				
			}
		}
	}
</script>
<style scoped>
	input {
		display: block;
		position: absolute;
		opacity: 0;
		top: 2.35rem;
		left: 0;
		width: 100%;
		height: 3.1rem;
	}
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
	
	.touxiang {
		display: flex;
		justify-content: space-between;
		padding: .8rem .5rem;
		/*border: .1rem red solid;*/
		background: white;
		align-items: center;
		font-size: .7rem;
		border-bottom: 1px solid #ddd;
	}
	
	.IMG img {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		vertical-align: middle;
	}
	
	.el-icon-arrow-right {
		color: rgb(216, 216, 216);
		font-size: 1rem;
	}
	
	ul {
		/*border: .1rem red solid;*/
		background: white;
		/*margin-top: .1rem;*/
	}
	
	ul li {
		border-bottom: 1px solid #ddd;
		padding: .5rem .5rem;
		display: flex;
		justify-content: space-between;
		font-size: .7rem;
	}
	
	p {
		padding: .5rem .5rem;
		font-size: .5rem;
		color: #666;
	}
</style>
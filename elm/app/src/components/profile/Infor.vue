<template>
	<div class="out">
		<div class="top">
			<div class="top_one">
				<router-link to="/profile" class="el-icon-arrow-left">
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
			<li class="LI1" @click="NAME">
				<span>用户名</span>
				<span>
					<!--接收上个页面传输过来的值-->
					<i>{{code}}</i>
					<i class="el-icon-arrow-right"></i>
				</span>

			</li>
			<li class="LI2">
				<span>收货地址</span>
				<span class="el-icon-arrow-right" @click="DZ"></span>
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
			<li @click="DL">
				<span>登录密码</span>
				<div>
					修改
					<span class="el-icon-arrow-right"></span>
				</div>
			</li>
		</ul>
		<div class="btm" @click="TCDL">
			退出登录
		</div>
		<!--弹框-->
		<div class="sure">
			<div class="sure1">
				<span class="span1"></span>
				<span></span>
			</div>
			<p>是否退出登录</p>
			<div class="sure2">
				<span class="Span1" @click="ZDD">再等等</span>
				<span class="Span2">退出登录</span>
			</div>
		</div>
	</div>
</template>

<script>
	//引入头像上传插件
	import Cropper from 'cropperjs'
	export default {
		name: "Infor",
		data() {
			return {
				code: ""
			}
		},
		methods: {
			DZ() {
				this.$router.push({
					path: '/address'
				})

			},
			DL() {
				this.$router.push({
					path: '/forget1'
				})
			},
			ZDD() {
				var sure = document.getElementsByClassName('sure')[0];
				sure.style.display = 'none'
			},
			TCDL() {
				var sure = document.getElementsByClassName('sure')[0];
				sure.style.display = 'block'
			},
			NAME() {
				this.$router.push({
					path: '/setusername'
				})
			}
		},
		created() {
			console.log(this.$route.params);
			//本地缓存(把传过来的值缓存在本地)
			if(this.$route.params.code) {
				this.code = this.$route.params.code
				localStorage.code=JSON.stringify(this.$route.params.code)
			}else {
				this.code=JSON.parse(localStorage.code)
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
	
	.btm {
		/*border: .1rem red solid;*/
		width: 96%;
		margin: 1.3rem auto 0;
		line-height: 1.5rem;
		border-radius: 5px;
		text-align: center;
		background: #d8584a;
		font-size: .6rem;
		color: #fff;
	}
	/*确认支付弹框*/
	
	.sure {
		/*border: .1rem white solid;*/
		display: none;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -6rem;
		margin-left: -6rem;
		width: 12rem;
		animation: tipMove .4s;
		background-color: #fff;
		padding-top: .6rem;
		/*border: 1px;*/
		border-radius: .25rem;
	}
	
	.sure1 {
		width: 3rem;
		height: 3rem;
		border: .15rem solid #f8cb86;
		border-radius: 50%;
		margin: 0 auto;
	}
	
	.sure p {
		font-size: .7rem;
		color: #333;
		line-height: .9rem;
		text-align: center;
		margin-top: .8rem;
		padding: 0 .4rem;
	}
	
	.span1 {
		display: block;
		margin-left: 1.55rem;
		margin-top: .5rem;
		width: .12rem;
		height: 1.5rem;
		background-color: #f8cb86;
	}
	
	.sure1 span:nth-child(2) {
		display: block;
		margin-top: .3rem;
		margin-left: 1.5rem;
		width: .2rem;
		height: .2rem;
		border: 1px;
		border-radius: 50%;
		background-color: #f8cb86;
	}
	
	.sure2 {
		/*border: .1rem red solid;*/
		display: flex;
		padding: .5rem;
		justify-content: space-between;
	}
	
	.Span1 {
		border-radius: .5rem;
		color: white;
		background: #c1c1c1;
		padding: .5rem;
	}
	
	.Span2 {
		border-radius: .5rem;
		color: white;
		background: #dd6b55;
		padding: .5rem;
	}
</style>
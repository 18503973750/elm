<template>
	<div>
		<div class="login-wrap" v-show="showLogin">
			<h4>登录</h4>
			<p v-show="showTishi">{{tishi}}</p>
			<input type="text" placeholder="请输入用户名" v-model="username">
			<input type="password" placeholder="请输入密码" v-model="password">
			<input type="text" placeholder="请输入验证码" v-model="yzm" />
			<img :src="VerificationCodeImg" alt="" />
			<span @click="change">换一张</span>
			<button @click="DL">登录</button>
			<button @click="out">退出登录</button>
			<span>没有账号？马上注册</span>
		</div>

		<div class="register-wrap" v-show="showRegister">
			<h3>注册</h3>
			<p v-show="showTishi">{{tishi}}</p>
			<input type="text" placeholder="请输入用户名" v-model="newUsername">
			<input type="password" placeholder="请输入密码" v-model="newPassword">
			<button>注册</button>
			<span>已有账号？马上登录</span>
		</div>
	</div>
</template>

<script>
	import Vue from "vue";
	//
	let loginLink = "http://cangdu.org:8001/v2/login";
	//验证码接口
	let VerificationCode = "http://cangdu.org:8001/v1/captchas";
	export default {
		name:'LOGIN1',
		data() {
			return {
				showLogin: true,
				showRegister: false,
				showTishi: false,
				tishi: '',
				username: '',
				password: '',
				newUsername: '',
				newPassword: '',
				VerificationCodeImg: null,
				yzm: null,
				Img: {

				},
				res:''
			}
		},
		created() {
			//获取后台接口数据(验证码)
			var data = {};
			Vue.postLogin(VerificationCode, data, res => {
				this.VerificationCodeImg = res.code;
				// console.log(this.VerificationCodeImg)
			})
			if(this.$route.query.NOname==true){
				this.username=null;
				this.password = null;
			}
		},
		methods: {
			change() {
				//验证码
				var data = {};
				Vue.postLogin(VerificationCode, data, res => {
					this.VerificationCodeImg = res.code;
					// console.log(this.VerificationCodeImg)
				})
			},
			DL() {
				let data = {
					username: this.username,
					password: this.password,
					captcha_code: this.yzm
				};
				Vue.postLogin(loginLink, data, res => {
					console.log(res)
					if(res.status == 0) {
						alert(res.message);
						return
					} else {
//						console.log(res);
//						this.res = res
					}
				})
				//跳转页面
				this.$router.push({
					path: '/OUT',
					query: {
						name: this.username,
						password:this.password
					}
				})
			},
			out() {
				//退出
				var outurl = 'http://cangdu.org:8001/v2/signout'
				this.$http.get(outurl).then(res => {
					console.log(res);
				})
			}
		}
	}
</script>

<style scoped>
	.login-wrap {
		text-align: center;
	}
	
	input {
		display: block;
		width: 8rem;
		height: 1rem;
		line-height: 1.5rem;
		margin: 0 auto;
		margin-bottom: .2rem;
		outline: none;
		border: .02rem solid #888;
		padding: .2rem;
		box-sizing: border-box;
	}
	
	p {
		color: red;
	}
	
	button {
		display: block;
		width: 8rem;
		height: 1rem;
		line-height: 1rem;
		margin: 0 auto;
		border: none;
		background-color: #41b883;
		color: #fff;
		font-size: .7rem;
		margin-bottom: .02rem;
	}
	
	span {
		cursor: pointer;
		font-size: .7rem;
	}
	
	span:hover {
		color: #41b883;
	}
	
	img {
		/*border: .02rem red solid;*/
		width: 2rem;
	}
</style>
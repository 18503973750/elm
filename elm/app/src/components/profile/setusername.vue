<template>
	<div class="out">
		<div class="top">
			<div class="top_one">
				<router-link to="/Infor" class="el-icon-arrow-left">
				</router-link>
				<span>修改用户名</span>
			</div>
		</div>
		<div class="IPT">
			<input type="" placeholder="输入用户名" v-model="code" class="ipt" />
		</div>
		<div class="tishi">
			<p class="TS" v-if="orshow1">
				用户名只能修改一次（5-24字符之间）
			</p>
			<p v-if="orshow" class="redTS">
				用户名长度在5到24位之间
			</p>
		</div>
		<div class="bottom" @click="QRXG">确认修改</div>
		<div>{{this.code}}</div>
	</div>
</template>

<script>
	export default {
		name: 'setusername',
		data() {
			return {
				orshow: false,
				orshow1: true,
				code: ''
			}
		},
		watch: {
			code() {
				if(this.code.split("").length < 5 || this.code.split("").length > 24) {
					//改变边框的颜色
					var ipt = document.getElementsByClassName('ipt')[0];
					ipt.style.border = ".1rem red solid";
					//更换文本
					this.orshow = true
					this.orshow1 = false
				}
				if(this.code.split("").length >= 5 && this.code.split("").length <= 24) {
					var ipt = document.getElementsByClassName('ipt')[0];
					ipt.style.border = ".1rem black solid";
					this.orshow = false
					this.orshow1 = true
				}
			}
		},
		methods: {
			//确认修改按钮,跳转页面并传值
			QRXG() {
				this.$router.push({
					name: 'Infor',
					//传输出去
					params: {
						//穿过去的是code值,this.code是本界面用v-model绑定的值
						code:this.code
					}

				});
				console.log(this.code);
			}
		}
	}
</script>

<style scoped>
	.top {
		background: #3190e8;
	}
	
	.top_one {
		color: white;
		padding: .5rem;
		padding-bottom: .6rem;
		font-size: .8rem;
		border-bottom: .01rem solid #f5f5f5;
	}
	
	.top_one a {
		font-size: 1rem;
		color: white;
	}
	
	.top_one span {
		padding-left: 4.8rem;
	}
	
	.IPT input {
		width: 15.2rem;
		border: .05rem solid #ddd;
		border-radius: .2rem;
		padding: .2rem .1rem;
		line-height: 1.2rem;
		font-size: .7rem;
		display: block;
		margin: 0 auto;
		background: none;
		outline: medium;
		margin-top: .5rem;
	}
	
	.tishi p {
		font-size: .5rem;
		margin: .7rem;
	}
	
	.bottom {
		background: #3199e8;
		width: 90%;
		line-height: 2rem;
		font-size: .7rem;
		color: #fff;
		text-align: center;
		margin: 0 auto;
	}
	
	.redTS {
		color: red;
	}
</style>
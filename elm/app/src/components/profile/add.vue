<template>
	<div class="out">
		<div class="top">
			<div class="top_one">
				<router-link to="/address" class="el-icon-arrow-left">
				</router-link>
				<span>新增地址</span>
			</div>
		</div>
		<div class="Room MarginTop">
		</div>
		<div class="bottom">
			<div class="Name">
				<input type="text" placeholder="请填写你的姓名" />
			</div>
			<div class="Name">
				<input type="text" placeholder="小区/写字楼/学校等" @click="Add" v-model="item.name" class="input1" />
			</div>
			<div class="Name">
				<input type="text" placeholder="请填写详细送餐地址" />
			</div>
			<div class="Name">
				<input type="" placeholder="请填写能够联系到您的手机号" v-model="ressCode" class="num" />
				<p v-show="isshow">请输入正确的手机号</p>
				<p v-show="isshow1">手机号不能为空</p>
			</div>
			<div class="Name">
				<input type="text" placeholder="备用联系电话(选填)" />
			</div>
		</div>
		<!--点击之后跳转到另一个界面,并传值过去-->
		<div class="add">
			<button @click="New">新增地址</button>
		</div>
		<!--{{msg.deList[msg.deID].name}}-->
	</div>
</template>

<script>
	export default {
		name: 'add',
		data() {
			return {
				input1: "",
				ressCode: "",
				item: {},
				isshow: false,
				isshow1: false
			}
		},
		watch: {
			ressCode() {	
				if(!(/^1[34578]\d{9}$/.test(this.ressCode))) {
					var num = document.getElementsByClassName('num')[0];
					num.style.border = '.05rem red solid'
					this.isshow = true
					this.isshow1 = false
					return false;
				}else {
					var num = document.getElementsByClassName('num')[0];
					num.style.border = '.05rem  #ddd solid'
					this.isshow = false
				}
				if(this.ressCode.split("").length < -1) {
//					var num = document.getElementsByClassName('num')[0];
//					num.style.border = '.05rem red solid'
//					this.isshow1 = true
//					this.isshow = false
					alert(666)
					console.log(this.ressCode.split("").length);
				}
			}
		},
		methods: {
			Add() {
				this.$router.push({
					path: '/addDetail'
				})
			},
			//新增按钮
			New() {
				this.$router.push({
					name: 'Address',
					//要传到address中的值
					params: {
						item: this.item,
						ressCode: this.ressCode
					}
				})
				//              console.log(this.ressCode);
				//              console.log(this.msg.deList[msg.deID].name);
			}
		},
		created() {
			//接收从另一个页面传过来的值
			console.log(this.$route.params)
			if(Object.keys(this.$route.params).length) {
				//接收本地传过来的值
				this.item = this.$route.params.item;
				//把传过来的值保存到本地
				localStorage.item = JSON.stringify(this.$route.params.item)
			} else {
				this.item = JSON.parse(localStorage.item)
			}

		}

	}
</script>

<style scoped>
	.Name p {
		padding-left: .5rem;
		font-size: .4rem;
		color: #ea3106;
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
	
	.bottom {
		background: white;
		margin: 0 auto;
		padding: .1rem 0;
	}
	
	.bottom input {
		display: block;
		width: 15rem;
		font-size: .6rem;
		margin: .5rem auto;
		padding: .3rem;
		background: #f2f2f2;
		border: 1px solid #ddd;
		border-radius: 3px;
		outline: medium;
	}
	
	.add {
		margin: .6rem auto;
		width: 15rem;
		background: #4cd964;
		border-radius: 3px;
	}
	
	.add button {
		width: 100%;
		font-size: .6rem;
		color: #fff;
		line-height: 1.6rem;
		background: none;
		font-weight: 700;
		opacity: .6;
	}
</style>
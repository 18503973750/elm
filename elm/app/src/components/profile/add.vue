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
				<input type="text" placeholder="小区/写字楼/学校等" @click="Add"  v-model="msg[0].name" class="input1"/>
			</div>
			<div class="Name">
				<input type="text" placeholder="请填写详细送餐地址" />
			</div>
			<div class="Name">
				<input type="text" placeholder="请填写能够联系到您的手机号" />
			</div>
			<div class="Name">
				<input type="text" placeholder="备用联系电话(选填)" />
			</div>
		</div>
		<!--点击之后跳转到另一个界面,并传值过去-->
		<div class="add">
			<button @click="New">新增地址</button>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'add',
		data() {
			return {
				msg: '',
				input1:""
			}
		},
		methods: {
			Add() {
				this.$router.push({
					path: '/addDetail'
				})
			},
			//新增按钮
			New (){
				this.$http.get(`http://cangdu.org:8001/v1/pois?city_id=32&keyword=${this.searchTxt}&type=search`).then((response) => {
					console.log(response.data);//1.打印出来的是后台请求过来的数据
					this.msg = response.data;//3.把请求过来的数据赋值给msg
					params:this.msg//4.传输的是list里面的数据(可以在另一个接收)
				});
				this.$router.push({
					name:'Address',
					path:'/address',
				})
			}
		},
		created() {
			//接收从另一个页面传过来的值
			console.log(this.$route.params)
			if(Object.keys(this.$route.params).length) {
				this.msg = this.$route.params
				localStorage.msg = JSON.stringify(this.$route.params)
			} else {
				this.msg = JSON.parse(localStorage.msg)
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
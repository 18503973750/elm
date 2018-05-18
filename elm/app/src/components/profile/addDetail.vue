<template>
	<div class="out">
		<div class="top">
			<div class="top_one">
				<router-link to="/add" class="el-icon-arrow-left">
				</router-link>
				<span>搜索地址</span>
			</div>
		</div>
		<div class="content">
			<input type="text" placeholder="请输入小区/写字楼/学校等" v-model="searchTxt" />
			<button @click="search">确认</button>
		</div>
		<div class="content2">
			为了满足商家的送餐要求，建议您从列表中选择地址
		</div>
		<div class="poisearch-container">
			<ul>
				<!--循环列表-->
				<li v-for="(item,index) in list" @click="tr(item)">
					<!--接收list里面的名字和地址-->
					<p>{{item.name}}</p>
					<p>{{item.address}}</p>
				</li>
			</ul>
		</div>

		<div class="bottom" v-show="orshow">
			<p>找不到地址？</p>
			<p>请尝试输入小区、写字楼或学校名</p>
			<p>详细地址（如门牌号）可稍后输入哦。</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'addDetail',
		data() {
			return {
				searchTxt: null,
				list: null,//2.默认为空
				orshow:true,
				deIndex:""
			}			
		},
		methods: {	
			//点击(确认)事件
			search() {
				//搜索接口(获取后台数据)搜索之后从后台请求数据
				this.$http.get(`http://cangdu.org:8001/v1/pois?city_id=32&keyword=${this.searchTxt}&type=search`).then((response) => {
					console.log(response.data);//1.打印出来的是后台请求过来的数据
					this.list = response.data;//3.把请求过来的数据赋值给list
				});
				this.orshow = false
			},
			//往上个页面传值(点击时传输)点击事件
			tr(item){
//				this.deIndex = index
				this.$router.push({
					name:'add',
					params:{
						item: item
					}//4.传输的是list里面的数据(可以在另一个接收)
				})
			}
		}
	}
</script>

<style scoped>
	.poisearch-container {
		background: #f2f2f2
	}
	
	.poisearch-container li {
		border-bottom: 1px solid #ccc;
		padding: .4rem
	}
	
	.poisearch-container li p {
		font-size: .65rem;
		color: #969696
	}
	
	.poisearch-container li p:first-child {
		margin-bottom: .2rem
	}
	
	.poisearch-container li:last-child {
		border: 0
	}
	
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
		padding-left: 5.2rem;
	}
	
	.content {
		display: flex;
		background: white;
		padding: .5rem;
	}
	
	.content input {
		display: block;
		width: 15rem;
		font-size: .6rem;
		margin: 0 auto;
		padding: .3rem;
		background: #f2f2f2;
		border: 1px solid #ddd;
		border-radius: 3px;
		outline: medium;
	}
	
	.content button {
		margin-left: 1rem;
		display: block;
		width: 3rem;
		background: #3199e8;
		font-size: .7rem;
		color: #fff;
		border-radius: 5px;
		outline: medium;
	}
	
	.content2 {
		background: #fff6e4;
		font-size: .62rem;
		color: #ff883f;
		text-align: center;
		padding: .2rem 0;
		opacity: .7;
	}
	
	.bottom {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
	}
	
	.bottom p {
		width: 100%;
		text-align: center;
		font-size: .7rem;
		color: #969696;
		margin-bottom: .4rem;
	}
</style>
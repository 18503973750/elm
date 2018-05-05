<template>
	<div class="out">
		<div class="top">
			<div class="top_one">
				<a href="" class="el-icon-arrow-left">
				</a>
				<span>我的</span>
			</div>
			<div class="top_two">
				<a href="">
					<ul>
						<li>登录/注册</li>
						<li>暂无绑定手机号</li>
						<span class="el-icon-arrow-right"></span>
					</ul>
				</a>
			</div>
		</div>
		<table border="1">
			<tr>
				<td>
					<span class="span1">
						0.00
					</span> <span>元</span>
					<br />
					<span class="td2">我的余额</span>
				</td>
				<td>
					<span class="span2">0</span>
					<span>个</span>
					<br />
					<span class="td2">
						我的优惠
					</span>
				</td>
				<td>
					<span class="span3">0</span>
					<span>分</span>
					<br />
					<span class="td2">我的积分</span>
				</td>
			</tr>
		</table>

		<div class="middle">
			<a href="">
				<div class="middle-first">
					<div class="left el-icon-tickets"></div>
					<div class="centre">我的订单</div>
					<div class="r1 el-icon-arrow-right"></div>
				</div>
			</a>
			<a href="">
				<div class="middle-first">
					<div class="left el-icon-goods"></div>
					<div class="centre">积分商城</div>
					<div class="r1 el-icon-arrow-right"></div>
				</div>
			</a>
			<a href="">
				<div class="middle-first">
					<div class="left el-icon-star-off"></div>
					<div class="centre">饿了么会员</div>
					<div class="r1 el-icon-arrow-right"></div>
				</div>
			</a>
		</div>
		<div class="bottom">
			<a href="">
				<div class="middle-first">
					<div class="left el-icon-service"></div>
					<div class="centre">服务中心</div>
					<div class="r1 el-icon-arrow-right"></div>
				</div>
			</a>
			<a href="">
				<div class="middle-first">
					<div class="left el-icon-download"></div>
					<div class="centre">下载饿了么app</div>
					<div class="r1 el-icon-arrow-right"></div>
				</div>
			</a>
		</div>
	</div>

</template>

<script>
	export default {
		name: "Profile",
		data: function() {
			return {
				arr: [{

				}]
			}
		}
	}
</script>

<style scoped>
<<<<<<< HEAD
	.out {
		/*background-color: red;*/
		height: 100%;
	}
	
	table {
		width: 100%;
		text-align: center;
		background: white;
	}
	
	table td {
		width: 33.33333%;
		border-left: .05rem gainsboro solid;
		height: 3.5rem;
		vertical-align: middle;
		border-bottom: .05rem gainsboro solid;
	}
	
	.top {
		background: #3190e8;
	}
	
	.top_one {
		color: white;
		padding: .5rem;
		padding-bottom: 1.5rem;
		font-size: .8rem;
	}
	
	.top_one a {
		font-size: 1rem;
		color: white;
	}
	
	.top_one span {
		padding-left: 5.5rem;
	}
	
	.top_two ul {
		color: white;
		padding-left: 4rem;
	}
	
	.top_two li:nth-child(1) {
		font-size: .8rem;
		padding-bottom: .3rem;
	}
	
	.top_two li:nth-child(2) {
		font-size: .6rem;
		padding-bottom: .8rem;
		font-weight: .1rem;
	}
	
	.top_two span {
		position: fixed;
		top: 3.3rem;
		right: 0.5rem;
	}
	
	.td2 {
		font-size: .57333rem;
		color: #666;
		font-weight: 400;
		padding-bottom: .453333rem;
	}
	
	.span1 {
		color: #f90;
	}
	
	.span2 {
		color: red;
	}
	
	.span3 {
		color: #6ac20b;
	}
	
	td span:nth-child(2) {
		font-size: .5rem;
		color: black;
	}
	
	
	.middle {
		padding: .5rem;
	}
	.middle a {
		color: black;
	}
	.bottom a {
		color: black;
	}
	.middle-first {
		padding: .5rem;
		vertical-align: middle;
		border-bottom: .05rem solid black;
		overflow: hidden;
	}
	
	.middle-first div:nth-child(1) {
		float: left;
		margin-left: 1rem;
	}
	
	.middle-first div:nth-child(2) {
		float: left;
		margin-left: 1rem;
	}
	
	.middle-first div:nth-child(3) {
		float: right;
	}
	
	.bottom {
		/*border: .05rem solid red;*/
		margin-top: 1rem;
		padding: .5rem;
	}
</style>

    .top {
        background:#3190e8;
    }
.top_one a{
    color: red;

    
}
</style>


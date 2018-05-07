<template>
	<div class="out">
		<div class="top">
			<div class="top_one">
				<router-link to="/Profile" class="el-icon-arrow-left">
				</router-link>
				<span>我的积分</span>
			</div>
			<div class="top_two">
				<div class="firstTop">
					<span>当前积分</span>
					<span class="el-icon-more">积分说明</span>
				</div>
				<div class="secondTop">
					<span>0</span>
					<span>分</span>
				</div>
				<div class="threeTop">
					<div>
						积分兑换商品
					</div>
				</div>
			</div>
		</div>
		<div class="bottom">
			<p>最近30天积分记录</p>
			<div>
				<img src="../../img/11.png" alt="" />
			</div>
			<p class="twoP">最近30天无积分记录</p>
			<p class="threeP">快去下单赚取大量积分吧</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Profile",
		data: function() {
			return {}
		}
	}
</script>

<style scoped>
	.top {
		background: #3190e8;
		border: .05rem solid #3190e8;
	}

	.top_one {
		color: white;
		padding: .5rem;
		padding-bottom: 1.5rem;
		font-size: .8rem;
	}

	.top_one .el-icon-arrow-left {
		color: white;
	}

	.top_one span {
		padding-left: 5rem;
	}

	.top_two {
		border-radius: .5rem;
		background: white;
		border: .05rem solid white;
		width: 95%;
		/*height: 6rem;*/
		margin-left: .35rem;
		margin-bottom: .4rem;
	}

	.firstTop {
		font-size: .55rem;
		margin: .5rem;
	}

	.firstTop span:nth-child(2) {
		margin-left: 9rem;
		color: #3190e8;
	}

	.secondTop {
		margin: 1rem;
	}

	.secondTop span:nth-child(1) {
		font-size: 1.8rem;
	}

	.threeTop div {
		text-align: center;
		line-height: 2rem;
		width: 14.5rem;
		height: 2rem;
		margin-bottom: .4rem;
		margin-left: .6rem;
		border-radius: .2rem;
		font-size: .8rem;
		color: white;
		background: #fe6d47;
		border: 0;
	}

	.bottom p:nth-child(1) {
		font-size: .6rem;
		color: #999;
		line-height: 2rem;
		padding-left: .5rem;
	}

	.bottom img {
		margin-left: 1.8rem;
	}

	.bottom p:nth-child(3) {
		margin-top: .5rem;
		font-size: .7rem;
		text-align: center;
		color: #999;
	}

	.bottom p:nth-child(4) {
		margin-top: .5rem;
		font-size: .5rem;
		text-align: center;
		color: #999;
		font-style: normal;
	}
</style>

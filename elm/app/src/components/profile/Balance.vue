<template>
	<div class="out">
		<div class="top">
			<div class="top_one">
				<router-link to="/Profile" class="el-icon-arrow-left">
				</router-link>
				<span>我的余额</span>
			</div>
			<div class="top_two">
				<div class="firstTop">
					<span>当前余额</span>
					<span class="el-icon-more" @click="link()">余额说明</span>
				</div>
				<div class="secondTop">
					<span>0.00</span>
					<span>元</span>
				</div>
				<div class="threeTop">
					<div>
						提现
					</div>
				</div>
			</div>
		</div>
		<div class="bottom">
			<p>交易明细</p>
			<div>
<img src="../../img/11.png" alt="" />
			</div>
			<p class="twoP">暂无交易明细记录</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Profile",
		data: function() {
			return {}
		},
        methods:{
		    link(){
		        this.$router.push({
                    path:'/Balance/detail'
                })
            }
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
		background: #ccc;
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
	.twoP {
		margin-top: .5rem;
		font-size: .7rem;
		text-align: center;
		color:#999;
	}
</style>

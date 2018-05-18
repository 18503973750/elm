<template>
	<div class="top" style="position: fixed;top: 0; width: 100%; z-index:5">
		<div class="top1" style="">
			<div class="left">
				<span class="el-icon-arrow-left left1"></span>
				<img src="../../img/TX.jpeg" alt="" />
			</div>
			<div class="right">
				<h3>效果演示</h3>
				<p>商家配送/分钟送达/费送费¥5</p>
				<p>公告:欢迎光临,用餐高峰请提前下单</p>
			</div>
			<div class="right1 el-icon-arrow-right
"></div>
		</div>
		<div class="top2">
			<span v-bind:class="{black:orchange}" @click='SP'>商品</span>
			<span v-bind:class="{green:orchange1}" @click='PJ'>评价</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'elmTop',
		data() {
			return {
				orchange: true,
				orchange1: false
			}
		},
		methods:{
			SP(){
				this.orchange = true
				this.orchange1 = false
			},
			PJ(){
				this.orchange = false
				this.orchange1 = true
			}
		}
	}
</script>

<style scoped >
	/*点击之后变颜色*/
	.black {
		color: #3190e8;
		border-bottom: .1rem #3190e8 solid;
		padding-bottom: .1rem;
	}	
	.green {
		color: #3190e8;
		border-bottom: .1rem #3190e8 solid;
		padding-bottom: .1rem;
	}
	/*头部*/
	.top1 {
		background: url(../../img/TX.jpeg) repeat-x;
		padding: .4rem 0 .4rem .4rem;
		height: 3.3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: .7rem;
		color: white;
		font-weight: 300;
		z-index: 5;
	}
	
	.right p:nth-child(2) {
		margin: .3rem 0;
	}
	
	.right1 {
		font-size: 1rem;
	}
	
	.left1 {
		font-size: 1rem;
		position: absolute;
		top: 0.3rem;
		left: 0;
		font-weight: 700;
	}
	
	.left img {
		width: 2.9rem;
		height: 2.9rem;
		display: block;
		border-radius: .15rem;
	}
	
	.top2 {
		background: white;
		border-bottom: .05rem #ebebeb solid;
		display: flex;
		justify-content: space-around;
		padding: .5rem 0;
	}
</style>
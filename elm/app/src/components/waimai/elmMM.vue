<template>
	<div class="out">
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
		<div class="content">
			<!--左边的列表-->
			<!--<a href="#hot">-->
			<div class="cotLeft" style="position: fixed;top: 6rem; width: 3rem;">
				<ul class="leftUL">
					<li v-for="(LeftLi,index) in LeftLis" @click='jump(index)'>
						{{LeftLi.name}}{{index}}
						<!--<router-link :to='#index'>
							<a :href="'a#'+index">{{LeftLi.name}}{{index}}</a>
						</router-link>-->

					</li>

				</ul>
			</div>
			<!--</a>	-->
			<div class="cotRight" style="margin:7rem 0 0 3rem ;">
				<ul class="rightUL" v-for="(right,index) in LeftLis">
					<li class='rightTop'>
						<h5 :id="'a'+index">{{index}}{{right.name}}</h5>
						<span>{{right.description}}</span>
						<span class="el-icon-more"></span>
					</li>
					<li class='rightCont' v-for='right1 in right.foods'>
						<div class="cont1">
							<img :src="url+right1.image_path" alt="" />
						</div>
						<div class="cont2">
							<h2>{{right1.name}}</h2>
							<p class="XQ">{{right1.description}}</p>
							<p class="num">
								<span>{{right1.tips
}}</span>
								<span>{{right1.satisfy_rate}}%</span>
							</p>
							<p class="food">{{}}</p>
							<div class="cont2_bottom">
								<span>¥20</span>
								<span>选规格</span>
							</div>
						</div>

					</li>
				</ul>
			</div>
		</div>
		<div class="bottom"></div>
	</div>
</template>

<script>
	export default {
		name: 'elm',
		data() {
			return {
				orchange: true,
				orchange1: false,
				LeftLis: [],
				//拼接图片的地址
				url: '//elm.cangdu.org/img/'
			}
		},
		methods: {
			SP() {
				this.orchange = true
				this.orchange1 = false
			},
			PJ() {
				this.orchange = false
				this.orchange1 = true
			},
			//点击跳转
			jump(index) {
				var obj = document.getElementById('a' + index)	
				var oPos = obj.offsetTop;
				return window.scrollTo(0, oPos - 135);
			}
		},
		created() {
			//请求后台数据
			var api = 'http://cangdu.org:8001/shopping/v2/menu?restaurant_id=' + 1;
			this.$http.get(api).then((response) => {
				console.log(response.data);
				console.log(response.data[3].name);
				//接收数据
				this.LeftLis = response.data;
			})
		}
	}
</script>

<style scoped>
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
	
	.content {
		display: flex;
		justify-content: space-between;
	}
	
	.cotRight {
		/*border: .05rem green solid;*/
		flex-grow: 3;
		text-align: center;
	}
	
	.cotLeft {
		width: 3.5rem;
		border-right: .02rem #ebebeb solid;
	}
	
	.cotLeft ul {
		/*background: white;*/
		border-bottom: .05rem #ebebeb solid;
	}
	
	.leftUL li {
		padding: 1rem .3rem;
		font-size: .7rem;
		border-left: .2rem #f5f5f5 solid;
		border-bottom: .05rem #ebebeb solid;
	}
	
	.leftUL li:hover {
		border-left: .2rem #3190e8 solid;
		background: white;
	}
	
	.rightUL li {
		border-bottom: .02rem #f5f5f5 solid;
		padding: .4rem;
	}
	
	.rightTop {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.rightTop span {
		font-size: .5rem;
	}
	
	.rightCont {
		display: flex;
		justify-content: space-between;
		background: white;
	}
	
	.cont2 {
		flex: 3;
		text-align: left;
		padding-left: .5rem;
	}
	
	.cont2_bottom {
		display: flex;
		justify-content: space-between;
	}
	
	.cont2_bottom span:nth-child(1) {
		color: red;
	}
	
	.cont2_bottom span:nth-child(2) {
		display: block;
		font-size: .55rem;
		color: #fff;
		padding: .1rem .2rem;
		background-color: #3190e8;
		border-radius: .2rem;
		border: 1px solid #3190e8;
	}
	
	.cont2 p {
		padding: .2rem 0;
	}
	
	.rightCont div img {
		width: 2rem;
		height: 2rem;
		border-radius: .2rem;
	}
	
	.food {
		color: rgb(241, 136, 79);
		border-color: rgb(240, 115, 115);
		font-size: .3rem;
		border: 1px solid currentColor;
		border-radius: .3rem;
		padding: .08rem;
		display: inline-block;
		transform: scale(.8);
		margin-left: -.35rem;
	}
	
	.rightCont {
		font-size: .5rem;
	}
</style>
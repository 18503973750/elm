<template>
	<div>
		<header class="topBar">
			<router-link to="/home"><i class="el-icon-arrow-left left"></i></router-link>
			<span>确认订单</span>
			<router-link to="/login"><i class="right el-icon-bell"></i></router-link>
		</header>	
		<router-link class="mb4 add-address alignment-at-both-ends" to="" :style="{background:'#fff url('+pic+') 0 bottom repeat-x',0:'1.2rem'}">
			<span><i class="el-icon-location-outline"></i>请添加一个收货地址</span>
			<i class="el-icon-arrow-right"></i>	
		</router-link>	

		<section class="mb4 deliveryTime bgc-fff alignment-at-both-ends">
			<h3>送达时间</h3>
			<div>
				<h4>尽快送达 | 预计</h4>
				<span>蜂鸟专送</span>
			</div>
		</section>
		<div class="bgc-fff  mb4">
			<div class="pay alignment-at-both-ends">
				<div class="pay-tit">支付方式</div>
				<div @click="maskBox">在线支付<i class="el-icon-arrow-right"></i></div>
			</div>
			<div class="line"></div>
			<div class="pay alignment-at-both-ends redbao">
				<div>红包</div>
				<div>暂时只在饿了么 APP 中支持</div>
			</div>	
		</div>	
		<!-- 订单列表 -->
		<section class="order-box mb4 bgc-fff
		">
			<h3><img src="//elm.cangdu.org/img/16018a5c08533.jpeg">效果演示</h3>
			<ul>
				<li>
					<span>食品名称</span>
					<span>
						<i class="item1 orange">x13</i>
						<i>&yen;20</i>
					</span>
				</li>
			</ul>
			<ol>
				<li><span>订单 &yen;999</span><span class="orange">待支付</span></li>
				<li><span></span><span class="orange">&yen;999</span></li>
			</ol>
		</section>
		<div class="remarks">
			<div class="alignment-at-both-ends">
				<p>订单备注</p>
				<p><i class="el-icon-arrow-right"></i></p>
			</div>
			<div class="alignment-at-both-ends">
				<p>发票抬头</p>
				<p>不需要开发票<i class="el-icon-arrow-right"></i></p>
			</div>			
		</div>
		<div class="confrim_order">
			<p>待支付&yen;15112</p>
			<p>确认下单</p>
		</div>
		<!-- 弹框 -->
		<transition name="fade">	
			<div class="mask" @click="close" v-show="show1"></div>
		</transition>
		<transition name="slid_up">
			<div class="pay-box"  v-show="show2">
				<h3>支付方式</h3>
				<ul>
					<li class="alignment-at-both-ends">
						<div>货到付款 (商家不支持货到付款)</div>
						<div class="el-icon-success"></div>
					</li>
					<li class="alignment-at-both-ends" @click="close">
						<div>在线支付</div>
						<div class="el-icon-success last-icon"></div>
					</li>				
				</ul>
			</div>
		</transition>

	</div>
</template>

<script>
	let api = "http://cangdu.org:8001/bos/v1/users/1/orders/1/snapshot";
	const bgImg = require("../img/borderBottom.png");
	export default {
		name: "confirmOrder",
		data() {
			return {
				pic: bgImg,
				info: "",
				show1: false,
				show2: false	
			}
		},
		created() {
			this.$http.get('http://cangdu.org:8001/bos/v1/users/1/orders/1/snapshot').then((response) => {
                console.log(response.data);
                this.info = response.data;
            });			
		},
		methods: {
			maskBox() {
				this.show1 = true,
				this.show2 = true				
			},
			close() {
				this.show1 = false,
				this.show2 = false	
			}
		}
	}
</script>

<style scoped>

.fade-enter-active,.fade-leave-active{
	-webkit-transition:opacity .3s;
	transition:opacity .3s
}
.fade-enter,.fade-leave-active{
	opacity:0
}
.slid_up-enter-active,.slid_up-leave-active{
	-webkit-transition:all .3s;
	transition:all .3s
}
.slid_up-enter,.slid_up-leave-active{
	-webkit-transform:translate3d(0, 10rem, 0);
	transform:translate3d(0, 10rem, 0)
}



	
</style>
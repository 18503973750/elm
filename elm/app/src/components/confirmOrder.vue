<template>
	<div>
		<header class="topBar">
			<router-link to="/home"><i class="el-icon-arrow-left left"></i></router-link>
			<span>确认订单</span>
			<router-link to="/login"><i class="right el-icon-bell"></i></router-link>
		</header>	
		<router-link class="add-address alignment-at-both-ends" to="" :style="{background:'#fff url('+pic+') 0 bottom repeat-x'}">
			<span><i class="el-icon-location-outline"></i>请添加一个收货地址</span>
			<i class="el-icon-arrow-right"></i>	
		</router-link>	
	</div>
</template>

<script>
	const bgImg = require("../img/borderBottom.png");
	export default {
		name: "confirmOrder",
		data() {
			return {
				pic: bgImg
			}
		}
	}
</script>

<style scoped>

	
</style>
<template>
	<transition name="router-slid">
		<div>
			<header class="topBar">
				<router-link to="/confirmOrder"><i class="el-icon-arrow-left left"></i></router-link>
				<span>选择地址</span>
			</header>	
			<router-link to="/confirmOrder/chooseAddress/addAddress" class="address"><i class="el-icon-circle-plus"></i>新增收货地址</router-link>	
			
		</div>
	</transition>
</template>

<script>
	
	export default {
		name: "chooseAddress",
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.address {
		position: fixed;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    height: 2.5rem;
	    line-height: 2.5rem;
	    background-color: #fff;
	    text-align: center;
        font-size: .7rem;
    	color: #3190e8;
	}
	.address i {
		font-size: 24px;
		margin-right: .3rem;
		vertical-align: text-top;
	}
</style>
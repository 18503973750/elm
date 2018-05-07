<template>
	<div class="box">
        <Header></Header>
        <div class="box1">
            <h3>请重新进入</h3>
            <p>请返回后重新进入积分商城~</p>
            <img src="../../img/download.png" alt="" />
        </div>
    </div>
</template>

<script>
    import Header from './Header'
    export default {
        name: "Chome",
        components:{
            Header:Header
        }
    }
</script>

<style scoped>
	.box1 h3 {
		font-size: 26px;
		color: #0d7fd5;
		margin-bottom: 15px;
	}

	.box1 p {
		font-size: 14px;
		color: #666;
		margin-bottom: 19px;
	}

	img {
		width: 176px;
		height: 176px;
	}
	.box1 {
		text-align: center;
		padding-top: 8rem;
	}
</style>

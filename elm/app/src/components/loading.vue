<template>
	<div class="loading_container">
		<div class="load_img"></div> 
		<svg  xmlns="http://www.w3.org/2000/svg" version="1.1" class="load_ellipse"><ellipse  cx="26" cy="10" rx="26" ry="10" style="fill: rgb(221, 221, 221); stroke: none;"></ellipse></svg>
</div>
</template>

<script>
	
	export default {
		name: "loading"
	}
</script>

<style scoped>
	@-webkit-keyframes load {
		0% {
		-webkit-transform:translateY(0px);
		transform:translateY(0px)
	}
	50% {
		-webkit-transform:translateY(-50px);
		transform:translateY(-50px)
	}
	100% {
		-webkit-transform:translateY(0px);
		transform:translateY(0px)
	}
	}
	@keyframes load {
		0% {
		-webkit-transform:translateY(0px);
		transform:translateY(0px)
	}
	50% {
		-webkit-transform:translateY(-50px);
		transform:translateY(-50px)
	}
	100% {
		-webkit-transform:translateY(0px);
		transform:translateY(0px)
	}
	}
	@-webkit-keyframes ellipse {
		0% {
		-webkit-transform:scale(1);
		transform:scale(1)
	}
	50% {
		-webkit-transform:scale(0.3);
		transform:scale(0.3)
	}
	100% {
		-webkit-transform:scale(1);
		transform:scale(1)
	}
	}
	@keyframes ellipse {
		0% {
		-webkit-transform:scale(1);
		transform:scale(1)
	}
	50% {
		-webkit-transform:scale(0.3);
		transform:scale(0.3)
	}
	100% {
		-webkit-transform:scale(1);
		transform:scale(1)
	}
	}
	.loading_container {
		position:fixed;
		top:50%;
		left:50%;
		-webkit-transform:translate(-50%, -50%);
		-ms-transform:translate(-50%, -50%);
		transform:translate(-50%, -50%);
		width:2.5rem;
		height:2.5rem
	}
	.load_img {
		width:100%;
		height:100%;
		background:url(../img/icon_loading.png) no-repeat 0 0;
		background-size:2.5rem auto;
		-webkit-transform:translateY(0px);
		-ms-transform:translateY(0px);
		transform:translateY(0px);
		-webkit-animation:load .6s infinite ease-in-out;
		animation:load .6s infinite ease-in-out;
		position:relative;
		z-index:11
	}
	.load_ellipse {
		position:absolute;
		width:2.6rem;
		height:2rem;
		top:2.2rem;
		left:0.2rem;
		z-index:10;
		-webkit-animation:ellipse .6s infinite ease-in-out;
		animation:ellipse .6s infinite ease-in-out
	}
</style>
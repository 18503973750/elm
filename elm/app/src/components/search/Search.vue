<template>
	<div>
		<div class="heard">
			<i class="el-icon-arrow-left"></i>
			<span class="span1">搜索</span> 
		</div>		
	</div>
</template>

<script>
export default {
	name: "Search"
}
</script>

<style scoped>
.heard{
	text-align: center;
	font-size: 0.6rem;
	height: 1.95rem;
	color: white;
	background-color: #3190e8;
	line-height: 1.95rem;
}
.heard i{
	display: inline-block;
	vertical-align: middle;
}

.span1,.span2{
	font-size: 0.6rem;
}
.span2 a {
	color: #ffffff;
}
</style>

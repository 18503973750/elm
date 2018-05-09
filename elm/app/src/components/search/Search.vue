<template>
	<div>
		<div class="heard">
			<router-link to="waimai"><i class="el-icon-arrow-left"></i></router-link>
			<span class="span1">搜索</span> 
		</div>	
		<form class="searchBox">
			<input type="text" placeholder="请输入商家或美食名称" v-model="Restaurant"> 
			<div class="submit" @click="submit">提交</div>
		</form>	
		<div class="search_history">
			<h4 class="title_restaurant">搜素历史</h4>
			<ul>
				<li><span class="history_text ellipsis">1111</span><i class="el-icon-close"></i></li>
			</ul>
			<footer class="clear_history">清空历史</footer>
		</div>
	</div>
</template>

<script>
	let api = "http://cangdu.org:8001/v4/restaurants?geohash=31.22967,121.4762&keyword=肯德基";
	export default {
		name: "Search",
		data() {
			return {
				Restaurant: [],
			}
		},
		methods: {
			submit() {
				if(this.Restaurant == "") {
					alert("请输入商家或美食名称")
				}
			}
		},
		created() {
            //图片验证码
            this.$http.get(api).then((response) => {
            	console.log(response.data);
            	this.Restaurant = response.data;
            });
        }		
	}
</script>

<style scoped>
	ul li {
		background-color: #fff;
		border-bottom: .025rem solid #e4e4e4;
		font: .7rem/2rem Microsoft YaHei;
		padding: 0 .3rem;
		display: -ms-flexbox;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	footer {
		background-color: #fff;
		color: #3190e8;
		font: .7rem/2rem Microsoft YaHei;
		font-weight: 700;
		text-align: center;
	}
	.ellipsis {
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.search_history .history_list .history_text {
	    display: inline-block;
	    width: 80%;
	}
	.search_history .history_list {
		background-color: #fff;
		border-bottom: .025rem solid #e4e4e4;
		font: .7rem/2rem Microsoft YaHei;
		padding: 0 .3rem;
		display: flex;     
		align-items: center;   
		justify-content: space-between;
	}
	.title_restaurant {
		font-size: .6rem;
		line-height: 2rem;
		text-indent: .5rem;
		font-weight: 700;
		color: #666;
	}
	.searchBox {
		background-color: #fff;
		padding: .5rem;
		display: flex;
	}
	.searchBox input {
		height: 1.5rem;
		outline: 0;
		font-size: .65rem;
	}
	.searchBox input {
	    flex: 4;
	    border: .025rem solid #e4e4e4;
	    color: #333;
	    border-radius: .125rem;
	    background-color: #f2f2f2;
	    padding: 0 .25rem;
	}
	.searchBox .submit {
		text-align: center;
		line-height: 1.5rem;
	    flex: 1;
	    border: .025rem solid #3190e8;
	    margin-left: .2rem;
	    font-size: .65rem;
	    color: #fff;
	    border-radius: .125rem;
	    background-color: #3190e8;
	    font-weight: 700;
	    padding: 0 .25rem;
	}	
	.heard{
		padding: 0 .4rem;
		text-align: center;
		font-size: 0.6rem;
		height: 1.95rem;
		color: white;
		background-color: #3190e8;
		line-height: 1.95rem;
	}
	.el-icon-arrow-left {
		color: #fff;
	}
	.heard i{
		float: left;
		font-size: 1rem;
		margin-top: .5rem;
	}
	.span1{
		font-size: 0.7rem;
	}
</style>

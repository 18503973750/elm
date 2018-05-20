<style>
	.el-rate__icon {
		font-size: .5rem;
	}
	
	.el-rate__icon {
		margin-right: 0;
	}
</style>
<template>
	<div class="out">
		<elmTop></elmTop>
		<div class="content">
			<div class="contleft">
				<p>4.7</p>
				<p>综合评价</p>
				<p>高于周边商家76.9%</p>
			</div>
			<div class="contright">
				<div class="contright1">
					<span class="text">服务态度</span>
					<span class="star">
             			<el-rate class = 'star' v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}">
                         </el-rate>
             	</span>
				</div>
			</div>
		</div>
		<ul class="bottom">
			<li v-for='(arr,index) in arrs' @click="change(index)" :class="{blue:classchange==index}">{{arr.name}}({{arr.count}})</li>
		</ul>
		<!--num是下标-->
		<div class="bottom1" v-for="(arr1,num) in arrs1">
			<div class="left1">
				<img :src="IMGS4[num]" alt="" />
			</div>
			{{IMGS1[num]}}
			<div class="content1">
				<div class="Left1" style="flex: 3;">
					<div class="left1_top">
						<div class="P">
							<p class="p1">{{arr1.username}}</p>
							<p class="p2">
								<!--星星-->
								<el-rate v-model="arr1.rating_star">
								</el-rate>
								<span>{{arr1.time_spent_desc}}</span>
							</p>
						</div>

						<div class="right1">
							{{arr1.rated_at}}
						</div>
					</div>

					<div class="Img">
						<!--v-show:判断IMG3里面内容是否为空,如果为空就不展示-->
						<span v-show="IMGS3[num][index]" v-for="(arr,index) in arr1.item_ratings">
							
							<img :src="IMGS3[num][index]" alt="" />
						</span>
						
						<!--<img :src="IMGS3[num][index]" alt="" />-->
					</div>
					<div class="spans" v-for="arr in arr1.item_ratings">
						<!--<span class="p3">{{arr.food_name}}</span>-->
						<span class="p3">{{arr.food_name}}</span>
					</div>
				</div>

			</div>
			<!--{{arr1.rating_star}}-->

		</div>
	</div>
</template>

<script>
	//处理图片链接,分割字符串
	function img_path(img) {
		var a1 = img.split("");
		if(a1.length > 0) {
			a1.splice(1, 0, "/");
			a1.splice(4, 0, "/");
			var a2 = "https://fuss10.elemecdn.com/" + a1.join("") + ".jpeg";
			return a2;
		} else {
			return "//elm.cangdu.org/img/default.jpg";
		}
	}

	function food_path(img) {
		var a1 = img.split("");
		if(a1.length > 0) {
			a1.splice(1, 0, "/");
			a1.splice(4, 0, "/");
			var a2 = "https://fuss10.elemecdn.com/" + a1.join("") + ".jpeg";
			return a2;
		} else {
			return "";
		}
	}
	import elmTop from './elmTop'
	export default {
		name: 'elmRight',
		components: {
			elmTop
		},
		data() {
			return {
				classchange: 0,
				value1: 4.7,
				arrs: '',
				arrs1: '',
				IMGs: 'https://fuss10.elemecdn.com/1/b5/',
                 IMGS3:'',
                 IMGS1:'',
                 IMG4:''
			}
		},
		methods: {
			change(index) {
				this.classchange = index
			}
		},
		created() {
			var url = 'http://cangdu.org:8001/ugc/v2/restaurants/1/ratings/tags'
			var url1 = 'http://cangdu.org:8001/ugc/v2/restaurants/1/ratings'
			this.$http.get(url).then(res => {
				console.log(res.data);
				this.arrs = res.data
			});
			this.$http.get(url1).then(res => {
				console.log(res.data);
				this.arrs1 = res.data;
				//每走一次map函数,数组就往里层进一层(获取事物地址,做字符串分割)
				this.IMGS3=res.data.map(value=>{
					var IMGS1 = value.item_ratings.map( value=>{
						var IMGS = food_path(value.image_hash)
						return IMGS
						//IMG3是最外层的数组
						//IMG1接收的是item_ratings数组中的值
						//IMG 接收的是IMG1数组里food_path的值			
					})
					return IMGS1
				})
				console.log(this.IMGS3);
				//获取头像图片地址,做字符串分割
				this.IMGS4=res.data.map(value=>{
						var IMGS5 = img_path(value.avatar)
						return IMGS5
						//IMG3是最外层的数组
						//IMG1接收的是item_ratings数组中的值
						//IMG 接收的是IMG1数组里food_path的值			
				})
				//				this.value2=res.data[0].rating_star
				//				console.log(res.data[0].rating_star)
			})
		}
	}
</script>

<style scoped>
	.blue {
		background: #3190e8 !important;
		color: white !important;
	}
	
	.content {
		margin-top: 6.5rem;
		display: flex;
		background: white;
		border-bottom: .02rem #ebebeb solid;
		padding: .5rem;
	}
	
	.content1 {
		display: flex;
		justify-content: space-between;
		margin-left: 1rem;
		width: 100%;
	}
	
	.contleft {
		text-align: center;
		font-size: .7rem;
	}
	
	.contleft p {
		margin: .2rem 0;
	}
	
	.contleft p:nth-child(1) {
		font-size: 1.2rem;
		color: #f60;
	}
	
	.contleft p:nth-child(2) {
		font-size: .65rem;
		color: #666;
		margin-bottom: .1rem;
	}
	
	.contleft p:nth-child(3) {
		font-size: .4rem;
		color: #999;
	}
	
	.contright {
		display: flex;
		justify-content: space-between;
		font-size: .7rem;
		margin-right: .5rem;
	}
	
	.contright1 {
		display: flex;
		justify-content: space-between;
	}
	
	.bottom {
		border: .02rem white solid;
		display: flex;
		flex-wrap: wrap;
		background: white;
		padding-left: .5rem;
	}
	
	.bottom li {
		padding: .5rem;
		margin: 0 .4rem .2rem 0;
		background: #ebf5ff;
		/*width: 3.5rem;*/
		border-radius: .3rem;
		font-size: .7rem;
		color: black;
	}
	/*.bottom li:hover {
		background: #3190e8;
	}*/
	
	.bottom1 {
		display: flex;
		font-size: .7rem;
		background: white;
		border-bottom: .02rem #ebebeb solid;
		padding: .5rem;
		border-top: .02rem #ebebeb solid;
	}
	
	.left1_top {
		display: flex;
		justify-content: space-between;
		flex: 3;
	}
	
	.P {
		flex: 4;
	}
	
	.left1 img {
		border-radius: 5rem;
		width: 1.5rem;
		height: 1.5rem;
	}
		.Img {
		margin: .1rem 0;
		overflow: hidden;
	}
	.Img span {
		
		float: left;
		margin: .2rem;
	}
	.Img span img {

		width: 2.5rem;
		height: 2.5rem;
	}
	

	
	.p1 {
		margin: .3rem 0;
	}
	
	.spans {
		margin: .1rem 0;
		display: inline-block;
	}
	
	.p2 {
		display: flex;
		font-size: .5rem;
	}
	
	.rating_star {
		letter-spacing: .1rem;
	}
	
	.p3 {
		display: block;
		border: .02rem #ebebeb solid;
		width: 1.5rem;
		height: 1rem;
		padding: 0.2rem .5rem;
		/*border-radius: .2rem;*/
		margin: 0 .1rem;
		color: #999;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		float: left;
		/*vertical-align: middle;*/
	}
</style>
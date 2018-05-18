<template>
	<div class="out">
		<div class="top">
			<div class="top_one">
				<router-link to="/infor" class="el-icon-arrow-left">
				</router-link>
				<span>编辑地址</span>
				<span @click="BJ" class="changeSpan">
				    <i v-text='text'></i>
					
				
				</span>
				<!--<span @click="BJ" class="changeSpan">编辑</span>-->
			</div>
		</div>
		<!--线-->
		<ul v-for="(distance,index) in distances">
			<li>
				<p>{{distance.ressCode}}</p>
				<p>{{distance.item.name}}</p>		
				<!--<p>{{distance.msg.deList[distance.msg.deID].name}}</p>-->
				<i class="DELETE" v-show="isshow" @click="Delete(index)">x</i>
			</li>
		</ul>
		<div class="line">
			<!--<ul>
				<li></li>
			</ul>-->
		</div>
		<!--新增地址-->

		<div class="bottom">
			<div class="new">
				<span>新增地址</span>
				<span class="el-icon-arrow-right
" @click="NEW">
                </span>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	export default {
		name: 'Address',
		data() {
			return {
				msg: "", //默认为空
				addCode: "",
				code: {},
				distances: [],
				text: '编辑',
				isshow: false,
				lishow: true,
				current: 0
			}
		},
		methods: {
			NEW() {
				this.$router.push({
					path: '/add'
				})
			},
			BJ() {
				this.isshow = !this.isshow
				if(this.isshow) {
					this.text = '完成'
				} else {
					this.text = '编辑'
				}
			},
			//删除地址
			Delete(index) {
				console.log(this.codes)	
				this.$store.commit('delete',index)
				//把vuex里传过来的值存储到本地
				localStorage.codes = JSON.stringify(this.codes);
				console.log(this.codes)
				//从vuex取到最新的地址信息
				this.distances=this.codes
				console.log(this.current);
			}
		},
		created() {
			console.log(this.$route.params)
			//打印路由传过来的参数是否为空
			console.log(Object.keys(this.$route.params).length);
			//刷新或者路由跳转
			if(Object.keys(this.$route.params).length) {
				console.log("路由")
				//路由跳转
				//把路由传过来的地址信息提交到vuex上
				this.$store.commit("codes", this.$route.params);
				//从vuex取到最新的地址信息
				this.distances = this.codes;
				//把最新的地址信息更新到本地存储
				localStorage.codes = JSON.stringify(this.codes);
			} else {
				//刷新
				//直接从本地拉取信息
				this.distances = JSON.parse(localStorage.codes);
			}
			console.log(this.distances)
		},
		computed: {
			...mapState(["codes"]),
		}
	}
</script>

<style scoped>
	/*头部导航栏样式*/
	
	.top {
		background: #3190e8;
	}
	
	.top_one {
		color: white;
		padding: .6rem;
		font-size: .8rem;
		border-bottom: .01rem solid #f5f5f5;
		display: flex;
		justify-content: space-between;
	}
	
	.top_one a {
		font-size: 1rem;
		color: white;
	}
	
	.bottom {
		background: white;
	}
	
	.new {
		padding: .6rem;
		display: flex;
		justify-content: space-between;
		font-size: .7rem;
		border-bottom: .01rem solid #d9d9d9;
	}
	
	ul li {
		border-bottom: .01rem solid #d9d9d9;
		border-top: .01rem solid #d9d9d9;
		padding: .2rem;
		margin-top: .5rem;
		position: relative;
	}
	
	.DELETE {
		position: absolute;
		right: .5rem;
		top: .5rem;
	}
</style>
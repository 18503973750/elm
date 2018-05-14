<template>
	<div class="out">
		<div class="top">
			<div class="top_one">
				<router-link to="/vip" class="el-icon-arrow-left">
				</router-link>
				<span>编辑地址</span>
				<span>编辑</span>
			</div>
		</div>
		<!--线-->
		<ul>
			<li>

			</li>
		</ul>
		<div class="line">
			<ul>
				<li></li>
			</ul>
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
	export default {
		name: 'Address',
		data() {
			return {
				msg: ""//默认为空
			}
		},
		methods: {
			NEW() {
				this.$router.push({
					path: '/add'
				})
			}
		},
		cerated() {
			console.log(this.$route.params);
			if(Object.keys(this.$route.params).length) {
				this.msg = this.$route.params
				localStorage.msg = JSON.stringify(this.$route.params)
			} else {
				this.msg = JSON.parse(localStorage.msg)
			}
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
	}
</style>
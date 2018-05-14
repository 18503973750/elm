<template>
	<div class="out">
		<div class="top">
			<div class="top_one">
				<router-link to="/infor" class="el-icon-arrow-left">
				</router-link>
				<span>重置密码</span>
			</div>
		</div>
		<ul class="MarginTop lis">
			<li>
				<input type="number" name="" id="" value="" placeholder="账号" />
			</li>
			<li>
				<input type="number" name="" id="" value="" placeholder="旧密码" />
			</li>
			<li>
				<input type="number" name="" id="" value="" placeholder="请输入新密码" />
			</li>
			<li>
				<input type="number" name="" id="" value="" placeholder="确认密码" />
			</li>
			<li>
				<input type="number" name="" id="" value="" placeholder="验证码" class="yzmInp" />
				<img :src="IMG.code" alt="" class="yzm" />
				<p>
					<span>看不清</span>
					<span @click="HYZ">换一张</span>
				</p>
			</li>
		</ul>
		<div class="bottom">
			确认修改
		</div>

	</div>
</template>

<script>
	export default {
		name: 'forget1',
		data() {
			return {
				IMG: {}
			}
		},
		created() {
			var url = 'http://cangdu.org:8001/v1/captchas'
			this.$http.post(url).then(res => {
				console.log(res.data);
				this.IMG = res.data
			})
		},
		methods: {
			HYZ() {
				var url = 'http://cangdu.org:8001/v1/captchas'
				this.$http.post(url).then(res => {
					this.IMG = res.data
				})
			}
		}

	}
</script>

<style scoped>
	.top {
		background: #3190e8;
		border: .05rem solid #3190e8;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
	
	.top_one {
		color: white;
		padding: .5rem;
		padding-bottom: .8rem;
		font-size: .8rem;
	}
	
	.top_one .el-icon-arrow-left {
		color: white;
	}
	
	.top_one span {
		padding-left: 5rem;
	}
	
	ul {
		background: white;
	}
	
	.lis li {
		border-bottom: .1rem solid #f1f1f1;
	}
	
	.lis li input {
		margin-left: .8rem;
		padding: .5rem 0;
		height: 1rem;
		outline: medium;
		font-size: .7rem;
	}
	
	.yzm {
		width: 2.5rem;
		height: 1rem;
		/*border: .1rem red solid;*/
	}
	
	ul li:last-child {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: .5rem;
	}
	
	ul li p {
		display: flex;
		flex-direction: column;
		padding-right: .5rem;
	}
	
	li p span:nth-child(2) {
		margin: .1rem 0;
		color: red;
	}
	
	.bottom {
		margin: 1rem .5rem;
		font-size: .7rem;
		color: #fff;
		background-color: #4cd964;
		padding: .5rem 0;
		border: 1px;
		border-radius: .15rem;
		text-align: center;
	}
</style>
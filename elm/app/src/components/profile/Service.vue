<template>
	<div class="out">
		<div class="top">
			<div class="top_one">
				<router-link to="/Profile" class="el-icon-arrow-left">
				</router-link>
				<span>服务中心</span>
			</div>
		</div>
		<div class="middle">
			<router-link to="/" class="middle-one">
				<div class="el-icon-service"></div>
				<div>在线客服</div>
			</router-link>
			<router-link to="/" class="middle-two">
				<div class="el-icon-phone"></div>
				<div>在线客服</div>
			</router-link>
		</div>
		<div class="centre">
			热门问题
		</div>
		<ul>
			<li v-for="arr in arrs">
				<span>{{arr.title1}}</span>
				<span v-html="arr.title2"></span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "Profile",
		data: function() {
			return {
				arrs: [{
					title1: "超级会员权益说明",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "签到规则",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "用户等级说明",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "积分问题",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "支付问题",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "其他问题",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "准时达问题",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "会员说明",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "会员问题",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "红包问题",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "活动细则",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "补签规则",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "优惠说明",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "免责声明",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "代金券说明",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "商务合作",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "余额问题",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "超赞商家",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "匿名购买",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				},
				{
					title1: "活动问题",
					title2: "<i class=\'el-icon-arrow-right\'></i>"
				}
				]
			}
		}
	}
</script>

<style scoped>
	.out {
		background: white;
	}

	.top {
		background: #3190e8;
		border: .05rem solid #3190e8;
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

	.middle {
		overflow: hidden;
	}

	.middle-one {
		display: block;
		float: left;
		border-right: .05rem solid #f5f5f5;
		width: 49%;
		height: 4rem;
		text-align: center;
	}

	.middle-one div:nth-child(1) {
		color: rgb(255, 123, 82);
		margin-top: .8rem;
	}

	.middle-one div:nth-child(2) {
		margin-top: .4rem;
		font-size: .6rem;
		color: #666;
	}

	.middle-two {
		display: block;
		float: left;
		/*border: .05rem solid red;*/
		width: 50%;
		height: 4rem;
		text-align: center;
	}

	.middle-two div:nth-child(1) {
		color: rgb(255, 123, 82);
		margin-top: .8rem;
	}
	.middle-two div:nth-child(2) {
		margin-top: .4rem;
		font-size: .6rem;
		color: #666;
	}
	.centre {
		font-size: .75rem;
		color: #333;
		line-height: 3rem;
		border-bottom: 1px solid #f5f5f5;
		border-top: 1px solid #f5f5f5;
		padding-left: .7rem;
	}
	ul li {
		padding: 0 .7rem;
		line-height: 2rem;
		border-bottom: 1px solid #f5f5f5;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-ms-flex-align: center;
		align-items: center;
	}
	li span:nth-child(1) {
		font-size: .6rem;
		color: #666;
	}
	li span:nth-child(2) {
		color: #666;
		font-size: .8rem;
	}
</style>

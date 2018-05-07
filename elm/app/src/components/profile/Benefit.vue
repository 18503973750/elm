<template>
	<div class="out">
		<div class="top">
			<div class="top_one">
				<router-link to="/Profile" class="el-icon-arrow-left">
				</router-link>
				<span>我的优惠</span>
			</div>

		</div>
        <div class="top2">
            <div class="top2_left">
                红包
            </div>
            <div class="top2_right">
                商家代金券
            </div>
        </div>
		<div class="bottom">

		</div>
	</div>

</template>

<script>
</script>

<style scoped>
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
    .top2 {

    }
    .top2_left {
        background: white;
        border-bottom-color: #3190e8;
        color: #3190e8;
        width: 50%;
        text-align: center;
        float: left;
        font-size: .65rem;
        padding-bottom: .2rem;
        /*border-bottom: .1rem solid #fff;*/
    }
    .top2_right {
        width: 50%;
        text-align: center;
        /*border: .05rem solid red;*/
        float: left;
    }
</style>

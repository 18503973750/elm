<template>
    <div class="out">
        <div class="top">
            <div class="top_one">
                <router-link to="/Profile" class="el-icon-arrow-left">
                </router-link>
                <span>订单列表</span>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Profile",
		data: function() {
			return {
			}
		}
	}
</script>

<style scoped>
    .top {
        background: #3190e8;
    }

    .top_one {
        color: white;
        padding: .5rem;
        padding-bottom: .6rem;
        font-size: .8rem;
        border-bottom: .01rem solid #f5f5f5;
    }

    .top_one a {
        font-size: 1rem;
        color: white;
    }

    .top_one span {
        padding-left: 5.2rem;
    }
</style>

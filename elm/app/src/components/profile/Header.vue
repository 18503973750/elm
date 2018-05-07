<template>
    <div class="out">
        <div class="top">
            <div class="top_one">
                <router-link to="/Profile" class="el-icon-arrow-left">
                </router-link>
                <span>积分商城</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './Header'

    export default {
        name: "Header",
        components: {
            Header: Header
        }

    }
</script>

<style scoped>
    .out {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;

    }

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
        padding-left: 5.5rem;
    }
</style>

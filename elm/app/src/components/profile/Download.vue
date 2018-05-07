<template>
    <div class="out">
        <div class="top">
            <div class="top_one">
                <router-link to="/Profile" class="el-icon-arrow-left">
                </router-link>
                <span>下载</span>
            </div>

        </div>
        <div class="content">
            <img src="../../img/download.jpg" alt="">
            <p>下载饿了么APP</p>
            <div class="down">下载</div>
        </div>
    </div>
</template>

<script>
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
        padding-left: 5.5rem;
    }
    .content img{
        border-radius: 1rem;
        margin-top: 1rem;
    }
    .content {
        text-align: center;
    }
    .content p {
        font-size: .8rem;
        color: #666;
        margin-bottom: 1rem;
        margin-top: .5rem;
    }
    .content div {
        background-color: #4cd964;
        font-size: .7rem;
        color: #fff;
        text-align: center;
        margin: 0 .7rem;
        line-height: 1.8rem;
        border-radius: .2rem;
        margin-top: .5rem;
    }
</style>

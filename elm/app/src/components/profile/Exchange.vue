<template>
    <div class="out">
        <div class="top">
            <div class="top_one">
                <router-link to="/Profile" class="el-icon-arrow-left">
                </router-link>
                <span>兑换红包</span>
            </div>
        </div>
        <div class="content">
            <form action="">
                <input type="text" placeholder="请输入兑换码" class="ipt1">
                <section class="ipt2">
                    <input type="text" placeholder="验证码">
                    <div class="yzm">
                        <img src="" alt="">
                        <div class="twoP">
                            <p>看不清</p>
                            <p>换一张</p>
                        </div>

                    </div>
                </section>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Exchange"
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

    .content {
        margin-top: 2rem;

    }

    .content form {
        margin-top:.1rem;
        padding: .8rem;
    }

    .ipt1 {
        width: 100%;
        font-size: .7rem;
        color: #666;
        padding: .6rem .1rem;
        border-radius: .15rem;
    }
    .ipt2 input{
        font-size: .7rem;
        color: #666;
        /*padding: .4rem;*/
        padding: .6rem .1rem;
        border-radius: .15rem;
        -ms-flex: 3;
        flex: 3;
        margin-top: .8rem;
    }
    .twoP p:nth-child(1){
        font-size: .55rem;
        color: #666;
    }
    .twoP p:nth-child(2){
        font-size: .55rem;
        color: #3b95e9;
        margin-top: .2rem;
    }
</style>

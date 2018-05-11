<template>
    <div class="out">
        <div class="top">
            <div class="top_one">
                <router-link to="/Profile" class="el-icon-arrow-left">
                </router-link>
                <span>在线支付</span>
            </div>
        </div>
        <div class="content">
            <p>支付剩余时间</p>
            <p>00:15:00</p>
        </div>
        <div class="contentP">
            选择支付方式
        </div>
        <div class="bottom">
            <div class="bottomR">
                <img src="../../img/zhi.png" alt="">
                <span>支付宝</span>
            </div>
            <div class="bottomL el-icon-circle-check
">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Payment",
        //在data里面写循环
        data(){
            return {
                arr:[
                    {

                }
                ]
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

    .content {
        border: 1px red solid;
        background: white;
        text-align: center;
    }

    .content p:nth-child(1) {
        font-size: .6rem;
        color: #666;
        margin-top: 1rem;
    }

    .content p:nth-child(2) {
        color: #666;
        margin-top: 1rem;
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .contentP {
        background-color: #f1f1f1;
        padding: 0 .7rem;
        font-size: .7rem;
        color: #666;
        line-height: 1.8rem;
    }

    .bottom {
        background: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-bottom: .1rem solid #f5f5f5;
    }

    .bottom img {
        width: 2rem;
        height: 2rem;
        margin-right: .3rem;
    }

    .bottomR {
        display: flex;
        align-items: center;
    }
    .bottomL {
        color: #4cd964;
    }
</style>

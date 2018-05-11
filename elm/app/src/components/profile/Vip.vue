<template>
    <div class="out">
        <div class="top">
            <div class="top_one">
                <router-link to="/Profile" class="el-icon-arrow-left">
                </router-link>
                <span>会员中心</span>
            </div>
        </div>
        <div class="bottom">
            <p class="P1">
                为账户<span>10987654321</span>够买会员
            </p>
            <div class="bottom1">
                <div class="right1">
                    会员特权
                </div>
                <div class="left1">
                    会员说明 <span class="el-icon-arrow-right"></span>
                </div>
            </div>
            <div class="bottom2">
                <div class="bottom2-box" v-for="ar in arr">
                    <div class="IMG">
                        <img :src="ar.TP" alt="">
                    </div>
                    <div class="txt">
                        <h4>{{ar.H4}}</h4>
                        <p>{{ar.P1}}</p>
                        <p>{{ar.P2}}</p>
                    </div>
                </div>

            </div>
            <div class="bottom3">
                <div class="bottom3-box">
                    <div class="bottom3-P1"><p>开通会员</p></div>
                    <div class="bottom3-P2">
                        <p>1个月 <span>¥20</span></p>
                        <p>购买</p>
                    </div>
                </div>
            </div>
            <div class="bottom4" v-for="ar in arr2">
                <p>{{ar.P1}}</p>
                <p>{{ar.P2}} <span :class="ar.SPAN"></span></p>
            </div>
        </div>
    </div>
</template>

<script>
    import IMG from "../../img/sheng.jpeg";
    import IMG2 from "../../img/bao.jpeg"
    // const Img = require("../../img/sheng.jpeg");
    export default {
        name: "Vip",
        //循环数据写到data里面
        data() {
            return {
                arr: [
                    {
                        TP: IMG,
                        H4: "减免配送费",
                        P1: "每月减免30单，每日可减免3单，每单最高减4元",
                        P2: "蜂鸟专送专享"

                    }, {
                        TP: IMG2,
                        H4: "减免配送费",
                        P1: "每月减免30单，每日可减免3单，每单最高减4元",
                        P2: "蜂鸟专送专享"

                    }
                ],
                arr2: [
                    {
                        P1: "兑换会员",
                        P2: "使用卡号卡密",
                        SPAN: "el-icon-arrow-right"
                    }, {
                        P1: "购买记录",
                        P2: "开发票",
                        SPAN: "el-icon-arrow-right"
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

    .P1 {
        font-size: .5rem;
        color: #666;
        line-height: 1rem;
        padding: .5rem;
    }

    .P1 span {
        color: black;
        font-size: .7rem;
        font-weight: 600;
        padding: .2rem;
    }

    .bottom1 {
        border-bottom: .1rem solid #f5f5f5;
        background: white;
        /*margin: 0 .3rem;*/
        padding: .8rem .5rem;
        font-weight: 300;
        display: flex;
        justify-content: space-between;
    }

    .right1 {
        color: #333641;
    }

    .left1 {
        color: #999;
        font-size: .7rem;
    }

    .bottom2 {
        background: white;
    }

    .bottom2-box {
        display: flex;
        border-bottom: .1rem #f5f5f5 solid;
        margin-left: .8rem;
        padding: 1rem 0;
    }

    .bottom h4 {
        padding-bottom: .5rem;
    }

    .IMG {
        margin-right: .8rem;
    }

    .IMG img {
        width: 1.6rem;
        height: 1.8rem;

    }

    .txt p {
        font-size: .5rem;
        line-height: 1rem;
    }

    .bottom3 {
        margin-top: .2rem;
        background: white;
    }

    .bottom3-box {
        margin-left: .8rem;
    }

    .bottom3-P1 {
        border-bottom: 1px #f5f5f5 solid;
        font-size: .75rem;
        padding: .8rem 0;
    }

    .bottom3-P2 {
        border-bottom: 1px #f5f5f5 solid;
        display: flex;
        justify-content: space-between;
        font-size: .8rem;
        padding: .5rem 0;
    }

    .bottom3-P2 span {
        color: #f60;
        font-size: .7rem;
    }

    .bottom3 p:nth-child(2) {
        border: #f60 1px solid;
        border-radius: .2rem;
        padding: .2rem .3rem;
        font-size: .8rem;
        color: #f60;
        margin-right: .5rem;
    }

    .bottom4 {
        display: flex;
        justify-content: space-between;
        background: white;
        margin-top: .3rem;
        padding: .8rem .5rem;
        font-size: .75rem;
    }
</style>

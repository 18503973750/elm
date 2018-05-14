<template>
    <div class="out">
        <div class="top">
            <div class="top_one">
                <router-link to="/Benefit" class="el-icon-arrow-left">
                </router-link>
                <span>推荐有奖</span>
            </div>
        </div>
        <div class="middle">
            <img src="../../img/activity.png" alt="">
        </div>
        <div class="bottom">
            <div class="wx">
                <img src="../../img/wx.png" alt="" @click="WX">
                <p>邀请微信好友</p>
            </div>
            <div class="qq" @click="QQ">
                <img src="../../img/qq.png" alt="">
                <p>邀请QQ好友</p>
            </div>
            <div class="face">
                <img src="../../img/face.png" alt="" @click="FACE">
                <p>面对面邀请</p>
            </div>
        </div>
        <div class="bottom1">
            <div class="left">
                <p>累计收益</p>
                <p> <span>0</span>元</p>
            </div>
            <div class="right">
                <p>成功邀请</p>
                <p> <span>0</span>人</p>
            </div>
        </div>
        <p class="bottomP">
            -收益明细-
        </p>
        <div class="bottom2">
            <img src="../../img/hb.png" alt="">
            <p>还不赶紧去邀请好友</p>
        </div>
        <!--弹框-->
        <div class="sure" @click="ok">
            <div class="sure1">
                <span class="span1"></span>
                <span></span>
            </div>
            <p>请在饿了么APP中打开</p>
            <div class="sure2">
                确认
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Commend",
        methods:{
           ok(){
               var sure = document.getElementsByClassName('sure')[0];
               sure.style.display = 'none';
           },
            WX(){
                var sure = document.getElementsByClassName('sure')[0];
                sure.style.display = 'block';
            },
            QQ(){
                var sure = document.getElementsByClassName('sure')[0];
                sure.style.display = 'block';
            },
            FACE(){
                var sure = document.getElementsByClassName('sure')[0];
                sure.style.display = 'block';
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
    .middle {
        margin-top: 2rem;
    }
    .middle img {
        width: 100%;
        height: 10rem;
    }
    .bottom {
        margin-top: .3rem;
        display: flex;
        padding: 1rem 0;
        background-color: #fff;
    }
    .bottom div {
        flex: 1;
        text-align: center;
    }
    .bottom img {
        width: 2.5rem;
        height: 2.5rem;
    }
    .bottom p {
        margin-top: .3rem;
        font-size: .5rem;
        color: #333;
    }
    .bottom1 {
        display: flex;
        margin-top: 1rem;
        font-size: .5rem;
        color: #666;
    }
    .bottom1 p {
        margin: .3rem;
    }
    .left {
        flex: 1;
        text-align: center;
        border-right: .01rem solid #ddd;
    }
    .left p:nth-child(1) {
        color: #666;
    }
    .left p span{
        color: red;
        font-size: .8rem;
    }
    .right {
        flex: 1;
        text-align: center;
    }
    .right p:nth-child(1) {
        color: #666;
    }
    .right p span{
        font-size: .8rem;
    }
    .bottomP {
        color: #666;
        font-size: .05rem;
        text-align: center;
        margin-top: 1rem;
    }
    .bottom2 {
        margin-top: 1rem;
        text-align: center;
    }
    .bottom2 img {
        width: 1.3rem;
        height: 1.6rem;
    }
    .bottom2 p {
        color: #999;;
        font-size: .05rem;
        text-align: center;
        margin-top: .5rem;
    }
    /*弹框的样式*/
    .sure {
        /*border: .1rem white solid;*/
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -6rem;
        margin-left: -6rem;
        width: 12rem;
        animation: tipMove .4s;
        background-color: #fff;
        padding-top: .6rem;
        /*border: 1px;*/
        border-radius: .25rem;
    }

    .sure1 {
        width: 3rem;
        height: 3rem;
        border: .15rem solid #f8cb86;
        border-radius: 50%;
        margin: 0 auto;
    }

    .sure p {
        font-size: .7rem;
        color: #333;
        line-height: .9rem;
        text-align: center;
        margin-top: .8rem;
        padding: 0 .4rem;
    }

    .span1 {
        display: block;
        margin-left: 1.55rem;
        margin-top: .5rem;
        width: .12rem;
        height: 1.5rem;
        background-color: #f8cb86;
    }

    .sure1 span:nth-child(2) {
        display: block;
        margin-top: .3rem;
        margin-left: 1.5rem;
        width: .2rem;
        height: .2rem;
        border: 1px;
        border-radius: 50%;
        background-color: #f8cb86;
    }

    .sure2 {
        font-size: .8rem;
        color: #fff;
        font-weight: 700;
        margin-top: .8rem;
        background-color: #4cd964;
        width: 100%;
        text-align: center;
        line-height: 1.8rem;
        border: 1px;
        border-bottom-left-radius: .25rem;
        border-bottom-right-radius: .25rem;
    }
</style>

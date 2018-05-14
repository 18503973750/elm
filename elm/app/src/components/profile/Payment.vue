<template>
    <div class="out">
        <div class="top">
            <div class="top_one">
                <router-link to="/vip" class="el-icon-arrow-left">
                </router-link>
                <span>在线支付</span>
            </div>
        </div>
        <div class="content">
            <p>支付剩余时间</p>
            <p>00:{{m}}:{{s}}</p>
        </div>
        <div class="contentP">
            选择支付方式
        </div>
        <div class="bottom" v-for="(ar,index) in arr">
            <div class="bottomR">
                <img :src="ar.TP" alt="">
                <span>{{ar.txt}}</span>
            </div>
            <div class="bottomL" v-bind:class="{green:index==orchange}" @click="DJ(index)">
                <span :class="ar.RT">
                </span>
            </div>
        </div>
        <p class="bottomP" @click="ok">确认支付</p>
        <!--确认支付弹框-->
        <div class="sure">
            <div class="sure1">
                <span class="span1"></span>
                <span></span>
            </div>
            <p>当前环境无法支付，请打开官方APP进行付款</p>
            <div class="sure2" @click="NO">
                确认
            </div>
        </div>
        <!--计时器弹框-->
        <div class="TIME" v-if="orshow">
            <div class="TIME1">
                <span class="span1"></span>
                <span></span>
            </div>
            <p>支付超时</p>
            <div class="TIME2" @click="TNO">
                确认
            </div>
        </div>
    </div>
</template>

<script>
    import IMG from "../../img/zhi.png";
    import IMG1 from "../../img/wei.png"

    export default {
        name: "Payment",
        //在data里面写循环
        data() {
            return {
                orchange:-1,
                orshow:false,
                s: "00",
                m: 15,
                arr: [
                    {
                        TP: IMG,
                        txt: "支付宝",

                        RT: "el-icon-circle-check"
                    },
                    {
                        TP: IMG1,
                        txt: "微信",
                        RT: "el-icon-circle-check"
                    }
                ],
//              orchange: false,
//                 current:0
            }
        }, methods: {
            DJ(index) {
                this.orchange = index;

            },
            ok() {
                var sure = document.getElementsByClassName('sure')[0]
                sure.style.display = "block";
            },
            NO() {
                var sure = document.getElementsByClassName("sure")[0]
                sure.style.display = "none";
            },
            TNO (){
                this.orshow = false
                // alert(666)

            }
        },
        //创建一个实例(计时器)
        created() {
            //先判断秒
            var time1 = setInterval(() => {
                this.s--
                if (this.s <= -1) {
                    this.s = 59
                }
                if (this.s <= 9) {
                    this.s = "0" + this.s.toString();
                }
                if (this.s == 59 && this.m == 15) {
                    this.m = 14
                }
            }, 1000);
            //在创建一个计时器计算分
            var timer = setInterval(() => {
                this.m--
                if (this.m <= 9) {
                    this.m = "0" + this.m.toString();
                }
                if (this.m <= 0) {
                    clearInterval(timer);
                    clearInterval(timer1);
                    //弹出弹框消失
                    this.orshow = true
                }
            }, 60000);
        }
    }
</script>

<style scoped>
	/*头部导航栏样式*/
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
        border: 1px white solid;
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
/*图片跟文字居中*/
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
        /*color: #4cd964;*/
        color: gray;
    }

    .green {
        color: #4cd964;
    }

    .bottomP {
        background-color: #4cd964;
        font-size: .7rem;
        color: #fff;
        text-align: center;
        margin: 0 .7rem;
        line-height: 1.8rem;
        border-radius: .2rem;
        margin-top: .5rem;
        font-weight: 700;
    }
    /*确认支付弹出框样式*/
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
    /*计时器弹出框样式*/
    .TIME {
        /*border: .1rem white solid;*/
        /*display: none;*/
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

    .TIME1 {
        width: 3rem;
        height: 3rem;
        border: .15rem solid #f8cb86;
        border-radius: 50%;
        margin: 0 auto;
    }

    .TIME p {
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

    .TIME1 span:nth-child(2) {
        display: block;
        margin-top: .3rem;
        margin-left: 1.5rem;
        width: .2rem;
        height: .2rem;
        border: 1px;
        border-radius: 50%;
        background-color: #f8cb86;
    }

    .TIME2 {
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

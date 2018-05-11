<template>
    <div class="out">
        <div class="top">
            <div class="top_one">
                <router-link to="/Benefit" class="el-icon-arrow-left">
                </router-link>
                <span>兑换红包</span>
            </div>
        </div>
        <div class="content">
            <form action="">
                <input type="number" placeholder="请输入兑换码" class="ipt1" v-model="code">
                <section class="ipt2">
                    <input type="number" placeholder="验证码" v-model="yzmCode">
                    <div class="yzm">
                        <img :src="VerificationCodeImg.code" alt="">
                        <div class="twoP">
                            <p>看不清</p>
                            <p @click="P">换一张</p>
                        </div>
                    </div>
                </section>
            </form>
            <div class="change" @click="show1">
                兑换
            </div>
        </div>
        <div class="sure">
            <div class="sure1">
                <span class="span1"></span>
                <span></span>
            </div>
            <p>无效的兑换码</p>
            <div class="sure2" @click="ok">
                确认
            </div>
        </div>
    </div>
</template>

<script>



    export default {
        name: "Exchange",
        data() {
            return {
                sure6: false,
                VerificationCodeImg: {},
                code: "",
                yzmCode: ""
            }
        },
        methods: {

            show1() {
                var sure = document.getElementsByClassName('sure')[0];
                if(this.code == "" || this.yzmCode == "" ){
                    sure.style.display = 'none';
                }else {
                    sure.style.display = 'block';
                }

            },
            ok() {
                var sure = document.getElementsByClassName('sure')[0];
                sure.style.display = 'none';
            },
            P(){
                var url = 'http://cangdu.org:8001/v1/captchas';
                this.$http.post(url).then(res => {
                    this.VerificationCodeImg = res.data;
                    console.log(res.data);
                })
            },
        },
        created() {
            var url = 'http://cangdu.org:8001/v1/captchas';
            this.$http.post(url).then(res => {
                this.VerificationCodeImg = res.data;
                console.log(res.data);
            });
        },
        watch: {
            //判断两个输入框的输入条件
            code() {
                if(this.code.split("").length = 1 && this.yzmCode.split("").length >= 4){
                    var ipt = document.getElementsByClassName('change')[0];
                    ipt.style.backgroundColor = "#4cd964";
                }else {
                    var ipt = document.getElementsByClassName('change')[0];
                    ipt.style.backgroundColor = "#ccc";
                }

            },
            yzmCode() {
                if(this.yzmCode.split("").length >= 4 && this.code.split("").length >= 1){
                    var ipt = document.getElementsByClassName('change')[0];
                    ipt.style.backgroundColor = "#4cd964";
                }else {
                    var ipt = document.getElementsByClassName('change')[0];
                    ipt.style.backgroundColor = "#ccc";
                }

            }
        }
    }

</script>

<style scoped>
    input {
        outline: none;
    }

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
        margin-top: .1rem;
        padding: .8rem;
    }

    .ipt1 {
        width: 100%;
        font-size: .7rem;
        color: #666;
        padding: .6rem .1rem;
        border-radius: .15rem;
        line-height: 1.5rem;
    }

    .ipt2 {
        display: flex;
    }

    .ipt2 input {
        /*border: .1rem solid red;*/
        font-size: .7rem;
        padding: .8rem .2rem;
        border-radius: .15rem;
        -ms-flex: 2;
        flex: 2;
        margin-top: .8rem;
        line-height: 1rem;
    }

    .twoP {
        margin-left: .5rem;
    }

    .twoP p:nth-child(1) {
        font-size: .55rem;
        color: #666;
    }

    .twoP p:nth-child(2) {
        font-size: .55rem;
        color: #3b95e9;
        margin-top: .2rem;
    }

    .yzm {
        /*border: .1rem solid red;*/
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex: 2;
        flex: 2;
        margin-left: .3rem;
        background-color: #fff;
        border-radius: .15rem;
        display: -ms-flexbox;
        margin-top: .7rem;
        text-align: right;
        line-height: .8rem;
    }

    .yzm img {
        width: 3.5rem;
        height: 1.5rem;
        margin-right: .2rem;
    }

    .change {
        background-color: #ccc;
        font-size: 1rem;
        color: #fff;
        text-align: center;
        margin: 0 .8rem;
        line-height: 2.5rem;
        border-radius: .2rem;
        margin-top: .4rem;
    }

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

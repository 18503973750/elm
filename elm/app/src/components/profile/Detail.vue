<template>
    <div class="out">
        <div class="top">
            <div class="top_one">
                <router-link to="/Balance" class="el-icon-arrow-left">
                </router-link>
                <span>余额问题</span>
            </div>
        </div>
        <div class="bottom" v-for="arr in arrs">
           <h3>{{arr.title}}</h3>
            <p>{{arr.content}}</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Profile",
        data:function () {
            return {
                arrs:[
                    {
                        title:'Q1:使用余额的条件',
                        content:'为了保护账户安全，使用余额前必须先绑定手机号。'
                    },{
                        title:'Q2: 余额可以怎么用？',
                        content:'余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。'
                    },{
                        title:'Q3:我要如何提现？',
                        content:'为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。'
                    },{
                        title:'Q4:为什么会提现失败？',
                        content:'可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。'
                    }
                ]
            }
        }


    }
</script>

<style scoped>
    .out {
        /*background: white;*/
    }
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
    .bottom h3 {
        line-height: 1rem;
        font-size: .8rem;
        color: #333;
        font-weight: 300;
        font-family: Microsoft Yahei;
        padding:.5rem;
    }
    .bottom p {
        font-size: .6rem;
        color: #666;
        line-height: 1rem;
        padding-left: .5rem;
    }
</style>

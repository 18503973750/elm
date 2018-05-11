<style>
    strong {
        position: relative;
    }
    strong i {
        width: 3rem;
        height: 3rem;
        display: block;
        background: url("../../img/zhang.jpg") no-repeat;
        background-size: 3rem 3rem;
position: absolute;
        top: -.5rem;
        right: .1rem;
    }
</style>
<template>
    <div class="out">
        <div class="top">
            <div class="top_one">
                <router-link to="/Benefit" class="el-icon-arrow-left">
                </router-link>
                <span>历史红包</span>
            </div>
        </div>
        <ul class="content-box">
            <li class="content"  v-for="ar in arr">
                <div class="cont_left">
                    <span>¥</span>
                    <span>{{ar.amount}}</span>
                    <p>满25元可用</p>
                </div>
                <div class="cont_mid">
                    <h4>普通红包</h4>
                    <p>2017-05-23到期</p>
                    <p>限收货手机号为1234568910</p>
                </div>
                <strong v-html="img"></strong>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HbHistory",
        data:function () {
            return{
                arr:[{

                }],
                img:'<i></i>'
            }
        },
        created(){
            var url = 'http://cangdu.org:8001/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0';
            this.$http.get(url).then(res=>{
console.log(res);
this.arr = res.data
            })
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

    .content-box {
        margin-top: 3rem;
    }

    .content-box {
        padding: 0 .5rem;
    }

    .content {
        padding: 1rem .22rem .8rem .22rem;
        border: .05rem solid white;
        background: white url("../../img/gray.png") repeat-x;
        background-size: .5rem .2rem;
        margin-top: .5rem;
        border-radius: .25rem;
        text-align: -webkit-match-parent;
        display: flex;
    }

    .cont_left {
        border-right: .05rem dotted #ccc;
        font-size: 0;
        flex: 1;
        padding-left: 1rem;
    }

    .cont_left span:nth-child(1) {
        font-size: .75rem;
        color: #ccc;
        font-weight: 700;
        margin-left: -.6rem;
    }

    .cont_left span:nth-child(2) {
        font-size: 1.2rem;
        color: #ccc;
    }

    .cont_left p {
        margin-left: -.7rem;
        font-size: .4rem;
        color: #999;
        margin-top: .5rem;
        font-weight: 200;
    }

    .cont_mid {
        /*border: .01rem red solid;*/
        /*padding-top: .8rem;*/
        font-size: .5rem;
        flex: 2;
        margin-left: 1rem;
        font-weight: 200;


    }

    .cont_mid h4 {
        font-size: .7rem;
        color: #666;
        margin-left: -.7rem;
    }

    .cont_mid p {
        list-style-type: disc;
        margin-left: -.7rem;
        font-size: .4rem;
        color: #999;
        margin-top: .3rem;
    }

    .cont_right img{
        width: 3rem;
        height: 3rem;
        top: 3.5rem;
        right: .8rem;
        position: absolute;
    }

</style>

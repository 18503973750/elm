<template>
    <div class="out">
        <div class="top">
            <div class="top_one">
                <router-link to="/Profile" class="el-icon-arrow-left">
                </router-link>
                <span>我的优惠</span>
            </div>

        </div>
        <div class="top2">
            <div class="top2_left">
               <span>红包</span>
            </div>
            <div class="top2_right">
                <span>商家代金券</span>
            </div>
        </div>
        <div class="top3">
            <div class="top3_left">
                有<span>3</span>个红包即将到期
            </div>
            <div class="top3_right el-icon-more">
                红包说明
            </div>
        </div>
        <ul class="content-box">
            <li class="content" v-for="ar in arr">
                <div class="cont_left">
                    <span>¥</span>
                    <span>{{ar.amount}}</span>
                    <p>满{{ar.sum_condition}}元可用</p>
                </div>
                <div class="cont_mid">
                    <h4>分享红包</h4>
                    <p>2017-05-23到期</p>
                    <p>限收货手机号为 {{ar.phone}}</p>
                </div>
                <div class="cont_right">
                    剩3日
                </div>
            </li>
        </ul>
        <div class="foot1">
            <p>限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
        </div>
       <p class="foot2" @click="history" >查看历史红包 <span class="el-icon-arrow-right"></span></p>
        <div class="foot3">
            <div class="foot3_left">兑换红包</div>
            <div class="foot3_right">推荐有奖</div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Benefit",
        data:function () {
            return{
                arr:[]
            }
        },
        created() {
            var url = 'http://cangdu.org:8001/promotion/v2/users/1/hongbaos?limit=20&offset=0';
            this.$http.get(url).then(res => {
                console.log(res.data);
                this.arr = res.data;
            })
        },
        methods:{
            history(){
                this.$router.push({
                    path:'/Benefit/Hbhistory'
                })
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
        left:0;
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

    .top2 {
        justify-content: space-between;
        display: flex;
        margin-top: 2.2rem;
    }

    .top2_left {
        background: white;
        /*border-bottom-color: #3190e8;*/
        color: #3190e8;
        width: 50%;
        text-align: center;
        font-size: .65rem;
        padding: .8rem 0 .8rem 0;
        /*border: .05rem solid red;*/
    }
    .top2_left span {
        border-bottom: .1rem #3190e8 solid;
        padding-bottom: .1rem;
    }

    .top2_right {
        width: 50%;
        text-align: center;
        /*border: .05rem solid red;*/
        font-size: .65rem;
        color: #333;
        padding: .8rem 0 .8rem 0;
        /*border-bottom: .1rem solid #fff;*/
        background: white;
    }

    .top3 {
        color: #666;
        font-size: .5rem;
        line-height: 1rem;
        -ms-flex-pack: justify;
        justify-content: space-between;
        display: flex;
        align-items: center;
        padding: .5rem;
    }

    .top3_right {
        color: #3190e8;
    }

    .top3_left span {
        color: red;
        padding: .2rem;
    }
    .content-box {
        padding: 0 .5rem;
    }
    .content {
        padding: 1rem .22rem .8rem .22rem;
        border: .05rem solid white;
        background:white url("../../img/red.png") repeat-x;
        background-size: .5rem .2rem;
        margin-top: .5rem;
        border-radius: .25rem;
        /*display: list-item;*/
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
        color: #ff5340;
        font-weight: 700;
        margin-left: -.6rem;
    }
    .cont_left span:nth-child(2) {
        font-size: 1.2rem;
        color: #ff5340;
        /*font-weight: ;*/
    }
    /*.cont_left span:nth-child(3) {*/
        /*font-size: .8rem;*/
        /*color: #ff5340;*/
        /*font-weight: 700;*/
    /*}*/
    /*.cont_left span:nth-child(4) {*/
        /*font-size: .8rem;*/
        /*color: #ff5340;*/
        /*font-weight: 700;*/
    /*}*/
    .cont_left p{
        margin-left: -.7rem;
        font-size: .4rem;
        color: #999;
        margin-top: .2rem;
        font-weight: 200;
    }

    .cont_mid {
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
    .cont_mid p{
        list-style-type: disc;
        margin-left: -.7rem;
        font-size: .4rem;
        color: #999;
        margin-top: .3rem;
    }

    .cont_right {
        width: 20%;
        font-size: .75rem;
        color: #ff5340;
        font-weight: 200;
        padding-top: .4rem;
    }
    .foot1 p{
        font-size: .4rem;
        color: #999;
        margin-left: .4rem;
        letter-spacing:.1rem;
    }
    .foot1 {
        background-color: #f9f9f9;
        /*padding: .4rem;*/
        border-bottom-left-radius: .25rem;
        border-bottom-right-radius: .25rem;
        padding: 1rem .22rem .8rem .22rem;
        margin: 0 .5rem 0 .5rem;
    }
.foot2 {
    text-align: center;
    font-size: .5rem;
    color: #999;
    margin-top: 1rem;
    margin-bottom: 4rem;
}
    .foot3 {
        border: .01rem white solid;
        display: flex;
        background: white;
        /*padding: .8rem 0 .8rem 0;*/
        justify-content: space-between;
        /*display: flex;*/
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    .foot3 div:nth-child(1) {
        flex: 1;
        line-height: 2.5rem;
        text-align: center;
        font-size: .7rem;
        color: #555;
        border-right: 1px solid rgb(245, 245, 245);
    }
    .foot3 div:nth-child(2) {
        flex: 1;
        line-height: 2.5rem;
        text-align: center;
        font-size: .7rem;
        color: #555;
    }
</style>

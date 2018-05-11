<template>
    <div class="out">
        <div class="top">
            <div class="top_one">
                <router-link to="/Benefit" class="el-icon-arrow-left">
                </router-link>
                <span>商家代金券说明</span>
            </div>
        </div>
        <div class="bottom_box">
            <div class="bottom" v-for="ar in arr">
                <h4>{{ar.Q}}</h4>
                <p>{{ar.P}}</p>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Coupon",
        data() {
            return {
                arr: [
                    {
                        Q: "Q1: 什么是商家代金券？",
                        P: "商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。"
                    },
                    {
                        Q: "Q2: 怎么获得商家代金券？",
                        P: "进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。"
                    },
                    {
                        Q: "Q3: 怎么获得商家代金券？",
                        P: "商家代金券仅限在指定商家使用"
                    },
                ]
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
        padding-left: 4.5rem;
    }

    .bottom_box {
        margin-top: 2.5rem;
    }

    .bottom {
        padding: 0 .5rem .5rem;
        font-weight: 300;
    }

    .bottom h4 {
        color: #666;
        line-height: 2rem;
    }

    .bottom p {
        /*margin-top: 0.5rem;*/
        font-size: .6rem;
        color: #666;
        line-height: 1rem;
    }
</style>

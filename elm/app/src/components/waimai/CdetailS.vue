<style>
    .el-rate__icon {
        font-size: 5px;
        letter-spacing: 0.1px
    }
</style>
<template>
    <div>
        <div class="head">
            <div class="top">
                <div class="te1">4.7</div>
                <div class="te2">综合评价</div>
                <div class="te3">高于周边商家</div>
            </div>
            <div class="ttp">
                <div class="right">
                    <span class="te4">服务态度</span>
                    <el-rate class="te5"
                             v-model="value5"
                             disabled
                             show-score
                             text-color="#ff9900"
                             score-template="{value}">
                    </el-rate>
                </div>
                <div class="te6">
                    <span class="te7">菜品评价</span>
                    <el-rate class="te8"
                             v-model="value5"
                             disabled
                             show-score
                             text-color="#ff9900"
                             score-template="{value}">
                    </el-rate>
                </div>
                <span class="te9">送达时间20分钟</span>

            </div>
            <div class="kkk">
                <div class="zt" :class="{ss:count==index}" v-for="(mk,index) in messages">
                    <div @click="add(index)" >{{mk.name}}</div>
                </div>
            </div>
            <div style="display: flex">
                <div class="p1"><img src="./to.png" alt=""></div>
                <div style="margin-left: 1rem">
                    <div class="M1">4****b</div>
                    <div class="block">
                        <el-rate v-model="value1"></el-rate>
                        <span class="M3"> 按时送达</span>
                    </div>
                    <div>
                        <img src="./p1.png" alt="">
                        <img src="./p2.png" alt="">
                    </div>
                        <div class="M4">
                            <span>超级..</span>
                            <span>韩式..</span>
                        </div>
                </div>
                <div>
                    <span class="M5">2017-2-10</span>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "CdetailS",
        data() {
            return {
                value5: 4.5,
                messages: [{name: '全部（473)'}, {name: '满意（453)'}, {name: '不满意（20)'}, {name: '有图（2)'}, {name: '味道好（47)'}, {name: '送货快（32)'}, {name: '分量足（18)'}, {name: '包装精美（15)'}, {name: '干净卫生（15)'}, {name: '食材新（15)'}],
               count:0,
                value1: null,
                value2: null
            }

        },
        methods:{
            add(index){
               this.count=index
            }
        }


    }
</script>

<style scoped>
    .head {
        border-top: 1px darkgrey solid;
        padding-top: 1rem;
        width: 5rem;
        height: 5rem;
        background-color: #ffffff;
        position: fixed;
        top: 6rem;
        z-index: 2;
        width: 16.8rem;
        height: 23rem;

    }

    .right {
        float: left;
    }

    .te1 {
        font-size: 2rem;
        color: #ff6625;
    }

    .top {
        font-size: 0.7rem;
        margin-left: 1.5rem;
    }

    .top div {
        margin-bottom: 0.4rem;
    }

    .te4 {
        font-size: 0.6rem;
        position: absolute;
        top: 2.4rem;
        right: 7rem;
    }

    .te5 {
        position: absolute;
        top: 2rem;
        right: 2rem;
    }

    .te7 {
        font-size: 0.6rem;
        position: absolute;
        top: 3.4rem;
        right: 7rem;
    }

    .te8 {
        position: absolute;
        top: 3rem;
        right: 2rem;
    }

    .te9 {
        font-size: 0.8rem;
        position: absolute;
        right: 3.6rem;
        top: 4.2rem;
    }
    .zt{
        font-size: 0.6rem;
        margin-right:1rem;
        margin-bottom: 0.3rem;
        background-color:#eaf5fe ;
        padding: 0.5rem 0.4rem;
        margin-left: 0.6rem;

    }
    .kkk{
    margin-top: 2rem;
    border-top: 1px darkgrey solid;
    padding-top: 1rem;
    display: flex;
    flex-wrap:wrap;

    border-bottom: 1px darkgrey solid;


}
    .ss{
        background-color:#178ee4 ;

    }
    .p1{
        margin: 0.4rem 0.3rem;
    }
    .M1{
        font-size:0.6rem;
        margin-top: 0.6rem;
    }
    .M4,.M3{
        font-size: 0.6rem;
    }
    .M3{
        position: absolute;
        left: 7.5rem;
        top: 17rem;
    }
    .block{margin-bottom:0.6rem;
    }
    .M4{
        margin-top: 0.4rem;
    }
    .M4 span{
        border:  1px darkgray solid;
        padding: 0.1rem 0.3rem;

    }
    .M5{
       font-size: 0.4rem;
        position: absolute;
        right: 1rem;
        margin-top:0.6rem;
    }
</style>

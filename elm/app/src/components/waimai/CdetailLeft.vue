<template>
    <div>
        <div class="headeBar">
            <div class="headL">
                <div class="headL1" v-for=" (me,index) in mess">
                    <div class="left" @click="fff(index)">{{me.name}}</div>
                </div>
            </div>
        </div>

        <div class="right-box">

            <div class="right" v-for=" (me,index) in mess">
                <div class="title">
                    <span class="title1" :id="'a'+index">{{me.name}}</span>
                    <span class="title2">{{me.description}}</span>
                    <!--<span class="title3">...</span>-->
                </div>

                <div v-for="(m,index) in me.foods" class="list-box">
                    <div class="ig">
                        <img class="imgs" @click="mine(m)" :src="url+m.image_path" alt="">
                    </div>

                    <div class="left2">
                        <span class="text">{{m.name}}</span><br>
                        <span class="text1">月销售{{m.month_sales}}份</span>

                        <span class="text2">好评率{{m.satisfy_rate}}%</span>

                        <div>
                            <span class="text3">￥{{m.specfoods[0].price}}起</span>
                            <div>
                                <div class="text5" v-if="m.specfoods.length>1">

                                    <div @click="select(m)">选规格</div>
                                </div>

                                <i class="el-icon-circle-plus" v-else @click="DD(m,index)">

                                </i>
                                <div class="ari"></div>
                                <i v-show="m.nb" @click="DD1(m,index)" class="el-icon-remove-outline">
                                    <span class="coun">{{m.nb}}</span>
                                </i>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="GGBox" v-show="show1">
                <div class="GG ">
                    <div class="GG1">{{messages.name}}
                        <i class="el-icon-close" @click="ck"></i>
                    </div>
                    <div class="fg">
                        <div class="fg1" v-for="(mea,index) in messages.specfoods">{{mea.specs_name }}</div>
                    </div>
                    <div class="GW">加入购物车</div>
                </div>

            </div>
            <div v-show="show2">
                <div class="ms1">
                    <div class="tp">
                        <i class="el-icon-arrow-left" @click="show3"></i>
                        <span class="name">{{messa.name}}</span>
                        <div></div>
                    </div>
                    <div>
                        <img class="imgs2" :src="url+messa.image_path" alt="">
                    </div>
                    <div class="bott">
                        <div style="margin-bottom: 0.5rem">
                            <span class="name1">{{messa.description}}</span>

                        </div>
                        <div style="margin-bottom: 0.5rem">
                            <span class="name2">{{messa.name}}</span>
                        </div>
                        <div>
                            <span class="txt8">评分</span>
                            <span class="text9"><el-rate
                                v-model="value5"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                            </el-rate></span>
                        </div>
                        <div class="mind">
                            <div class="moun">
                                <span>月销售{{messa.month_sales}}</span>
                            </div>


                            <div v-for="(messa1, index) in messa.specfoods">
                                <div v-if="index == 0" style="color: #ff6e30">售价￥{{messa1.price}}起送</div>
                            </div>
                            <div class="pl">
                                <span style="margin-right: 0.8rem;">评论数{{messa.rating_count}}</span>
                                <span>好评率{{messa.satisfy_rate}}%</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </div>

    </div>
</template>

<script>
    export default {
        name: "CdetailLeft",
        data() {
            return {
                mess: [],
                url: '//elm.cangdu.org/img/',
                count: 0,
                show: false,
                show1: false,
                messages: [],
                messa: [],
                show2: false,
                value5: 3.7,
                msk1: '',
                msk2: '',
                msk3: '',
                msk4: '',


            }
        },
        created() {
            this.mess = this.$route.params.id
            var api = 'http://cangdu.org:8001/shopping/v2/menu?restaurant_id=' + this.mess

            this.axios.get(api).then((response) => {
                // console.log(response.data)
                this.messages = response.data;
                this.mess = response.data.map(value => {
                    value.foods.map(value => {
                        value.nb = 0;
                        return value
                    })
                    return value

                })


            })

        },


        methods: {
            DD(m, index, $event) {
                var yy = m.nb++;
                this.$forceUpdate();
                this.show = true
                this.msk1 -= m.specfoods[0].price
                this.$store.commit('st', this.msk1)
                this.msk3 = yy + 1
                this.$store.commit('st3', this.msk3)
                // 小球操作
                var div1 = event.target.nextElementSibling;
                div1.style.display = "inline-block";
                div1.style.left = event.clientX - div1.offsetWidth / 2 + "px";
                div1.style.top = event.clientY - div1.offsetHeight / 2 + "px";
                let step = 30;
                let beginX = div1.offsetLeft;
                let beginY = div1.offsetTop;
                let endX =60;
                let endY = 600;
                let count = 0;
                let speedX = -10;
                let speedY = -10;
                // console.log(beginX)

                let time = (endX - beginX) / speedX;
                let a = (endY - beginY - speedY * time) * 2 / (time * time);
                let timer = setInterval(() => {
                    count++;
                    // console.log(div1);
                    div1.style.left = beginX + speedX * count + "px";
                    // console.log(beginX + speedX*count);
                    // console.log(div1.offsetLeft);
                    div1.style.top = div1.offsetTop + speedY + "px";
                    speedY += a;
                    // console.log(a+'!!!!')
                    if (count >= step) {
                        clearInterval(timer);
                        div1.style.display = "none";
                    }
                }, 20);
            //    、、、、、、、

            },

            DD1(m, index) {
                this.$forceUpdate();
                var tt = m.nb--;

                this.show = true
                this.msk2 -= m.specfoods[0].price
                this.$store.commit('st1', this.msk2)
                this.msk4 -= tt - (tt - 1)
                this.$store.commit('st4', this.msk4)
                // 操作小球


            },

            fff(index) {
                var obj = document.getElementById('a' + index).scrollIntoView();

            },
            select(data) {
                this.messages = data;

                if (this.show1 == true) {
                    this.show1 = false
                } else {
                    this.show1 = true
                }
            },
            show3() {
                this.show2 = false

            },
            ck() {
                this.show1 = false
            },
            mine(dat) {
                this.messa = dat
                this.show2 = true
                this.value5 = this.messa.rating
            }


        },


    }
</script>

<style scoped>
    .list-box {
        overflow: hidden;
    }

    .right-box {
        margin-top: 6rem;
    }

    .headeBar {
        position: fixed;
        left: 0;
        top: 6rem;
    }

    .left {
        font-size: 0.6rem;
        padding: 0.8rem 1rem;
        float: none;

    }

    .headL {
        overflow: hidden;
        display: inline-block;
        width: 4rem;

        background-color: #f5f5f5;

    }

    .headL1:hover .left {
        background-color: white;
        border-left: 3px dodgerblue solid;
    }

    .right {
        background-color: #ffffff;
        width: 12.2rem;

    }

    .imgs {
        float: left;
        width: 2rem;

        margin: 0.5rem;
        padding: 0rem 0;

    }

    .text {
        display: inline-block;
        width: 3rem;
        height: 0.8rem;
        font-size: 0.9rem;

        overflow: hidden;

    }

    .text2, .text1 {

        font-size: 0.5rem;
    }

    .left2 {

        width: 8rem;
        padding-left: 3rem;
        margin-top: 0.5rem;
    }

    .text3 {
        color: #ff9163;
        font-size: 0.6rem;
    }

    .text5 {
        display: block;
        font-size: 0.5rem;
        margin-left: 6.7rem;
        background-color: #178ee4;
        width: 1.8rem;
        height: 1rem;
        color: white;
        padding-left: 0.2rem;
        line-height: 1rem;
        border-radius: 15%;
    }

    .el-icon-circle-plus {
        margin-left: 7.8rem;
        display: inline-block;
        color: #178ee4;
    }

    .el-icon-remove-outline {
        display: block;
        position: absolute;
        right: 1.6rem;
        margin-top: -1rem;
        color: #008ce0;
    }

    .GG {
        background-color: #ffffff;
        width: 11.5rem;
        height: 8.5rem;
        position: fixed;
        left: 50%;
        top: 50%;
        margin-top: -4.25rem;
        margin-left: -5.75rem;
        border-radius: 0.5rem;

    }

    .GG1 {
        margin-top: 0.4rem;
        width: 11.5rem;
        text-align: center;

    }

    .fg {
        margin-top: 2.5rem;
        display: flex;
        justify-content: space-around;
        font-size: 0.7rem;

    }

    .fg1 {
        padding: 0.2rem 0.4rem;
        border: 1px darkgrey solid;
        border-radius: 15%;

    }

    .fg1:hover {
        color: #1b9be5;
        border: 1px #1b9be5 solid;
        border-radius: 15%;
    }

    .el-icon-close {
        position: absolute;
        right: 0;
    }

    .GGBox {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.3);
    }

    .GW {
        display: inline-block;
        font-size: 0.8rem;
        margin-left: 6rem;
        margin-top: 1.5rem;
        background-color: #2b99ff;
        padding: 0.3rem 0.4rem;
        border-radius: 10px;
    }

    .ms1 {
        position: fixed;
        left: 0;
        top: 0;
        border-bottom: 0;
        right: 0;
        height: 100%;
        background-color: darkgray;
    }

    .el-icon-arrow-left {
        color: white;
        margin-top: 0.2rem;
    }

    .name {
        color: white;
    }

    .tp {
        padding: 0.4rem 0;
        display: flex;
        justify-content: space-between;
        background-color: #178ee4;

    }

    .imgs2 {
        width: 100%;
        margin-top: 0;
        margin-left: 0;

    }

    .bott {
        margin-top: 1rem;
        font-size: 0.8rem;
        margin-left: 0.4rem;

    }

    .name1 {
        font-size: 0.6rem;

    }

    .name2 {

        font-size: 0.7rem;

    }

    .txt8 {
        position: absolute;
        bottom: 6rem;

    }

    .text9 {
        position: absolute;
        left: 2.5rem;
        bottom: 5.8rem;
    }

    .mind {
        display: flex;
        margin-top: 2rem;
        font-size: 0.7rem;

    }

    .moun {
        margin-right: 1rem;

    }

    .pl {
        position: absolute;
        left: 0.4rem;
        bottom: 3.5rem;
    }

    .ari {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #008ce8;
        position: fixed;
        left: 0;
        top: 0;
        display: none;
        z-index: 2;


    }

    .title1 {
        margin-left: 0.3rem;
        font-size: 0.9rem;
    }

    .title2 {
        font-size: 0.5rem;
    }

    .title {

        padding: 0.5rem 0;
        background-color: #f5F5F5;
    }

    .title3 {
        margin-left: 1.2rem;
    }




</style>

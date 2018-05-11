<template>
    <div>
        <div class="headeBar">
            <div class="headL">
                <div class="headL1" v-for=" me in mess">
                    <div class="left">{{me.name}}</div>
                </div>
            </div>
        </div>

        <div class="right-box">
            <div class="right" v-for=" me in mess">
                <div v-for="m in me.foods" class="list-box">
                    <div class="ig">
                        <img class="imgs" :src="url+m.image_path" alt="">
                    </div>

                    <div class="left2">
                        <span class="text">{{m.name}}</span><br>
                        <span class="text1"> 月销售{{m.month_sales}}份</span>

                        <span class="text2">好评率{{m.satisfy_rate}}%</span>
                        <!--<div v-for="mm in m.specfoods">-->
                            <!--<span class="text3">￥{{mm.price}}起</span>-->
                            <!--&lt;!&ndash;<span class="text3">￥20起</span>&ndash;&gt;-->
                        <!--</div>-->
                        <div>
                            <span class="text3">￥{{m.specfoods[0].price}}起</span>
                            <!--<span class="text3">￥20起</span>-->
                            <div>
                                <span v-if="m.specfoods.length>0">选规格</span>
                                <span v-else>+</span>
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
                mess: '',
                url: '//elm.cangdu.org/img/'
            }
        },
        created() {
            this.mess = this.$route.params.id
            var api = 'http://cangdu.org:8001/shopping/v2/menu?restaurant_id=' + this.mess
            console.log(this.mess)
            this.axios.get(api).then((response) => {
                this.mess = response.data;
                console.log(response.data)


            })
        }

    }
</script>

<style scoped>
    .list-box {
        overflow: hidden;
    }

    .right-box {
        margin-top:6rem;
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

    .text {display: inline-block;
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
    .text3{
        color:#ff9163 ;
        font-size: 0.6rem;
    }
    .text4{
        position: absolute;
        margin-left: 5rem;
        padding: -0.4rem 0;
        background-color: lime;
        border: 1px lime solid;
        border-radius: 50%;

    }
</style>

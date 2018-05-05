<template>
    <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight" class="heard1">
        <div class="top3">
            <div class="top2">
                <div class="oo" v-for="message in first2">
                    <div class="page1">
                        <img :src="url+message.image_url" alt="">
                        <div class="text">{{message.title}}</div>
                    </div>
                </div>
            </div>
            <div class="top1">
                <div class="oo" v-for="message in first">
                    <div class="page1">
                        <img :src="url+message.image_url" alt="">
                        <div class="text">{{message.title}}</div>
                    </div>
                </div>
            </div>
            <div class="top2">
                <div class="oo" v-for="message in first2">
                    <div class="page1">
                        <img :src="url+message.image_url" alt="">
                        <div class="text">{{message.title}}</div>
                    </div>
                </div>
            </div>
            <div class="top1">
                <div class="oo" v-for="message in first">
                    <div class="page1">
                        <img :src="url+message.image_url" alt="">
                        <div class="text">{{message.title}}</div>
                    </div>
                </div>
            </div>


        </div>

            <div class="DD"></div>
            <div class="DD1"></div>


    </v-touch>
</template>

<script>

    var api = 'http://cangdu.org:8001/v2/index_entry'
    export default {
        name: "WaiOne",
        data: function () {
            return {
                messages: [],
                url: 'https://fuss10.elemecdn.com'
            }
        },
        created() {
            this.$http.get(api).then((response) => {
                this.messages = response.data;
                // console.log(response.data)
                // console.log(response.data[0].image_url)
            })
        },
        computed: {
            first() {
                return this.messages.slice(0, 8)
            },
            first2() {
                return this.messages.slice(8, 16)
            },

        },
        methods: {
            onSwipeRight() {
                var top3 = document.getElementsByClassName('top3')[0];
                move(top3,375)

                function move(mask, long) {
                    var b = mask.offsetLeft;
                    var c = long;
                    var d = 20;
                    var t = 0;
                    var timer = setInterval(function () {
                        t++
                        mask.style.left = b + (c / d) * t + 'px'
                        if (t >= d) {

                            if (mask.offsetLeft >=0) {
                                mask.style.left=-32+"rem";
                            }
                            clearInterval(timer)
                        }
                    }, 20)
                }
            },
            onSwipeLeft() {
                var top3 = document.getElementsByClassName('top3')[0];
                move(top3,375)

                function move(mask, long) {

                    var b = mask.offsetLeft;
                    var c = -long;
                    var d = 20;
                    var t = 0;
                    var timer = setInterval(function () {
                        t++
                        mask.style.left = b + (c / d) * t + 'px'
                        if (t >= d) {
                            clearInterval(timer)
                            if(Math.abs(mask.offsetLeft)>=Math.abs(-1118)){
                                mask.style.left=-16+"rem";
                            }

                        }

                    }, 20)


                }

            }
        }
    }
</script>

<style scoped>

    div {

        font-size: 0.6rem;

    }

    img {
        width: 1.6rem;
    }

    .oo {
        float: left;
        margin-top: 0.6rem;

    }

    .page1 {

        width: 3.5rem;
        padding-left: 0.5rem;
        text-align: center;

    }

    .text {
        margin-top: 0.7rem;
    }

    .top1,.top2 {
        width: 16rem;
        height: 7.5rem;
        display: inline-block;
    }

    .top3 {
        width:65.7rem;
        height: 7.5rem;
        position: absolute;
        left: -16rem;
        top: 0;


    }

    .heard1 {
        width: 16.0rem;
        height: 7.5rem;
        overflow: hidden;
        position: relative;
        padding-bottom: 2rem;

    }
    .DD,.DD1{
        height:0.27rem;
        width: 0.27rem;
        border-radius: 100%;
        background-color: blue;
        position: absolute;
    }
    .DD{
        top:7.5rem;
        left:7.8rem;
    }
    .DD1{
        top:7.5rem;
        left:8.8rem;
    }
</style>

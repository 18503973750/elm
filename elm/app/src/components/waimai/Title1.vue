<template>
    <div class="head">
        <div>
            <ul>
                <li v-for="(message,index) in messages">
                    <p class="text" @click="plash(index)">{{message.name}}

                    </p>
                    <!--<img class="imgs" :src="url+message.image_url.slice(0,1)+'/'+message.image_url.slice(1,3)+'/'+message.image_url.slice(3,34)+'g'+'.png'" alt="">-->
                    <div class="shuzi">
                        <p>{{message.count}}</p>
                        <i class="arrow-right"></i>
                    </div>

                </li>

            </ul>
        </div>
        <div class="bottom">
            <div class="right1" v-for="(message,index) in indexs">
                <div class="right2">
                    <div>{{message.name}}</div>

                    <span class="right3">
                        {{message.count}}
                    </span>
                </div>

            </div>
        </div>

    </div>

</template>

<script>
    var api = 'http://cangdu.org:8001/shopping/v2/restaurant/category'
    export default {
        name: "Title1",
        data() {
            return {
                messages: [],
                url: 'https://fuss10.elemecdn.com/',
                indexs: []

            }

        },
        methods: {
            plash(index) {
                this.indexs = this.messages[index].sub_categories


            }

        },

        created() {
            this.$http.get(api).then((response) => {

                this.messages = response.data;


            })

        },
    }
</script>

<style scoped>
    .head {
        width: 16.20rem;
        height: 16.30rem;

        display: flex;
        justify-content: space-between;

        left: 0rem;
        top: 3.7rem;
        z-index: 1;

    }

    p {
        display: block;
        padding-top: 0.4rem;
    }

    ul li {
        display: flex;
        justify-content: space-between;
        font-size: 0.4rem;
        padding-top: 0.4rem;
        padding-left: 1.8rem;
        padding-bottom: 0.4rem;
    }

    ul {
        position: relative;
        width: 9rem;
        height: 100%;

        background-color: #f1f1f1;
    }
    .imgs{margin-left: -9rem;
        width: 0.8rem;
        height: 0.8rem;
    }

    .shuzi p {
        margin-right: 1.5rem;

    }

    .head ul li:hover {
        background-color: ghostwhite;
    }

    .right {
        height: 16.3rem;
        width: 10rem;
        background-color: whitesmoke;
    }

    .right1 {
        width: 8.4rem;
        border-bottom: 1px darkgrey solid;
        z-index: 1;

    }
    .bottom::-webkit-scrollbar {
        display: none
    }
    .bottom{
        width: 8.4rem;
        height: 16.3rem;
        border: 1px white solid;
        overflow-y: scroll;
        overflow-x: hidden;



    }

    .right2 {
        font-size: 0.4rem;
        padding: 0.6rem 0.4rem;
        justify-content: space-between;
        display: flex;
    }
    .right2 div{
    }
    .right3{
        padding-right: 1.5rem;
    }


</style>

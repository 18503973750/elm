<template>
    <div class="heard">
        <div class="heard1">
            <div v-for="(message,index) in messages" @click="order(index)">
                <img class="imgs" :src="message.pig" alt="">
                <span>{{message.name}}</span>
            </div>

        </div>

    </div>
</template>

<script>
    import pic from './good.png'

    export default {
        name: "Title2",
        data() {
            return {
                messages: [{name: '智能排序', pig: pic}, {name: '距离最近', pig: pic}, {name: '销量最高', pig: pic}, {
                    name: '起送最低',
                    pig: pic
                }, {name: '配送速度最快', pig: pic}, {name: '评分最高', pig: pic,}]
            }
        },
        methods: {
            order(num) {
                this.$store.commit("order", num);
            }
        }


    }
</script>

<style scoped>
    .heard {
        height: 16.3rem;
        width: 16.2rem;

        background-color: #ffffff;
    }

    .heard1 span {
        font-size: 0.6rem;

    }

    .heard1 div {
        padding: 0.8rem;
        border-bottom: 1px darkgray solid;
    }

    .imgs {
        width: 0.8rem;
    }
</style>

<template>
    <div>
        <div class="head-box">
            <div class="head">
                <img :src="url+messs.image_path" alt="" class="bg-pic">
                <router-link to="/waimai"><i class="el-icon-arrow-left"></i></router-link>
                <div class="hd-img">
                    <img :src="url+messs.image_path" alt="">
                </div>
                <router-link to="waimai"><i class="el-icon-arrow-right"></i></router-link>
                <div class="text">{{messs.name}}</div>
                <div class="text1">
                    <div>商家配送/分钟送达/配送费约￥5
                    </div>
                </div>
                <div class="text2">
            <span>公告：{{messs.promotion_info
}}</span>
                </div>
            </div>
            <div class="xia">
                <span class="xia1 " @click="plash">商品</span>
                <span class="xia2" style="margin-right:0.2rem" @click="plash">评价</span>
            </div>
            >
        </div>
        <div class="bottom" >
            <div>
                <img style="width: 1.5rem" src="./33.jpg" alt="">
            </div>
            <div class="L1">
                <div>￥0.00</div>
                <div>配送费￥5</div>
            </div>
            <div class="yuan" style="font-size:1rem">还差20起送</div>
        </div>
        <CdetailLeft></CdetailLeft>
    </div>
</template>

<script>
    import CdetailLeft from './CdetailLeft'

    export default {
        name: "Cdetail",
        components: {CdetailLeft},

        data() {
            return {
                mess: "",
                messs: "",
                url: '//elm.cangdu.org/img/',

            }


        },
        methods:{
            plash(){
                // var  xia2=document.getElementsByClassName('xia2')[0];
                // xia2.className='kk'
            }
        },

        created() {
            this.mess = this.$route.params.id
            var api99 = `http://cangdu.org:8001/shopping/restaurant/${this.mess}`


            this.axios.get(api99).then((response) => {
                this.messs = response.data;
            })
        }
    }
</script>

<style scoped>
    .head-box {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: #fff;
    }
    .head {
        height: 4rem;
        width: 100%;
        position: relative;
        overflow: hidden;
    }

    .bg-pic {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        width: 100%;
        z-index: -1;
        filter: blur(10px);
    }

    .hd-img img {
        padding-top: 0.5rem;
        padding-left: 0.3rem;
        width: 3rem;
        height: 3rem;
    }

    .text {
        font-size: 0.8rem;
        position: absolute;
        top: 0.6rem;
        left: 3.7rem;
        color: white;
        font-family: STKaiti;
    }

    .text1 {
        font-size: 0.6rem;
        position: absolute;
        left: 3.7rem;
        top: 1.9rem;
        color: white;
        letter-spacing: 0.08rem;
        font-family: STKaiti;
    }

    .text2 {
        color: white;
        font-size: 0.6rem;
        position: absolute;
        top: 3.2rem;
        left: 3.7rem;
        font-family: STKaiti;
    }

    .el-icon-arrow-left {
        position: absolute;
        top: 0.1rem;
        left: 0.2rem;
        font-size: 1rem;
        font-weight: 800;
        color: white;
    }

    .el-icon-arrow-right {
        position: absolute;
        top: 1.6rem;
        right: 0.2rem;
        color: white;
    }
    .xia{
        padding: 0.5rem;
     text-align: center;
    }
    .xia span{
        margin-right: 4rem;
    }
    .kk{
        color: blue;
        border-bottom: 2px blue solid;
    }
    .bottom{
        position: fixed;
        top:27rem;
        display: flex;
        right:0;
        z-index: 1;
        left: 0;
        bottom: 0;
        background-color:limegreen;
    }
    .bottom div{
        color: white;
        font-size: 0.6rem;
    }
    .yuan{
        margin-left: 8rem;
      padding: 0.4rem;
        margin-top: 0.2rem;

    }
    .L1{
        position: absolute;
        left:2rem ;
        top: 0.4rem;
    }
    .L1 div:nth-child(1){
        margin-bottom: 0.3rem;
    }
    .bottom img{
       margin-bottom: 4rem;
    }
</style>

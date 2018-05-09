<template>
    <div >

        <ul  class="imgs">
            <li v-for="message in messages">
                <img :src="url+message.image_path" alt="">
                <div class="M">
                    <div>品牌</div>
                    <div>{{message.name}}</div>
                </div>

                <div class="aution">
                    <div>{{message.rating}}</div>
                    <div>
                        月销售{{message.recent_order_num}}
                    </div>
                </div>
                <div class="text1">20￥起送/配送费约5元</div>

                <div class="text2">保准票</div>
                <div class="text3">
                    <p>蜂鸟专送</p>
                    <p>准时达</p>
                </div>
                <div class="text4">
                    <div>{{message.distance}}/</div>
                    <div>{{message.order_lead_time
                        }}</div>

                </div>

                <div class="block" style="transform: scale(0.6)">
                    <el-rate
                        v-model="value2"
                        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                    </el-rate>
                </div>
                <!--<div>{{message.id}}</div>-->

            </li>

            <span></span>
        </ul>


    </div>
</template>

<script>

    var api='http://cangdu.org:8001/shopping/restaurants'

    export default {
        name: "WaimaiTwo",

        data:function(){
         return{
             messages:'',
             url:'//elm.cangdu.org/img/',
             value1: null,
             value2: null,


         }
        },
        created(){
            let params={ latitude: 31.38098,longitude: 121.50146}
            this.$http.get(api,{params: params}

            ).then((response) => {

                this.messages = response.data;

            });



        },
        computed: {
            order() {
                return this.$store.state.order;
            }
        },
        watch: {
            order() {
                var a = 0;
                if (this.order==0) {
                    a = 4;
                } else if(this.order == 1) {
                    a = 5;
                } else if(this.order == 2) {
                    a = 6;
                } else if(this.order == 3) {
                    a = 1;
                } else if(this.order == 4) {
                    a = 2;
                } else if(this.order == 5) {
                    a = 3;
                }

                let a1 = {
                    latitude:31.22967,
                    longitude:121.4762,
                    order_by: a
                };
                this.$http.get("http://cangdu.org:8001/shopping/restaurants", {params:a1}).then(res=>{
                    this.messages=res.data
                });
            }
        }


    }
</script>

<style scoped>
.text span{
    font-size:0.6rem ;
    margin-left: 1.7rem;
    color: #333;
}
    .imgs img{
        width:2.73rem ;
        height: 2.73rem;
        padding: 0.6rem 0.4rem;

    }
    li{
        position: relative;
        background-color: #fff;
        border-bottom: .025rem lightgrey solid;
    }
    .imgs span{
        height: 2rem;
        width: 100%;
        display: block;
    }
    .M{
        position: absolute;
        left:3.33rem ;
        top:0.7rem;
        font-size:0.6rem ;
    }
.M div{
    float: left;
}
.M div:nth-child(1){
    margin-left: 0.3rem;
    background-color:#ffd930;
    padding: 0.1rem;
}
    .M div:nth-child(2){
        position: absolute;
        left: 3rem;
        width: 5rem;
        margin-left:-1rem ;
        font-weight: 700;
        font-size: 0.65rem;
        margin-top: -0.1rem;
    }
    .aution{position: relative;
        font-size: 0.5rem;


    }
    .aution div:nth-child(1){
        position: absolute;
        left: 6rem;
        top: -2.2rem;
        color:#ff9a0d ;
    }
.aution div:nth-child(2){
    position: absolute;
    left: 7rem;
    top: -2.2rem;
}
    .text1{
        font-size:0.5rem ;
        position: absolute;
        left:3.5rem;
        top: 3rem;
        transform: scale(0.8);
    }
.text2{
    font-size:0.5rem ;
    position: absolute;
    top: 0.7rem;
   right: 0.3rem;
    letter-spacing: 0.2rem;
    color: darkgray;
transform: scale(0.8);

}
.text3{
     font-size:0.5rem ;

    transform: scale(0.8);
 }
    .text3 p:nth-child(1){
        position: absolute;
        right: 0.6rem;
        top:-2.8rem;
        background-color:#90B4FC ;
        padding: 0.1rem ;

    }
.text3 p:nth-child(2){
    position: absolute;
    right:-1.5rem;
    top:-2.8rem;
    border: 1px #90B4FC solid;
    padding: 0.1rem;
}
    .text4{
        font-size: 0.5rem;
    }
    .text4 div:nth-child(1){
        position: absolute;
        top: 3rem;
        right:3.8rem ;
        transform: scale(0.9);
    }
.text4 div:nth-child(2){
    position: absolute;
    top: 3rem;
    right:0.8rem ;
    transform: scale(0.9);
}
    .block{
       transform: scale(0.6);
        letter-spacing:-0.3rem;
        position:absolute;
        top:1.6rem;
        left: 2.81rem;

    }


</style>

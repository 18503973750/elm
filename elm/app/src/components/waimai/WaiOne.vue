<template>
    <div>
       <ul>
           <div class="top">
             <div class="heard">
                <li v-for="message in first">
                    <div class="page1">
                     <img :src="url+message.image_url" alt="">

                    <div class="text">{{message.title}}</div>
                     </div>
                </li>
             </div>
               <div class="heard2">
                   <li v-for="message in first2">
                       <div class="page2">
                           <img :src="url+message.image_url" alt="">

                           <div class="text">{{message.title}}</div>
                       </div>
                   </li>
               </div>
           </div>
       </ul>
    </div>
</template>

<script>

    var api='http://cangdu.org:8001/v2/index_entry'
    export default {
        name: "WaiOne",
        data:function () {
            return{
                messages:[],
               url:'https://fuss10.elemecdn.com'
            }
        },
        created(){
            this.$http.get(api).then((response) => {
                this.messages=response.data;
                // console.log(response.data)
                // console.log(response.data[0].image_url)
        })
        },
        computed:{
           first(){
                return this.messages.slice(0,8)
            },
            first2(){
                return this.messages.slice(8,16)
            },

        }
    }
</script>

<style scoped>
    .top,#app{
        width: 100%;
        overflow: hidden;
    }
div{

    font-size: 0.6rem;

}
img{
    width: 1.6rem;
}
li{
    float: left;
    margin-top: 0.6rem;
}
.page1{

    width:3.5rem;
    padding-left:0.5rem;
    text-align: center;

}
.page2{
    width:3.5rem;
    padding-left:0.5rem;
    text-align: center;

}
    .text{
        margin-top: 0.7rem;
    }
    .heard{

        border: 1px red solid;
        height: 7.82rem;
        width: 16.17rem;
    }
.heard2{
    /*border: 1px red solid;*/
    height:7.82rem;
    /*width: 372px;*/
    width:16.02rem;
/*float: left;*/
}
    .top{
        width:32.5rem;
        height: 7.82rem;

    }
</style>

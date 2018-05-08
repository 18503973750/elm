<template>
   <div>
       <div class="heard">
           <router-link to="/search"><i class="el-icon-search"></i></router-link>   
           <span class="span1">进水区花园城</span> <span class="span2"><router-link to="/login">登录/注册</router-link></span>
       </div>
       <WaiOne></WaiOne>
       <WaimaiTwo></WaimaiTwo>
       <div class="top el-icon-upload2" @click="toTop()"><i>顶部</i></div>
   </div>
</template>

<script>
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    currentPosition -= 10;
    import WaiOne from './WaiOne';
    import WaimaiTwo from './WaimaiTwo';
    export default {
        name: "Waimai",
        components:{
            WaiOne,
            WaimaiTwo
        },
        methods: {
            toTop(){
                var gotoTop= function(){
                    
                      if (currentPosition > 0) {
                        window.scrollTo(0, currentPosition);
                    }
                    else {
                        window.scrollTo(0, 0);
                        clearInterval(timer);
                        timer = null;
                    }
                }
                var timer=setInterval(gotoTop,1);
            }        
        }
    }
</script>

<style scoped>
    .top {
        position: fixed;
        right: 1rem;
        bottom: 2.5rem;
        width: 2rem;
        height: 2rem;
        border-radius: 2rem;
        background-color: #fff;
        border: 1px solid #3190e8;
        color: #3190e8;
        text-align: center;
    }
    .top::before {
        display: block;
        margin-top: .2rem;
        font-size: 1rem;
    }
    .top i {
        font-size: .2rem;
        font-style: normal;
        margin-top: .1rem;
        display: block;
    }
    .heard{
        display: flex;
        justify-content: space-around;
        font-size: 0.6rem;
        height: 1.95rem;
        color: white;
        background-color: #3190e8;
        line-height: 1.95rem;
    }
    .heard i{
       line-height: 1.95rem;
       color: #fff;
    }

    .span1,.span2{
        font-size: 0.6rem;
    }
    .span2 a {
        color: #ffffff;
    }
</style>

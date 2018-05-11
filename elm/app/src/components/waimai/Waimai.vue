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


    import WaiOne from './WaiOne';
    import WaimaiTwo from './WaimaiTwo';
    export default {
        name: "Waimai",
        components:{
            WaiOne,
            WaimaiTwo
        },
        props: {
            toBottom: {
                type: Number,
                default: 0
            }
        },
        methods: {
            toTop() {
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            },

            //回到顶部
            handleScroll () {

                var top = document.getElementsByClassName('top')[0];
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop

                if(scrollTop >= 400) {
                    top.style.display = 'block';  
                    top.style.opacity = 1; 
                }else {
                    top.style.display = 'none';
                    top.style.opacity = 0;
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style scoped>
    .top {
        display: none;
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
        transition: all .5s linear;
        opacity: 0;
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

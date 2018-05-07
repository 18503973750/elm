<template>
   <div>
       <div class="heard">
           <i class="el-icon-search"></i>
           <span class="span1">进水区花园城</span> <span class="span2">登录/注册</span>

       </div>
       <WaiOne></WaiOne>
       <WaimaiTwo></WaimaiTwo>
   </div>

</template>

<script>
    import WaiOne from './WaiOne';
    import WaimaiTwo from './WaimaiTwo';
    export default {
        name: "Waimai",
        components:{WaiOne,WaimaiTwo}
    }
</script>

<style scoped>
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
}

.span1,.span2{
    font-size: 0.6rem;
}
</style>

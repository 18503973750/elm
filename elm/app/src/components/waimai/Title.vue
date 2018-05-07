<template>
<div>
    <div class="title">
        <i class="el-icon-arrow-left"></i>
        <span>商超便利</span>

    </div>
    <div class="title2">
        <div @click="plash1">
            <span >{{this.$route.params.title}}</span>
            <i class="el-icon-caret-bottom"></i>
        </div>
       <div v-show="show">
           <Title1></Title1>
       </div>
        <div>
            <span>排序</span>
            <i class="el-icon-caret-bottom"></i>
        </div>
        <div>
            <span>筛选</span>
            <i class="el-icon-caret-bottom"></i>
        </div>
    </div>
    <WaimaiTwo></WaimaiTwo>
</div>
</template>

<script>
    import Title1 from './Title1'
    import WaimaiTwo from './WaimaiTwo'
    export default {
        name: "Title",
        components:{WaimaiTwo,Title1},
        data(){
            return{
                show:false,

            }
        },
        methods:{
            plash1(){
                this.show=!this.show;
            }

        },

    }
</script>

<style scoped>
.title {
    text-align: center;
    padding: 0.5rem;
    background-color:#3190e8;
    color: white;
}
.title span{
    font-size: 0.8rem;
    ont-weight: 700;
}
    .el-icon-arrow-left{
    position: absolute;

        left:0.2rem;
        width:0.2rem;
    }
.title2{
    display: flex;
    font-size:0.6rem;
    justify-content: space-around;
    padding-top: 0.5rem;
    border-bottom: 1px darkgrey solid;
    padding-bottom:0.6rem;

}

</style>

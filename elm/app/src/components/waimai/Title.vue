<template>
<div>
    <div class="title">
        <router-link to="/">
             <i class="el-icon-arrow-left"></i>
        </router-link>
        <span>商超便利</span>

    </div>
    <div class="title2">
        <div @click="plash1">
            <span v-show="show4" >{{mss.title}}</span>
            <span style="color: #90B4FC" v-show="show5">分类</span>
            <i v-show="show4" class="el-icon-caret-bottom"></i>
            <i v-show="show5" class="el-icon-caret-bottom ff" ></i>
        </div>

        <div @click="plash2">
            <span v-show="show6" >排序</span>
            <span style="color: #90B4FC"  v-show="show7">排序</span>
            <i v-show="show6" class="el-icon-caret-bottom"></i>
            <i v-show="show7" class="el-icon-caret-bottom ff"></i>
        </div>
        <div @click="plash3">
            <span v-show="show8" >筛选</span>
            <span style="color: #90B4FC"  v-show="show9">筛选</span>
            <i v-show="show8" class="el-icon-caret-bottom"></i>
            <i v-show="show9" class="el-icon-caret-bottom ff"></i>
        </div>
    </div>

    <div v-show="show">
        <Title1></Title1>
    </div>
    <div v-show="show2">
        <Title2></Title2>
    </div>
    <div v-show="show3">
        <Title3></Title3>
    </div>
    <WaimaiTwo></WaimaiTwo>
</div>
</template>

<script>
    import Title1 from './Title1'
    import WaimaiTwo from './WaimaiTwo';
    import Title2 from './Title2'
    import Title3 from './Title3'
    export default {
        name: "Title",
        components:{WaimaiTwo,Title1,Title2,Title3},
        data(){
            return{
                show:false,
                show2:false,
                show3:false,
                show4:true,
                show5:false,
                show6:true,
                show7:false,
                show8:true,
                show9:false,

                mss:{}


            }
        },
        methods:{
            plash1(){
                this.show=!this.show;
                this.show4=!this.show4
                this.show5=!this.show5
            },

            plash2(){
                this.show2=!this.show2;
                this.show6=!this.show6;
                this.show7=!this.show7;

            },
            plash3(){
                this.show3=!this.show3;
                this.show8=!this.show8;
                this.show9=!this.show9;
            }

        },
        created(){

            if(Object.keys(this.$route.params).length){
                this.mss=this.$route.params
                localStorage.mss=JSON.stringify(this.$route.params)
            }else {
                this.mss=JSON.parse(localStorage.mss)
            }
        }

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
.ff{
   animation: tt 0.3s forwards;
    color: #3190e8;

}
@keyframes tt {
       0%{transform: rotateZ(60deg)}
        50%{transform: rotateZ(120deg)}
       100%{transform: rotateZ(180deg)}
}
</style>

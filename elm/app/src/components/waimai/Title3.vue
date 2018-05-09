<template>
    <div class="head">
        <div class="first">
            <div>配送方式</div>
            <div  @click="pls"><i  v-show="show1" class="el-icon-success one"></i>
                <span>蜂鸟专送</span>
            </div>
            <div>
                <span>商家属性</span>

                <span>（可以多选）</span>

            </div>
        </div>
        <div class="select">
            <div @click="plash(index)" class="fist1" v-for="(mess,index) in messag">
                    <i  class="fist2">{{mess.icon_name}}</i>
                    <i v-show="show" class="ico "></i>
                     {{mess.name}}
                <!--el-icon-success-->
            </div>

        </div>
        <div class="bottom1">
            <div class="bottom">
                <span class="text1" @click="clearC">清空</span>
                <span class="text2" >确定{{count}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    var api = 'http://cangdu.org:8001/shopping/v1/restaurants/activity_attributes'
    export default {
        name: 'Title3',
        data() {
            return {
                messag: [],
                count:'',
                show:false,
                show1:false,
                index:'',

            }
        },
        created() {
            console.log(this.messag);

            this.$http.get(api
            ).then((response) => {
                console.log(response);
                this.messag = response.data;
                console.log(this.messag);


            })
        },
        methods:{
            plash(index){
                var icon = document.getElementsByClassName('ico')[0];
                this.count++
                this.show=!this.show
                 this.index=index;
                console.log(index);

                icon.className = "el-icon-success"
            },
            pls(){
                this.show1=!this.show1
            },
            clearC(){
                this.count=''
                this.show=false
            }


        }
    }
</script>

<style scoped>

    .head{position: absolute;
        height:10.3rem ;
        width: 16.2rem;

        left: 0;
        top: 3.6rem;
        background-color: #ffffff;
        z-index: 1;
    }
    .title {
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;

    }
    .first,.title,.select{
        font-size: 0.6rem;
    }
    .first div:nth-child(1){
        margin-top: 0.7rem;
        margin-left: 0.5rem;
    }
    .first div:nth-child(2){
        margin-top: 0.7rem;
        margin-left: 0.7rem;
        border: 1px darkgrey solid;
        display:inline-block;
        padding: 0.2rem 0.5rem;

    }
    .first div:nth-child(3){
        margin-top: 0.5rem;
        margin-left: 0.2rem;
        padding: 0.2rem 0.5rem;

    }

    .select {
        overflow: hidden;
        padding: .5rem;
        margin-left: -2%;
    }
    .select .fist1 {
        text-align: left;
        padding: 0 .25rem;
        float: left;
        width: 31.33333%;
        margin-bottom: 2%;
        margin-left: 2%;
        border: 1px darkgray solid;
        height: 1.4rem;
        line-height: 1.4rem;
    }
    .select .fist1 i {
        font-style: normal;
    }
    * {
        box-sizing: border-box;

    }
    .fist1 .fist2{

        font-size: 0.4rem;
        padding: 0.08rem 0.2rem;
        border-radius: 20%;


    }
    .select .fist1:nth-child(1) .fist2{
        color: #90B4FC;
        border: 1px #90B4FC solid;
    }
    .select .fist1:nth-child(2) .fist2{
        color: darkgrey;
        border: 1px darkgrey solid;
    }
    .select .fist1:nth-child(3) .fist2{
        color: dodgerblue;
        border: 1px dodgerblue solid;
    }
    .select .fist1:nth-child(4) .fist2{
        color: red;
        border: 1px red solid;
    }
    .select .fist1:nth-child(5) .fist2{
        color: red;
        border: 1px red solid;
    }
    .select .fist1:nth-child(6) .fist2{
        color: darkgrey;
        border: 1px darkgrey solid;
    }

    .bottom1{
       background-color: #f1f1f1;
        padding: 0.6rem;
    }

    .text1{
        background-color: #ffffff;
        padding: 0.2em 2.5rem;
        margin-left: 0.2rem;
        font-size:1rem;
        font-family: STKaiti;
    }
    .text2{
        margin-left: 0.3rem;
        background-color:limegreen;
        padding: 0.2em 2.5rem;
        font-size:1rem;
        font-family: STKaiti;
    }
    .el-icon-success.one{
        color: dodgerblue;
        font-size:0.1rem;
    }

    .el-icon-success{
        color: dodgerblue;
        font-size: 1rem;
    }

</style>

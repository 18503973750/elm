<template>
    <div class="heard">
        <div class="heard1">
            <div>
                <img class="imgs" src="./good.png" alt="">
                <span>智能排序</span>
            </div>
            <div>
                <img class="imgs" src="./good.png" alt="">
                <span>距离最近</span>
            </div>
            <div>
                <img class="imgs" src="./good.png" alt="">
                <span>销量最高</span>
            </div>
            <div>
                <img class="imgs" src="./good.png" alt="">
                <span>起送最低</span>
            </div>
            <div>
                <img class="imgs" src="./good.png" alt="">
                <span>配送速度最快</span>
            </div>
            <div>
                <img class="imgs" src="./good.png" alt="">
                <span>评分最高</span>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        name: "Title2",
        data(){
          return{
          }
        },

    }
</script>

<style scoped>
.heard{
    height:16.3rem ;
    width: 16.2rem;

    background-color:#ffffff;
}
    .heard1{
        /*display: flex;*/
        /*justify-content:center;*/
    }
.heard1 span{
    font-size: 0.6rem;

}
.heard1 div{
    padding:0.8rem;
    border-bottom: 1px darkgray solid;
}

    .imgs{
        width:0.8rem;
    }
</style>

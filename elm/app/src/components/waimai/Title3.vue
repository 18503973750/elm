<template>
    <div>
        <span>配送方式</span>
        <div>蜂鸟专送</div>
        <div>商家属性（可以多选）</div>
        <!--<div>-->
            <!--<div v-for="message in messages">-->
              <!---->
            <!--</div>-->

        <!--</div>-->

    </div>
</template>

<script>
    var api='http://cangdu.org:8001/shopping/restaurants'

    export default {
        name:'Title3',
        dara(){
          return{
              // messages:[]
          }
        },
        created(){
            let params={ latitude: 31.38098,longitude: 121.50146}
            this.$http.get(api,{params: params}

            ).then((response) => {

                this.messages = response.data;
                console.log(response.data[0].supports[0].icon_name
                )
            })
        }
    }
</script>

<style scoped>


</style>

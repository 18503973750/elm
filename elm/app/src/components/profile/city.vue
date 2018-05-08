<template>

    <!--<div id="app">-->
        <div class="t">
            <span>{{this.$route.query.tit}}</span>
        </div>
    <!--</div>-->
</template>

<script>
    export default {
        name: "city",
        data(){
            return{
                title:"",
            }
        },
    }
</script>

<style scoped>
.t{
    background: deepskyblue;

}
</style>

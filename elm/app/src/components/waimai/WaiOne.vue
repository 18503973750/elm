<template>
    <div>
        <ul>
            <li v-for="message in messages">
                <p>{{message.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>

    var api='http://cangdu.org:8001/v2/index_entry'
    export default {
        name: "WaiOne",
        data:function () {
            return{
                messages:[]
            }
        },
        created(){
            this.$http.get(api).then((response) => {
                this.messages=response.data
                console.log(response.data)
        })
        }
    }
</script>

<style scoped>

ul {
    font-size: 0.6rem;
    color: #333;
    display: flex;

}
</style>

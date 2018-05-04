<template>
    <div class="">
        <header class="top">
            <span>ele.me</span>
            <router-link to="">
                <span>登录|注册</span>
            </router-link>
        </header>
        <div class="city-top">
            <p class="city-tit">
                <span>当前定位城市：</span>
                <span>定位不准时，请在城市列表中选择</span>
            </p>
            <p>
                <router-link :to="{name:'city_lists', params:{id:city_lists.id}}">
                    <span>{{ city_lists.name }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
    let api = "http://cangdu.org:8001/v1/cities?type=guess";
    let hotCity = "http://cangdu.org:8001/v1/cities?type=hot"
    export default {
        name: "Home",
        data() {
            return {
                city_lists: [],
                hotCity: []
            }

        },
        created() {
            this.$http.get(api).then((response) => {
                // console.log(response.data);
                this.city_lists = response.data;
            });
            this.$http.get(hotCity).then((response) => {
                console.log(response.data[0].name);
                this.hotCity = response.data;
            });
        }
    }
</script>

<style scoped>
    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1.95rem;
        background-color: #3190e8;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        color: #ffffff;
        font-size: .7rem;
        padding: 0 .4rem;
    }
    .top a span {
        font-size: .65rem;
        color: #ffffff;
    }
    .city-top {
        margin-top: 2.35rem;

    }
    .city-top p {
        height: 1.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .4rem;
        color: #666666;
        border-bottom: 1px solid #e4e4e4;
    }
    .city-tit {
        font-size: .55rem;
    }
    .city-top p a{
        display: block;
        width: 100%;
        color: #3190e8;
        font-size: .75rem;
    }
    .city-top p a i {
        float: right;
        color: #666666;
    }
</style>

<template>
    <div class="">
        <header class="top">
            <span>ele.me</span>
            <router-link to="/profile">
                <span>登录|注册</span>
            </router-link>
        </header>
        <div class="city-top bgc-f">
            <p class="city-tit">
                <span>当前定位城市：</span>
                <span>定位不准时，请在城市列表中选择</span>
            </p>
            <p>
                <router-link :to="{name:'City', params:{id:city_dw.id}}">
                    <span>{{ city_dw.name }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>
            </p>
        </div>
        <h3 class="tit bgc-f" >热门城市</h3>
        <ul class="list list01 bgc-f" >
            <li v-for="hot in hotCity"><router-link :to="{name:'City', params:{id:hot.id}}">{{ hot.name }}</router-link></li>
        </ul>
        <div class="all-city bgc-f" v-for="(key, val) in allCitys">
            <h3 class="tit">{{val}}</h3>
            <ul class="list list02">
                <li v-for="keys in key"><router-link :to="{name:'City', params:{id:keys.id}}">{{ keys.name }}</router-link></li>
            </ul>

        </div>

    </div>
</template>

<script>
    let api = "http://cangdu.org:8001/v1/cities?type=guess";
    let hotCity = "http://cangdu.org:8001/v1/cities?type=hot";
    let allCity = "http://cangdu.org:8001/v1/cities?type=group"
    export default {
        name: "Home",
        data() {
            return {
                city_dw: {},
                hotCity: [],
                allCitys: {}
            }

        },
        created() {
            //城市定位
            this.$http.get(api).then((response) => {
                // console.log(response.data);
                this.city_dw = response.data;
            });
            //热门城市
            this.$http.get(hotCity).then((response) => {
                // console.log(response.data);
                this.hotCity = response.data;
            });
            //所有城市
            this.$http.get(allCity).then((response) => {
                // console.log(response.data);
                this.allCitys = response.data;

                //所有城市按A-z顺序排列
                this.allCitys = objKeySort(this.allCitys);
                function objKeySort(obj) {
                    //排序的函数
                    var newkey = Object.keys(obj).sort();
                    var newObj = {};
                    for (var i = 0; i < newkey.length; i++) {
                        newObj[newkey[i]] = obj[newkey[i]];
                    }
                    return newObj;
                }
            });

        }
    }
</script>

<style scoped>
    .bgc-f {
        background-color: #fff;
    }
    .list01 a {
        color: #3190e8;
    }
    .list02 a {
        color: #666666;
    }
    *{
        box-sizing: border-box;
    }
    .list a {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }
    .list {
        overflow: hidden;
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
    }
    .list li {
        width: 25%;
        float: left;
        font-size: 0.6rem;
        font-weight: 100;
        border-bottom: 1px solid #e4e4e4;
        border-right: 1px solid #e4e4e4;
        height: 1.75rem;
        line-height: 1.75rem;
    }
    .tit {
        padding-left: .4rem;
        margin-top: .4rem;
        font-size: .55rem;
        line-height: 1.5rem;
        border-top: 2px solid #e4e4e4;
    }
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
        font-size: .45rem;
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

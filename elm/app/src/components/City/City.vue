<template>
    <transition>
        <div>
            <header class="top">
                <router-link to="/home"><i class="el-icon-arrow-left"></i></router-link>
                <span>{{ cityName }}</span>
                <router-link to="/home" class="tabCity">
                    <span>切换城市</span>
                </router-link>
            </header>
            <form action="" class="search-box">
                <input v-model="searchTxt" type="text" required="required" placeholder="输入学校、商务楼、地址">
                <span class="button" @click="search">提交</span>
            </form>
            <!-- 显示搜索的内容 -->
            <div class="search-history">
                <ul>
                    <li v-for="(item, index) in list">
                        <div @click="waimai">
                            <h4>{{ item.name }}</h4>
                            <div>{{ item.address }}</div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 搜索历史 -->
            <div class="search-history" id="result" @click="cun()">
                <h3>搜索历史</h3>
                <ul>
                    <!-- <li v-for="item in list">
                        <router-link to="/waimai">
                            <h4>{{ item.name }} {{ item.geohash }}</h4>
                            <div>{{ item.address }}</div>
                        </router-link>
                    </li> -->
                </ul>
                <div class="clear-all">清空所有</div>
            </div>        
        </div>
    </transition>
</template>

<script>

    export default {
        name: "City",
        data(){
            return {
                cityName: null,
                searchTxt:null,
                list: null,
                list2: null,
                showA: true,
                showB: false
            }
        },
        created() {
            //获取id所对应的城市
            this.$http.get(`http://cangdu.org:8001/v1/cities/${this.$route.params.id}`).then((response) => {
                console.log(response.data);
                this.cityName = response.data.name;
            });


  
        },
        methods: {
            search:function(){
                //搜索
                this.$http.get(`http://cangdu.org:8001/v1/pois?city_id=${this.$route.params.id}&keyword=${this.searchTxt}&type=search`).then((response) => {
                    console.log(response.data);
                    this.list = response.data;
                });
            },
            waimai (e) {
                console.log(e.target.innerText);
                // this.$router.push({
                //     name: "waimai",
                //     params: this.list
                // });
            },
            cun () {
                if (typeof(Storage) !== "undefined") {
                    // Store
                    localStorage.setItem("lastname", this.list);
                    // Retrieve
                    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
                } else {
                    document.getElementById("result").innerHTML = "抱歉！您的浏览器不支持 Web Storage ...";
                }   
            }
        }

    }
</script>

<style scoped>
    .clear-all {
        font-size: .7rem;
        color: #666;
        text-align: center;
        line-height: 2rem;
        background-color: #fff;
    }
    .search-history {
        background-color: #fff;
    }
    .search-history h3{
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        padding-left: .5rem;
        font: .475rem/.8rem Microsoft YaHei;
    }
    .search-history li {
        padding: .65rem 5% .55rem 5%;
        border-bottom: 1px solid #e4e4e4;
    }
    .search-history li h4 {
        color: #333333;
        margin-bottom: .35rem;
        font-size: .65rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .search-history li div {
        font-size: .45rem;
        color: #999;
    }

    .search-box {
        margin-top: 2.35rem;
        background-color: #fff;
        padding: .4rem 0 0 0;
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
    }
    .search-box input {
        padding-left: .3rem;
        border: 1px solid #e4e4e4;
    }
    .search-box .button {
        background-color: #3190e8;
        font-size: .65rem;
        text-align: center;
        line-height: 1.4rem;
        color: #fff;
        border: 0;
    }
    .search-box input,.search-box .button {
        outline: 0;
        width: 90%;
        margin: 0 auto .4rem;
        display: block;
        height: 1.4rem;
        font-size: .6rem;
        border-radius: .1rem;
    }
    .top a i {
        font-size: 1rem;
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
        padding: 0 .4rem;
    }
    .top a {
        color: #fff;
        font-size: .5rem;
    }
    .top a span {
        color: #ffffff;
    }
</style>

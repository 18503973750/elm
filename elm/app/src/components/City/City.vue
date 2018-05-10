<template>
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
        <div class="search-history">
            <h3>搜索历史</h3>
            <keep-alive include="City">   
                <ul>
                    <li v-for="item in list">
                        <router-link to="/waimai">
                            <h4>{{ item.name }} {{ item.geohash }}</h4>
                            <div>{{ item.address }}</div>
                        </router-link>
                    </li>
                </ul>
            </keep-alive>
            <div class="clear-all">清空所有</div>
        </div>
        
        <!-- 左边菜单类别 -->
        <div class="menu-title-list">
            <div class="menu-title-item"
                v-for='(menuItem, index) in menuList'
                :class='isActive === index ? "active":"" '
                v-if='menuItem.category && menuItem.dishes'
                @click='jump(index)'></div>
                {{ menuItem.category.categoryName }}
            <div class="current" v-show='isActive === index'></div>
        </div>
        <!-- //右边菜品列表 -->
        <div class="cate-list" :scrollTop.prop='scrollTop'>
            <div class="cate-translate-container">
                <div class="cate-item" v-for='menuItem in menuList' v-if=""></div>
            </div>
        </div>

        <dl>
           <dd @click="da">A</dd>
           <dd @click="db">B</dd>
       </dl>   
       <p v-show="showA">a页面</p>  
       <p v-show="showB">b页面</p>
    </div>
</template>

<script>

    export default {
        name: "City",
        data(){
            return {
                cityName: null,
                searchTxt:null,
                list: null,
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
            da() {
                this.showA = true,
                this.showB = false
            },
            db() {
                this.showB = true,
                this.showA = false
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

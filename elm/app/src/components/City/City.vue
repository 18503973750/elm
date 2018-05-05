<template>
    <div>
        <header class="top">
            <router-link to="/home"><i class="el-icon-arrow-left"></i></router-link>
            <span>zz</span>
            <router-link to="/home" class="tabCity">
                <span>切换城市</span>
            </router-link>
        </header>
        <form action="" class="search-box">
            <input v-model="name" type="text" required="required" placeholder="输入学校、商务楼、地址">
            <input type="submit" @click="search" value="提交"/>
            <!--<button type="button" @click="submit"></button>-->
        </form>
        <div class="search-history">
            <h3>搜索历史</h3>
            <ul>
                <li v-for="item in list0">
                    <a href="">
                        <h4>{{ item.name }}</h4>
                        <div>{{ item.address }}</div>
                    </a>
                </li>
            </ul>
            <div class="clear-all">清空所有</div>
        </div>
    </div>
</template>

<script>
    let getCity = "http://cangdu.org:8001/v1/cities/1";
    let search = "http://cangdu.org:8001/v1/pois?city_id=1&keyword=迪士尼&type=search"
    export default {
        name: "City",
        data(){
            return {
                cityId: null,
                list0:[],//原始
                listt0:[],//处理过的
                name:'',//搜索框内容
            }
        },
        created() {
            //获取id所对应的城市
            this.$http.get(getCity).then((response) => {
                console.log(response.data);
                this.cityId = response.data;
            });
            //搜索
            this.$http.get(search).then((response) => {
                console.log(response.data);
                this.list0 = response.data;
            });
        },
        methods: {
            search:function(){//搜索
                var _this=this;
                var tab=this['list0'];
                if(this.name){
                    _this['listt0']=[];
                    if(!isNaN(parseInt(_this.name))) {
                        for(i in tab) {
                            if(tab[i].sort == parseInt(_this.name)) {
                                _this['listt0'].push(tab[i]);
                            };
                        };
                    } else {
                        for(i in tab) {
                            if(tab[i].City.indexOf(_this.name) >= 0) {
                                _this['listt0'].push(tab[i]);
                            };
                        };
                    };
                }else{
                    alert('请输入筛选条件!')
                };
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
    .search-box button {
        background-color: #3190e8;
        font-size: .65rem;
        color: #fff;
        border: 0;
    }
    .search-box input,.search-box button {
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

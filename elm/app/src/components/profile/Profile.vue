<template>
        <div class="out">
            <div class="top">
                <div class="top_one">
                    <router-link to='/waimai' class="el-icon-arrow-left">
                    </router-link>
                    <span>我的</span>
                </div>
                <div class="top_two">
                    <strong style="display: block;">
                        <div>
                            <img :src=" '//elm.cangdu.org/img/'+userInfo.avatar">
                        </div>
                        <ul>    
                            <li v-if="this.userInfo.username">{{this.userInfo.username}}</li>
                            <li v-else>登录/注册</li>
                            <li class="el-icon-mobile-phone">暂无绑定手机号</li>
                            <span  @click="inforPage" v-if="this.userInfo.username" class="el-icon-arrow-right"></span>
                            <span  @click="inforPage" v-else class="el-icon-arrow-right"></span>
                        </ul>
                    </strong>
                </div>
            </div>
            <table border="1">
                <tr>
                    <router-link to='/Balance'>
                        <td>
    						<span class="span1">{{ userInfo.balance }}</span> 
    						<span>元</span>
                            <br/>
                            <span class="td2">我的余额</span>
                        </td>
                    </router-link>

                    <td>
                        <router-link to="/Benefit">
                            
                             <span class="span2" v-if="userInfo==null">0</span>
                             <span class="span2" v-else>{{ userInfo.gift_amount }}</span>
                            <span>个</span>
                            <br/>
                            <span class="td2">
    						我的优惠
    					</span>
                        </router-link>
                    </td>
                    <router-link to="/Integral">
                        <td>
                            <span class="span3">0</span>
                            <span>分</span>
                            <br/>
                            <span class="td2">我的积分</span>
                        </td>
                    </router-link>
                </tr>
            </table>
            <ul class="my-list firstLi">
                <li>
                    <router-link to="/Orderlist">
                        <i class="el-icon-tickets left"></i> 我的订单
                        <i class="el-icon-arrow-right right"></i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/Chome">
                        <i class="el-icon-goods left"></i> 积分商城
                        <i class="el-icon-arrow-right right">
                        </i>
                    </router-link>
                </li>

                <li>
                    <router-link to="/vip">
                        <i class="el-icon-star-on left"></i> 饿了么会员
                        <i class="el-icon-arrow-right right"></i>
                    </router-link>
                </li>
            </ul>
            <ul class="my-list secondLi">
                <li>
                    <router-link to="/Service">
                        <i class="el-icon-service left"></i> 服务中心
                        <i class="el-icon-arrow-right right"></i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/download">
                        <i class="el-icon-download left"></i> 下载饿了么APP
                        <i class="el-icon-arrow-right right"></i>
                    </router-link>
                </li>
            </ul>
            
        </div>
</template>

<script>
    export default {
        name: "Profile",
        data: function () {
            return {
                userinfor: null,
                userInfo: "",
                id:null,
                name:this.$route.query.name
            }
        },
        created() {
            //储存res的返回的数据
            if (Object.keys(this.$route.params).length) {
                this.userInfo = this.$route.params;
                localStorage.user = JSON.stringify(this.$route.params);
            } else {
                this.userInfo = JSON.parse(localStorage.user);
            }  

            console.log(this.userInfo); 

            //请求用户信息
            this.$http.get(`http://cangdu.org:8001/v1/user?user_id=${this.userInfo.id}`).then((response) => {
                console.log(response.data);
//              this.id=response.data.user_id;
                console.log(this.id)
                this.userinfor = response.data;
            }); 
            //退出登录
            if(this.$route.query.NOname==true){
				this.userInfo.username=false;
				this.password = null;
			}
        },
        methods: {
            inforPage () {
            	console.log(this.userInfo.username)
			
            	if(this.userInfo != null&&this.userInfo.username!=""){
            		this.$router.push({
                    name: 'Infor',
                }) 
            	}else{
            		 this.$router.push({
                    name: 'login',
                    params: {
                        myInfo: this.userInfo
                    }
                }) 
            	}
               
            }
        }
    }
</script>

<style scoped>
    body {
        width: 100%;
        overflow: hidden;
    }

    * {
        box-sizing: border-box;
    }

    .firstLi {
        margin-top: .5rem;
    }

    .secondLi {
        margin-top: .5rem;
    }

    .my-list {
        background-color: #fff;
    }

    .my-list li {
        border-bottom: 1px solid #f1f1f1;
        margin-left: 1.5rem;
        font-size: .7rem;
        padding: .433333rem .266667rem .433333rem 0;
    }

    .my-list li .left {
        margin-left: -.9rem;
        font-size: .7rem;
        color: black;
    }

    .my-list li:nth-child(2) .left {
        color: rgb(252, 123, 83);
    }

    .my-list li:nth-child(3) .left {
        color: rgb(255, 198, 54);
    }

    .secondLi li .left {
        color: rgb(60, 171, 255);
    }

    .secondLi li:nth-child(2) .left {
        color: rgb(60, 171, 255);
    }

    .my-list li .right {
        color: #333;
        font-size: .7rem;
    }

    .my-list a {
        color: #333;
    }

    .out {
        height: 100%;
    }

    table {
        width: 100%;
        text-align: center;
        background: white;
        border-bottom: .05rem gainsboro solid;
    }

    table td {
        width: 33.33333%;
        border-left: .05rem gainsboro solid;
        height: 3.5rem;
        vertical-align: middle;
        /*border-bottom: .05rem gainsboro solid;*/
    }

    .top {
        background: #3190e8;
    }

    .top_one {
        color: white;
        padding: .5rem;
        padding-bottom: .6rem;
        font-size: .8rem;
        border-bottom: .01rem solid #f5f5f5;
    }

    .top_one a {
        font-size: 1rem;
        color: white;
    }

    .top_one span {
        padding-left: 5.5rem;
    }

    .top_one .el-icon-arrow-left {
        color: white;
    }

    .top_two {
        border-radius: 0rem;
        background: #3190e8;
        border: .05rem solid #3190e8;
    }

    .top_two ul {
        color: white;
        padding-left: 4rem;
        padding-top: 1rem;
        background: #3190e8;
    }

    .top_two ul li {
        border-bottom: 0;
    }

    /*圆*/
    .top_two div {
        width: 2.5rem;
        height: 2.5rem;
        overflow: hidden;
        float: left;
        margin-top: .8rem;
        margin-left: 1rem;
        border-radius: 50%;
    }
    .top_two div img {
        width: 100%;
    }

    .top_two li:nth-child(1) {
        font-size: .8rem;
        padding-bottom: .3rem;
    }

    .top_two li:nth-child(2) {
        font-size: .6rem;
        padding-bottom: .8rem;
        font-weight: .1rem;
    }

    .top_two span {
        position: fixed;
        top: 3.3rem;
        right: 0.5rem;
        /*z-index: 1;*/
    }

    .td2 {
        font-size: .57333rem;
        color: #666;
        font-weight: 400;
        padding-bottom: .453333rem;
    }

    .span1 {
        color: #f90;
    }

    .span2 {
        color: red;
    }

    .span3 {
        color: #6ac20b;
    }

    td span:nth-child(2) {
        font-size: .5rem;
        color: black;
    }

    .top {
        background: #3190e8;
    }

    .top_one a {
        color: red;
    }
</style>

<template>
    <transition name="router-slid">
        <div>
            <header class="top">
                <router-link to="/home"><i class="el-icon-arrow-left"></i></router-link>
                <span>密码登录</span>
            </header>
            <form class="login-box">
                <ul>
                    <li><input type="number" placeholder="账号" v-model="phone"></li>
                    <li>
                        <input :type="pwdType"  placeholder="密码" v-model="pswd">
                        <span class="add-item-status swift-btn right" @click="toggle()">
                            <input type="checkbox" name="" id='checkbox'/>
                            <label class="" for='checkbox'></label>
                        </span>
                    </li>
                    <li>
                        <input type="text" placeholder="验证码" v-model="yzm">
                        <img :src="VerificationCodeImg" alt="">
                        <div class="right">
                            <div>看不清</div>
                            <div @click="change()">换一张</div>
                        </div>
                    </li>
                </ul>
                <P>温馨提示：未注册过的账号，登录时将自动注册</P>
                <P>注册过的用户可凭账号密码登录</P>
                <div class="btn"><span class="button" @click="submit()">登录</span></div>
            </form>
            <!-- {{isLogin}} -->
            <div class="res-password"><router-link class="right" to="/forget">重置密码？</router-link></div>
        </div>
    </transition>
</template>

<script>
    import Vue from "vue";
    //登录接口
    let loginLink = "http://cangdu.org:8001/v2/login";
    //验证码接口
    let VerificationCode = "http://cangdu.org:8001/v1/captchas";
    export default {
        name: "login",
        data() {
            return {
                value1: true,
                value2: true,
                pwdType:"password",
                VerificationCodeImg: null,
                phone: null,
                pswd: null,
                yzm: null
            }
        },
        methods: {
            toggle () {
                this.pwdType = this.pwdType == 'password'?'text':'password'
            },
            //登录提交判断
            submit() {
                if(this.phone==null) {
                    alert("请输入手机号!");
                    return
                }
                if(!(/^1[34578]\d{9}$/.test(this.phone))){
                    alert('请正确填写手机号码');
                    return false;
                }

                if(this.pswd == null) {
                    alert("密码不能为空");
                    return
                }
                if(this.pswd.length<6){
                    alert("密码长度必须大于六位！");
                    return
                }
                if(this.pswd.length>=16){
                    alert("密码长度不得大于16位！");
                    return
                }
                if(this.yzm == null) {
                    alert("请输入验证码");
                    return
                }
                

                let data = {
                    username: this.phone,
                    password: this.pswd,
                    captcha_code: this.yzm                    
                };
                Vue.postLogin(loginLink, data, res => {
                    
                    console.log(res)
                    if (res.status == 0) {
                        alert(res.message);
                        return                    
                    } else {

                        //将登录信息传入到 ”我的“ 页面
                        localStorage.user = JSON.stringify(res);
                                              
                        this.$router.push({
                            name: 'Profile',
                            params: res
                        });

                        // loginState = this.$store.commit(‘changeLogin‘,‘1‘)
                        console.log(res);

                    }   
                })
                
            },
            //点击更换验证码图片
            change() {
                var data = {};
                Vue.postLogin(VerificationCode, data, res => {
                    this.VerificationCodeImg = res.code;
                    // console.log(this.VerificationCodeImg)
                })
            }
        },
        created() {
            //图片验证码
            var data = {};
            Vue.postLogin(VerificationCode, data, res => {
                this.VerificationCodeImg = res.code;
                // console.log(this.VerificationCodeImg)
            })
        },
        // computed: {
        //     isLogin () {
        //         return this.$store.state.isLogin
        //     }
        // } 
    }
</script>

<style scoped>
    .swift-btn {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 25px;
    }
    .swift-btn input[type='checkbox'] {
        position: absolute;
        width: 50px;
        height: 25px;
        opacity: 0;
        z-index: 9;
        outline: none;
    }
    .swift-btn > label{
        position: absolute;
        display: inline-block;
        width: 2rem;
        height: .7rem;
        border-radius: 25px;
        border: 1px solid #ddd;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
    }
    .swift-btn > label:before {
        content: '';
        position: absolute;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        left: 0;
        top: -3px;
        border-radius: 1px;
        box-shadow:2px 0px 1px #ccc;
        border-radius: 15px;
        background-color: #ccc;
        transition: left 0.3s ease;
        -webkit-transition: left 0.3s ease;
        -moz-transition: left 0.3s ease;
    }
    .swift-btn > label:after {
        content: '';
        position: absolute;
        display: inline-block;
        left: 40px;
        width: 1rem;
        height: 1rem;
        border-radius: 20px;
        line-height: 25px;
        text-indent: -1px;

    }
    .swift-btn input[type='checkbox']:checked + label{
        border: 1px solid #4cd964;
        background-color: #4cd964;
    }
    .swift-btn input[type='checkbox']:checked + label::before {
        left: 26px;
        top: -3px;
        width: 1rem;
        height: 1rem;
        border: 0;
        box-shadow: none;
        box-sizing: content-box;
    }
    .swift-btn input[type='checkbox']:checked + label::after {

        display: inline-block;
        color: #fff;
        text-indent: -25px;
    }
    .res-password {
        float: right;
        font-size: .5rem;
        margin-right: .3rem;
    }
    .res-password a {
        color: #3b95e9;
    }
    .btn {
        margin: 0 .5rem 1rem;
    }
    .button {
        display: block;
        width: 100%;
        outline: 0;
        font-size: .7rem;
        color: #fff;
        background-color: #4cd964;
        padding: .5rem 0;
        border: 1px;
        border-radius: .15rem;
        text-align: center;
    }
    .login-box {
        margin-top: 2.35rem;
    }
    .login-box li {
        padding: .6rem .8rem;
        background-color: #fff;
        border-bottom: 1px solid #f1f1f1;
    }
    .login-box li .right {
        width: 2rem;
        display: flex;
        flex-wrap: wrap;
        width: 2rem;
        justify-content: center;
    }
    .login-box li .right div {
        font-size: .55rem;
    }
    .login-box li .right div:last-child {
        color: #3b95e9;
        margin-top: .2rem;
    }
    .login-box li img {
        width: 2rem;
        margin-right: .2rem;
    }
    .login-box li input {
        font-size: .7rem;
        color: #666666;
        outline: 0;
    }
    .login-box p {
        font-size: .5rem;
        color: red;
        padding: .4rem .6rem;
        line-height: .5rem;
    }
    .top a i {
        font-size: 1rem;
    }
    .top {
        height: 1.95rem;
        line-height: 1.95rem;
        background-color: #3190e8;
        position: fixed;
        text-align: center;
        left: 0;
        right: 0;
        top: 0;
        font-size: .7rem;
        color: #ffffff;
        padding: 0 .4rem;
    }
    .top a {
        float: left;
        color: #fff;
        font-size: .5rem;
    }
    .top a i {
        padding-top: .5rem;
    }

</style>

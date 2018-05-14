<template>
    <div id="box">
        <div class="box">
            <!--上-->
            <div class="box-top">
                <span class="left" @click="user"> < </span>
                <span class="right">修改用户名</span>
            </div>
            <!--中-->
            <div class="box-m">
                <div class="box-middle">
                    <input type="text" placeholder="输入用户名" v-model="msg" :class="change_color? 'normal':'red'" ref="input1">
                    <p :class="change_color? 'normal':'red'" ref="p1">用户名只能修改一次(5-24字符之间)</p>
                </div>
                <!--下-->
                <div class="btn">
                    <button @click="dj">确认修改</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "name",
        data() {
          return {
              msg:""
          }
        },
        methods: {
            user() {
                this.$router.push({
                    path:"/user"
                })
            },
            dj() {
                //点击为空的时候的判断
                if(this.msg == ""){
                    this.$refs.input1.style.borderColor ="red"
                    this.$refs.p1.style.color = "red"
                    // this.$refs.p1.style.fontsize = "0.58rem"
                }else {
                    this.$refs.input1.style.borderColor = ""
                    this.$refs.p1.style.color = ""
                    //点击确认修改  跳转路由
                    this.$router.push({
                        path:'/user'
                    })
                }
            }
        },
        computed: {
            //输入字符判断
            change_color(){
                if(this.msg == "") {
                    return true
                }else {
                    return this.msg.search(/^[\w\W]{5,24}$/i)+1
                    // console.log( this.msg.search(/^[\w\W]{5,24}$/i)+1)
                }
            }
        }

    }
</script>

<style scoped>
    .box-m {
        width: 15.2rem;
        margin: 0 auto;
    }
/*中*/
    .box-middle {
        padding-top: .4rem;
    }
    .box-middle input {
        background: none;
        width: 15.2rem;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: .2rem .1rem;
        line-height: 1.2rem;
        font-size: .7rem;
    }
    .box-middle p {
        width: 100%;
        font-size: .4rem;
        color: #666;
        padding: .4rem 0 1rem;
    }

    /*下*/
    .btn {
        background: #3199e8;
        width: 100%;
    }
    .btn button {
        width: 100%;
        background: none;
        line-height: 2rem;
        font-size: .7rem;
        color: #fff;
        opacity: .6;
        transition: all 1s;
    }
    .red:focus{
        border-color:  red;
    }
    .red {
        color: red !important;
    }
    .normal:focus {
       border-color: #ddd;
    }
</style>

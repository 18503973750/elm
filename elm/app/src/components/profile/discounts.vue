<template>
  <div id="box">
    <div class="box">
      <!--上-->
      <div class="box-top">
        <span class="left" @click="infor"> < </span>
        <span class="right">我的优惠</span>
      </div>
      <div class="top">
        <span class="top1" @click="dianji" v-bind:class="{green:orchange}">红包</span>
        <span class="top2"  @click="dianji1" v-bind:class="{change:orchange1}">商家代金券</span>
      </div>

      <!--红包内容-->
      <div class="red_packet" v-if="orshow">
        <!--红包上-->
        <div class="middle">
          <p class="middle-l">
            <span style="color: #666">有</span>
            <span style="color: #ff5340">3</span>
            <span style="color: #666">个红包即将到期</span>
          </p>
          <p class="middle-r">
            <img :src="pic" style="width: .6rem; height: .6rem" >
            <span style="color: #3190e8" @click="explain1" >红包说明</span>
          </p>
        </div>

        <!--分享红包-->
        <ul class="list">
          <li class="list_li" v-for="list_li in lists">
            <div class="list_item">
              <div class="list_item_left">
                <span class="span1">¥</span>
                <span class="span2">{{list_li.span2}}</span>
                <span class="span3">{{list_li.span3}}</span>
                <span class="span4">{{list_li.span4}}</span>
                <p class="p1">{{list_li.p1}}</p>
              </div>
              <div class="list_item_right">
                <h4>分享红包</h4>
                <p>2017-05-23到期</p>
                <p >限收货手机号为 13681711254</p>
              </div>
              <div class="time_right">剩3日</div>
            </div>
          </li>
        </ul>

        <!--文字内容-->
        <div class="footer">
          <p >限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
        </div>

        <!--历史记录-->
        <div class="history">
          <span class="wz">查看历史红包</span>
          <span style="font-size: small; color: #666"> > </span>
        </div>

        <!--底部-->
        <div class="bottom">
          <span style="border-right: 1px solid rgb(245, 245, 245);" @click="red">兑换红包</span>
          <span @click="prize">推荐有奖</span>
        </div>
      </div>

      <!--商家代金券内容-->
      <div class="coupon" v-if="orshow1">
        <div class="coupon_top">
          <img src="@/assets/img/13.png">
          <span @click="coupon">商家代金券说明</span>
        </div>

        <div class="coupon_bottom">
          <img src="@/assets/img/14.png" alt="">
          <p class="pp1">无法使用代金券</p>
          <p class="pp2">非客户端或者客户端版本过低</p>
          <span class="pp3" @click="download">下载或升级客户端</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  import pic from "@/assets/img/3.jpg"
    export default {
        name: "discounts",
        data:function () {
          return {
            pic:pic,
            lists:[
              {span2:"1",span3:".",span4:"0",p1:"满20元可用"},
              {span2:"2",span3:".",span4:"0",p1:"满40元可用"},
              {span2:"4",span3:".",span4:"5",p1:"满30元可用"}
            ],
            orshow:true,
            orshow1:false,
            orchange:true,
            orchange1:false
          }
        },
      //创建（商家代金券）实例  (ret:是自己创建的接受对象名字）
      created(){
          if(this.$route.query.ret == true){
            //是否显示
            this.orshow = false
            this.orshow1 = true
            //是否改变颜色
            this.orchange1 = true
            this.orchange = false
          }
      },
      methods:{
        infor() {
          this.$router.push({
            path:'/infor'
          })
        },
        prize() {
          this.$router.push({
            path:'/prize'
          })
        }
        ,
        red() {
          this.$router.push({
            path:'/red'
          })
        },

        explain1() {
          this.$router.push({
            path:'/explain1'
          })
        },

      // 点击红包
        dianji(){
          this.orshow = true
          this.orshow1 = false
          this.orchange = true
          this.orchange1 = false
        },
      //  点击商家代金券
        dianji1() {
          this.orshow = false
          this.orshow1 = true
          this.orchange1 = true
          this.orchange = false
        },


      //  跳转代金券说明
        coupon() {
          this.$router.push({
            path:'/coupon'
          })
        },
        download() {
          this.$router.push({
            path:'/download'
          })
        }
      }
    }
</script>

<style scoped>
  #box {
    width: 375px;
    height: 667px;
    background-color: #f5f5f5;
  }

  .box {
    width: 100%;
  }
  /*上*/
  .box-top {
    width: 375px;
    height: 1.95rem;
    background-color: #3190e8;
    border-bottom: 1px solid #fff ;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /*上*/
  .box-top {
    width: 375px;
    height: 1.95rem;
    background-color: #3190e8;
    border-bottom: 1px solid #fff ;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left {
    display: inline-block;
    font-size: 1.2rem;
    line-height: 2.2rem;
    color: white;
    position: absolute;
    left: 10px;
  }

  .right {
    font-size: 0.8rem;
    color: #fff;
    font-weight: 700;
  }

  /*top*/
  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 2rem;
    background-color: #fff;
  }
  .top1 {
    padding-bottom:.3rem;
    color: #333;
  }
  .top2{
    font-size: .65rem;
    color: #333;
    padding-bottom: .2rem;
  }

  /*middle*/
  .middle {
    display: flex;
    justify-content: space-between;
    font-size: .5rem;
    line-height: 2rem;
    padding: 0 .7rem;
  }

  /*红包*/
  .list {
    width: 14.87rem;
    margin-left: .7rem;
  }

  .list_li{
    width: 100%;
    height: 4.218rem;
    background: #fff;
    /*background-size: .5rem .2rem;*/
    margin-bottom: .5rem;
    border-radius: .25rem;
  }

  .list_item {
    display: flex;
    justify-content: space-between;
    padding: 1rem .5rem .8rem;
  }
  /*左*/
  .list_item_left {
    font-size: 0;
    border-right: .025rem dotted #ccc;
    flex: 1;
  }

  .list_item_right {
    flex: 2;
    margin-left: 1.5rem;
  }
  .span1,.span2,.span3,.span4 {
    color: #ff5340;
  }
  .span1 {
    font-size: .75rem;
    font-weight: 700;
  }
  .span2 {
    font-size: 1.5rem;
  }
  .span3,.span4 {
    font-size: .8rem;
    font-weight: 700;
  }

.p1 {
  font-size: .4rem;
  color: #999;
}

  /*中*/
  h4 {
    font-size: .7rem;
    color: #666;
    margin-left: -.7rem;
  }
.list_item_right p {
  margin-left: -.7rem;
  font-size: .4rem;
  color: #999;
}

  .time_right {
    font-size: .75rem;
    color: #ff5340;
  }

.footer {
  font-size: .4rem;
  color: #999;
  margin-left: 1.5rem;
}
/*历史记录*/
  .history {
    margin:1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wz {
    font-size: .5rem;
    color: #999;
    margin-right: .2rem;
  }

/*底部*/
  .bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    display: flex;
  }

  .bottom span {
    flex: 1;
    line-height: 2rem;
    text-align: center;
    font-size: .7rem;
    color: #555;
  }

  /*代金券页面代码*/
  .coupon_top {
    margin-left: 11rem;
    margin-top: .5rem;
  }
  .coupon_top img {
    width: .6rem;
    height: .6rem;
    margin-right: .25rem;
  }

  .coupon_top span {
    color: #3190e8;
    font-size: .5rem;
  }

  .coupon_bottom img {
    width: 6rem;
    height: 3.4rem;
  }

  .coupon_bottom {
    text-align: center;
    margin-top: 4rem;
  }
  .pp1 {
    font-size: .7rem;
    color: #666;
    margin-top: .4rem;
  }
  .pp2 {
    font-size: .5rem;
    color: #999;
    margin-top: .3rem;
    margin-bottom: 1rem;
  }
  .pp3 {
    background-color: #56d176;
    font-size: .65rem;
    color: #fff;
    padding: .3rem;
    border-radius: .15rem;
  }

  .green {
    color: #3190e8;
    border-bottom:.1rem solid #3190e8;
  }

  .change {
    color: #3190e8;
    border-bottom:.1rem solid #3190e8;
  }
</style>

<template>
  <div class="head">
    <ul>
      <li v-for="message in messages">
          <router-link :to="message.to">
              <img :src="messages.pic" alt="">
              <p>{{message.name}}</p>

          </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
  import imgs from '../../img/2.png'
  export default {
    name: "Show",
    data: function () {
      return {

        messages: [{name: '外卖',to:'/',pic:imgs}, {name: '搜索',to:'/search',pic:imgs}, {name: '订单',to:'/order',pic:imgs}, {name: '我的',to:'/profile',pic:imgs}]
      }
    }

  }
</script>


<style scoped>
ul {
    height: 1.95rem;
    border-top: 1px gainsboro solid;
    display: flex;

}
ul li {
    flex: 1;
    flex-direction: column;
    align-items: center;
    display: flex;
    text-align: center;
}
ul li a {
    display: block;
}
ul li a p {
    font-size: .56rem;

}
.head{
    position: fixed;
    bottom: 0px;
    left: 0;
    right: 0;


}



</style>

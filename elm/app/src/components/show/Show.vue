<template>
  <div>
    <ul>
      <li v-for="message in messages">
          <router-link :to="message.to">
              <p>{{message.name}}</p>
          </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Show",
    data: function () {
      return {

        messages: [{name: '外卖',to:'/'}, {name: '搜索',to:'/search'}, {name: '订单',to:'/order'}, {name: '我的',to:'/profile'}]
      }
    }

  }
</script>

<style scoped>

</style>

<template>
    <div class="head">
        <ul>
            <li v-for="message in messages" >
                <router-link :to="message.to">
                    <span v-html="message.pic"></span>
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
      messages: [
        {
            name: '外卖',
            to:'/waimai',
            pic:'<i class=\"el-icon-location\"></i>'
        },
        {
            name: '搜索',
            to:'/search',
            pic:"<i class=\"el-icon-view\"></i>"
        },
        {
            name: '订单',
            to:'/order',
            pic:'<i class=\"el-icon-tickets\"></i>'
        },
        {
            name: '我的',
            to:'/profile',
            pic:'<i class=\"el-icon-bell\"></i>'
        }
      ]
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
    color: #333;
    margin-top: .2rem;
}
.router-link-active {
    color: #3190e8;
}
ul li a span{
    font-size: .8rem;

}   

ul li a p {
    font-size: .45rem;
    color: #666;

}
.head{
  position: fixed;
  bottom:0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 1;
}




</style>

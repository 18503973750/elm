<template>
	<transition name="router-slid">
		<div class="box">
			<header class="topBar">
				<router-link to="/confirmOrder/chooseAddress/addAddress"><i class="el-icon-arrow-left left"></i></router-link>
				<span>搜索</span>
			</header>				
		
			<form class="search_form">
			    <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="searchTxt">
			    <span class="button" @click="search">搜索</span>
			</form>
	        <div class="search-history">
	            <ul>
	                <li v-for="(item,index) in list" @click="addListName(index)">
                        <h4>{{ item.name }}</h4>
                        <div>{{ item.address }}</div>
	                </li>
	            </ul>
	        </div>
			<div class="empty_tips" v-show="tips">
			    <p>找不到地址？</p>
			    <p>尝试输入小区、写字楼或学校名</p>
			    <p>详细地址（如门牌号等）可稍后输入哦</p>
			</div>
		</div>
	</transition>
</template>

<script>

	export default {
		name: 'searchAddress',
		data () {
			return {
				list: '',
				searchTxt: '',
				tips: true,
				addIndex: ''
			}
		},
		created () {
    					
		},
		methods: {
			search () {
				this.tips = false;
                //搜索
                this.$http.get(`http://cangdu.org:8001/v1/pois?city_id=32&keyword=${this.searchTxt}&type=search`).then((response) => {
                    this.list = response.data;
                });
            },
            addListName (index) {
            	this.addIndex = index;
            	this.$router.push({
	            	name: 'addAddress',
	            	params: {
	            		addList: this.list,
	            		addId: this.addIndex
	            	}
	            })	
            }
            		
		}
	}
</script>

<style scoped>
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

.box {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0rem;
	background-color: #fff;
}
.search_form {
	display:-webkit-box;
	display:-webkit-flex;
	display:-ms-flexbox;
	display:flex;
	padding:.7rem;
	margin-top: 2.35rem;
}
.search_form input {
	font-size:.65rem;
	color:#999;
	-webkit-box-flex:4;
	-webkit-flex:4;
	-ms-flex:4;
	flex:4;
	background-color:#f1f1f1;
	margin-right:.6rem;
	height:1.5rem;
	border-radius:0.15rem;
	padding:0 .4rem
}
.search_form .button {
	-webkit-box-flex:1;
	-webkit-flex:1;
	-ms-flex:1;
	flex:1;
	font-size:.65rem;
	color:#fff;
	background-color:#3190e8;
	border-radius:0.15rem;
	text-align: center;
	line-height: 1.5rem;
}
.address_list {
	padding:.7rem
}
.address_list li {
	padding:.7rem 0;
	border-bottom:0.025rem solid #f5f5f5;
	line-height:1rem
}
.address_list li h4 {
	font-size:.75rem;
	color:#555
}
.address_list li p {
	font-size:.65rem;
	color:#999
}
.empty_tips {
	position:absolute;
	top:50%;
	left:50%;
	-webkit-transform:translate(-50%,-50%);
	-ms-transform:translate(-50%,-50%);
	transform:translate(-50%,-50%);
	width:100%
}
.empty_tips p {
	font-size:.5rem;
	color:#aaa;
	line-height:.7rem;
	text-align:center
}

</style>
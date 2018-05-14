<template>
	<transition name="router-slid">
		<div>
			<header class="topBar">
				<router-link to="/confirmOrder"><i class="el-icon-arrow-left left"></i></router-link>
				<span>添加地址</span>
			</header>	
			<div class="add-box mt3">
				<ul>
					<li>
						<p>联系人</p>
						<p>
							<input type="" name="" placeholder="你的名字" class="bdt" v-model="name">
							<small>
								<strong v-for="(todo, index) in todos" @click="addClass(index)" :class="{green:index==current}" class="sex">
									<span ><i class="el-icon-success"></i>{{ todo.text }}</span>
								</strong>
							</small>
						</p>
					</li>
					<li>
						<p>联系电话</p>
						<p>
							<em>

								<input type="" name="" placeholder="你的手机号" v-model="phone" style="width: 89%;">
								<i class="el-icon-plus" @click="sparePhone"></i>
							</em>
							<input type="" name="" placeholder="备选电话" v-show="phoneB" v-model="phone2">
						</p>
					</li>
					<li>
						<p>送餐地址</p>
						<p>
							<input type="" name="" placeholder="小区/写字楼/学校等" v-model="addAddress">
							<input type="" name="" placeholder="详细地址（如门牌号等）" v-model="addAddress2">
						</p>
					</li>
					<li>
						<p>标签</p>
						<p><input type="" name="" placeholder="无/家/学校/公司" v-model="tag"></p>
					</li>
				</ul>
			</div>
			<div class="determine" @click="btn">确定</div>

			<div class="alet_container" v-if="Txt">
				<section class="tip_text_container">
					<div class="tip_icon"><span></span> <span></span></div> 
					<p class="tip_text">{{ Txt }}</p> 
					<div class="confrim" @click="ok">确认</div>
				</section>
			</div>
			<Loading></Loading>	
		</div>		
	</transition>
</template>

<script>
import Loading from '../components/loading'
export default {
	name: "addAddress",
	components: {
		Loading
	},
	data () {
		return {
			current: 0,
			todos: [
			{text: '先生'},
			{text: '女士'}				
			],
			mask: false,	
			name: "",
			phone: "",
			phone2: "",
			addAddress: "",
			addAddress2: "",
			tag: "",
			Txt: "",
			phoneB: false

		}
	},
	methods: {
		addClass: function(index) {
			this.current = index;
		},
			//判断表单为空
			btn () {
				if(this.name) {
					if(this.phone) {
						if (this.addAddress) {
							if (this.addAddress2) {
								if (this.tag) {
									this.Txt = "添加成功"
								}else {
									this.Txt = "请输入标签"
								}
							}else {
								this.Txt = "请输入详细地址"
							}
						}else {
							this.Txt = "请输入送餐地址"	
						}
					}else {
						this.Txt = "请输入手机号"
					}
				} else{
					this.Txt = "请输入姓名"				
				}
				
			},
			//关闭弹框按钮
			ok() {
				this.Txt = ""
			},
			//备用电话
			sparePhone () {
				this.phoneB = true
			}
		}
	}	
	</script>

	<style scoped>
	.green i{
		color: #4cd964;
	}
	.add-box {
		margin-top: 2.35rem;
		background-color: #fff;
		padding: 0 .7rem;
	}
	.add-box li {
		display: flex;
		font-size: .7rem;
		border-bottom: .025rem solid #f5f5f5;	
	}
	.add-box li p em {
		display: block;
	}
	.add-box li p em i {
		font-size: 20px;
		color: #3190e8;
	}
	.add-box li p em input {
		
	}
	.add-box li p:first-child {
		flex: 2;
		line-height: 2.5rem;
	}
	.add-box li p:last-child {
		flex: 5;
		color: #999;
	}	
	.add-box li input {
		width: 100%;
		height: 2.5rem;
		font-size: .7rem;
	}
	.add-box li small {
		display: block;
		height: 2.5rem;
		line-height: 2.5rem;
	}
	.add-box li strong {
		color: #333;
		height: 2.5rem;
		font-size: .7rem;
		margin-right: .8rem;
	}
	.add-box li strong i {
		margin-right: .3rem;
		font-size: .8rem;
	}
	.bdt {
		border-bottom: .025rem solid #f5f5f5;
	}
	.determine {
		background-color: #4cd964;
		font-size: .7rem;
		color: #fff;
		text-align: center;
		margin: 0 .7rem;
		line-height: 1.8rem;
		border-radius: .2rem;
		margin-top: .6rem;
	}
	@-webkit-keyframes tipMove{
		0%{-webkit-transform:scale(1);transform:scale(1)
		}
		35%{-webkit-transform:scale(0.8);transform:scale(0.8)
		}
		70%{-webkit-transform:scale(1.1);transform:scale(1.1)
		}
		100%{-webkit-transform:scale(1);transform:scale(1)
		}
	}
	@keyframes tipMove{
		0%{-webkit-transform:scale(1);transform:scale(1)
		}
		35%{-webkit-transform:scale(0.8);transform:scale(0.8)
		}
		70%{-webkit-transform:scale(1.1);transform:scale(1.1)
		}
		100%{-webkit-transform:scale(1);transform:scale(1)
		}
	}
	.alet_container{position:fixed;top:0;left:0;right:0;bottom:0;background-color: rgba(0,0,0,.3);}
	.tip_text_container{position:absolute;top:50%;left:50%;margin-top:-6rem;margin-left:-6rem;width:12rem;-webkit-animation:tipMove .4s;animation:tipMove .4s;background-color:#fff;border:1px;padding-top:.6rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px;border-radius:0.25rem
	}
	.tip_text_container .tip_icon{width:3rem;height:3rem;border:0.15rem solid #f8cb86;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column
	}
	.tip_text_container .tip_icon span:nth-of-type(1){width:.12rem;height:1.5rem;background-color:#f8cb86
	}
	.tip_text_container .tip_icon span:nth-of-type(2){width:.2rem;height:.2rem;border:1px;border-radius:50%;margin-top:.2rem;background-color:#f8cb86
	}
	.tip_text_container .tip_text{font-size:.7rem;color:#333;line-height:.9rem;text-align:center;margin-top:.8rem;padding:0 .4rem
	}
	.tip_text_container .confrim{font-size:.8rem;color:#fff;font-weight:bold;margin-top:.8rem;background-color:#4cd964;width:100%;text-align:center;line-height:1.8rem;border:1px;border-bottom-left-radius:0.25rem;border-bottom-right-radius:0.25rem
	}

	</style>









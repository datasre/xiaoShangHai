<template>
	<view class="">
		<view class="content">
			<scroll-view class="tabBarIndex" scroll-x>
				<block v-for="(tab,index) in tabBars" :key="tab.id">
					<view 
						class="tabBarList" 
						:class="{'active' : tabIndex==index}"
						@click = "tabtap(index)"
					>
						{{tab.name}} {{tab.num?tab.num:""}}
					<view class="swiper-tab-line"></view>
					</view>
				</block>
			</scroll-view>
		</view>
		<view class="">
			<view>
				<image class="uni-view-video" :style="{height:0.7*swiperheight+'px'}" src="../../static/video/1.png" mode=""></image>
			</view>
			<view class="msg">
				<view class="">
					
				</view>
				<view class="">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex:0,// 选中的
				swiperheight:500,
				tabBars: [
					{ name : "推荐",id: "recommend"},
					{ name : "附近",id: "nearby"},
					{ name : "新人",id: "newPeople"},
					{ name : "健身达人",id: "Fitness"}
				],
				newsList:[]//每页里面的数据,调用接口来获取数据
			}
		},
		onLoad() {
			uni.request({
				url:'',
				data : {},
				success : (res) => {
					console.log(res.data);
				}
			}),
			uni.getSystemInfo({
				success:(res)=>{
					this.swiperheight =  res.windowHeight;
				}
			})
		},
		methods: {
			tabtap(index){
				this.tabIndex = index;
			}
		}
	}
</script>

<style>
	@import url("index.css");
</style>

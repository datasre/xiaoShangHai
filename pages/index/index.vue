<template>
	<view class="u-f-column" style="width: 100%;">
		<uniStatusBar></uniStatusBar>
		<view class="u-f-column">
			<swiperTabHead :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap(index)"></swiperTabHead>
			<view class="index-viedo">
				<image src="../../static/video/1.png" mode="widthFix" lazy-load></image>
			</view>
			<view class="u-f-ac index-introduce">
				<view class="u-f-column">
					<view>朴智恩</view>
					<view>21岁 上海市 天蝎座</view>
				</view>
				<button type="default">加好友</button>
			</view>
			<view class="u-f index-zan">
				<image src="../../static/video/1.png" mode="widthFix" lazy-load></image>
				<view>以获得68个赞，收到180</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniStatusBar from "../../components/uni-status-bar/uni-status-bar.vue";
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	export default {
		data() {
			return {
				tabIndex:1,// 选中的
				swiperheight:500,
				tabBars: [
					{ name : "推荐",id: "recommend"},
					{ name : "附近",id: "nearby"},
					{ name : "新人",id: "newPeople"},
					{ name : "健身达人",id: "Fitness"}
				],
				newsList:[
					{
						loadtext:'上拉加载更多',
						list:[
							{
								
							}
						]
					}
				]//每页里面的数据,调用接口来获取数据
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
				console.log(index);
				this.tabIndex = index;
			}
		},
		components:{
			uniStatusBar,
			swiperTabHead
		}
	}
</script>

<style>
	@import url("index.css");
</style>

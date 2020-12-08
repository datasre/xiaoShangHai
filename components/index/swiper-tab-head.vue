<template>
	<view class="uni-tab-bar">
		<scroll-view scroll-x class="uni-swiper-tab">
			<block v-for="(tab,index) in tabBars" :key="tab.id" :style="scrollStyle">
				<view class="swiper-tab-list" :class="{active:tabIndex===index}" @tap="tabtap(index)">
					<view>{{tab.name}}</view>
					<view class="swiper-tab-line"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		props:{
			tabBars: Array,
			tabIndex: Number,
			scrollStyle:{
				type:String,
				default:""
			},
			scrollItemStyle:{
				type:String,
				default:""
			}
		},
		methods:{
			// tabbar点击事件
			tabtap(index){
				this.$emit('tabtap',index)
			}
		}
	}
</script>

<style scoped>
	.uni-swiper-tab{
		border-bottom: 1px solid #eeeeee;
	}
	.swiper-tab-list{
		color: #ffffff;
		font-weight: bold;
	}
	.active>view:nth-child(1){
		font-size: 45upx;
		color: #FEDE33;
	}
	.active .swiper-tab-line{
		border-bottom: 6upx solid #FEDE33;
		width: 70upx;
		margin: auto;
		border-top: 6upx solid #FEDE33;
		border-radius: 20upx;
	}
</style>

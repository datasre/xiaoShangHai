<template>
	<view class="index-list animated fadeInLeft fast">
		<view class="index-list1 u-f-ac u-f-jsb">
			<view class="u-f-ac">
				<image 
					:src="item.userpic" 
					mode="widthFix" 
					lazy-load
				></image>
				{{item.username}}
			</view>
			<view class="u-f-ac" v-show="!item.isguanzhu" @tap="guanzhu">
				<view class="icon iconfont icon-zengjia"></view>关注
			</view>
		</view>
		
		<view class="index-list2" @tap="opendetail">{{item.title}}</view>
		
		<view class="index-list3 u-f-ajc" @tap="opendetail">
			<!-- 图片 -->
			<image 
				:src="item.titlepic"
				mode="widthFix"
				lazy-load></image>
			<!-- 视频 -->
			<template v-if="item.type==='vodeo'">
				<view class="index-list-play icon iconfont icon-bofang"></view>
				<view class="index-list-playinfo">
					{{item.playnum}} 次播放 {{item.long}}
				</view>
			</template>
		</view>
		
		<view class="index-list4 u-f-ac u-f-jsb">
			<view class="u-f-ac">
				<view class="u-f-ac" :class="{'active':(item.infonum.index===1)}" @tap="caozuo('ding')"> 
					<view class="icon iconfont icon-icon_xiaolian-mian"></view>{{item.infonum.ding}}
				</view>
				<view class="u-f-ac" :class="{'active':(item.infonum.index===2)}" @tap="caozuo('cai')">
					<view class="icon iconfont icon-kulian"></view>{{item.infonum.cai}}
				</view>
			</view>
			<view class="u-f-ac">
				<view class="u-f-ac"> 
					<view class="icon iconfont icon-pinglun1"></view>{{item.comment}}
				</view>
				<view class="u-f-ac">
					<view class="icon iconfont icon-zhuanfa"></view>{{item.share}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		},
		methods:{
			// 关注
			guanzhu(){
				this.item.isguanzhu=true;
				uni.showToast({
					title:'关注成功',
				});
			},
			// 顶踩操作
			caozuo(type){
				switch (type){
					case 'ding':
						if(this.item.infonum.index === 1){
							return;
						}
						this.item.infonum.ding++;
						if(this.item.infonum.index === 2){
							this.item.infonum.cai--;
						}
						this.item.infonum.index = 1;
						break;
					case 'cai':
						if(this.item.infonum.index === 2){
							return;
						}
						this.item.infonum.cai++;
						if(this.item.infonum.index === 1){
							this.item.infonum.ding--;
						}
						this.item.infonum.index = 2;
						break;
				}
			},
			// 进入详情页
			opendetail(){
				console.log("进入详情页");
			}
		}
	}
</script>

<style scoped>
.index-list{
		padding: 20upx;
		border-bottom: 1upx solid #EFEFEF;
	}

	.index-list1>view:first-child{
		color: #999999;
	}
	.index-list1>view:first-child image{
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
		margin-right: 10upx;
	}
	.index-list1>view:last-child{
		background-color: #F4F4F4;
		border-radius: 5upx;
		padding: 0 10upx;
	}
	.index-list2{
		width: 100%;
		padding-top: 15upx;
		font-size: 30upx;
	}
	.index-list3{
		position: relative;
		padding-top: 15upx;
		color: #ffffff;
	}
	.index-list3>image{
		width: 100%;
		border-radius: 20upx;
	}
	.index-list-play{
		position: absolute;
		font-size: 140upx;
	}
	.index-list-playinfo{
		position: absolute;
		background-color: rgba(51,51,51,0.72);
		bottom: 8upx;
		right: 8upx;
		border-radius: 40upx;
		font-size: 22upx;
		padding: 0 12upx;
	}
	.index-list4{
		padding: 15upx 0;
		color: #999;
	}
	.index-list4>view>view>view,.index-list4>view>view:first-child{
		margin-right: 10upx;
	}
	.index-list4 .active{
		color: #FFB400;
	}
</style>

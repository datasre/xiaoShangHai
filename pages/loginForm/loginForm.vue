<template>
	<view class="register">
		<view class="textFlex">
			<text>欢迎回来</text>
			<text>小上海</text>
		</view>
		<form @submit="login" class="registerForm" >
			<view class="phoneNumberMessage">
				<text>{{phoneNumber}}</text>
			</view>
			<button form-type="submit" style="background-color: #F0AD4E; margin-top: 30upx;">手机号一键登录</button>
			<view class="otherLogin">
				<text>其他登录方式</text>
			</view>
			<view class="iconText">
				<text class="iconfont icon-mac" @click="macLogin"></text>
				<text class="iconfont icon-QQ" @click="qqLogin"></text>
				<text class="iconfont icon-weixin" @click="weixinLogin"></text>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneNumber:'13339885639',
				providerList:[]
			}
		},
		onLoad() {
			uni.request({
				url:"",
				data:{
					
				},
				success:function(res){
					console.log(res);
					// 此处需要初始化phoneNumber,并且对phoneNumber进行处理
				}
			}),
			//  获取
			uni.getProvider({
				service:'oauth',
				success: (result) => {
					console.log(result);
					this.providerList = result.provider.map((value) => {
						let providerName = '';
						switch(value){
							case 'weixin':
								providerName = '微信登录';
								break;
							case 'qq':
								providerName = 'QQ登录';
								break;
							case 'sinaweibo':
								providerName = '新浪微博登录'
								break;
							case 'xiaomi':
								providerName = '小米登录'
								break;
							case 'alipay':
								providerName = '支付宝登录'
								break;
							case 'baidu':
								providerName = '百度登录'
								break;
							case 'toutiao':
								providerName = '头条登录'
								break;
							case 'apple':
								providerName = '苹果登录'
								break;
						}
						return {
							name: providerName,
							id: value
						}
					});
				},
				fail: (error) => {
					console.log('获取登录通道失败',error);
				}
			})
		},
		methods: {
			login(e){
				console.log(e);
			},
			// 苹果登录第三方接口
			macLogin(){
				
			},
			// qq登录第三方接口
			qqLogin(){
				
			},
			// 微信登录第三方接口
			weixinLogin(){
				
			}
		}
	}
</script>

<style>
	.register{
		position: relative;
		left: 0;
		bottom: -740upx;
		display:flex ;
		flex-direction:column;
		flex-wrap: nowrap;
		justify-content: space-around;
		background-color: #fff;
		border: 1upx #fff;
		border-radius: 15%;
		height: 800upx;
	}
	.phoneNumberMessage{
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-wrap:nowrap;
		align-items:center;
		margin-bottom: 100upx;
		font-size: 40upx;
	}
	.textFlex{
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: space-between;
		height: 20%;
		padding-left: 80upx;
		font-weight: bold;
		font-size: 30px;
	}
	.registerForm{
		display: flex;
		flex-direction: column;
		flex-wrap:nowrap;
		align-items:center;
		justify-content: space-around;
		width: 100%;
		height: 55%;
		font-weight: bold;
		font-size: 13upx;
	}
	.otherLogin{
		color: #ccc;
		margin-top: 30upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.iconText{
		margin-top: 30upx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.iconfont{
		font-size: 50upx;
	}
	.icon-weixin{
		color: #4CD964;
	}
	page{
		height: 100%;
		background: url(../../static/img/longin.jpg);
	}
</style>

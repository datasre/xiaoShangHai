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
				// 获取服务商
				uni.getProvider({
				  service: 'oauth',
				  success: function (res) {
				    console.log(res.provider);
				      if (~res.provider.indexOf('qq')) {
				      uni.login({
				        provider: 'qq',
				        success: function (res) {
				          console.log(JSON.stringify(res));
				          // 此时可以获取到code、openid、unionid、
				          // 获取用户信息	
				          uni.getUserInfo({
				            provider: 'qq',
				      　　   success: function (infoRes) {
				              console.log(JSON.stringify(infoRes));
				          　　 console.log('用户昵称为：' + infoRes.userInfo.nickName);
				            }
				          });
				        }
				      });
				    }
				  }
				});
			},
			// 微信登录第三方接口
			weixinLogin(){
				// 获取服务商
				uni.getProvider({
				  service: 'oauth',
				  success: function (res) {
				    console.log(res.provider)
				      if (~res.provider.indexOf('weixin')) {
				      uni.login({
				        provider: 'weixin',
				        success: function (res) {
				          console.log(JSON.stringify(res));
				          // 此时可以获取到code、openid、unionid、
				          // 获取用户信息                                
				          uni.getUserInfo({
				            provider: 'weixin',
				      　　   success: function (infoRes) {
				              console.log(JSON.stringify(infoRes));
				          　　 console.log('用户昵称为：' + infoRes.userInfo.nickName);
				            }
				          });
				        }
				      });
				    }
				  }
				});
			}
		}
	}
</script>

<style>

</style>

<template>
	<view class="login-page">
		<button class="login-button1" type="primary" @click="goLogin">登录</button>
		<button class="login-button2" type="default" @click="goRegister">注册</button>
	</view>
</template>

<script>
	// 登录模块
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			// 跳转登录表单
			goLogin(){
				uni.navigateTo({
				    url: '../loginForm/loginForm'
				});
			},
			// 跳转到注册表单
			goRegister(){
				uni.navigateTo({
				    url: '../register/register'
				});
			}
		}
	}
</script>

<style>
	.login-page{
		position: relative;
	}
	.login-button1{
		width: 80%;
		position: flex;
		text-align: center;
		top:1400upx;
	}
	.login-button2{
		text-align: center;
		top:1180upx;
		position: flex;
		width: 80%;
		background-color: #F0AD4E;
	}
	page{
		height: 100%;
		background: url(../../static/img/longin.jpg);
	}
</style>

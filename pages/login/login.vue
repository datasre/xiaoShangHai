<template>
	<view class="login-page">
		<button class="login-button1" type="primary">登录</button>
		<button class="login-button2" type="default">注册</button>
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
	}
</style>

<template>
	<view>
		<template>
		   <view class="register">
		   	   <view class="portrait-box">
		   			<text style="font-weight:bold;font-size: 70upx;">新用户</text>
		   			<view class="portraitImgBox">
		   				<image 
							class="portrait"  
							style="width: 100upx; height: 100upx;" 
							:src="headPortrait"
							@click="upload"
						>
						</image>
						<text style="font-size: 10upx; margin-top: 30upx;">上传头像</text>
		   			</view>
		   	   </view>
		   		<form @submit="handleRegisterFormSubmit" class="registerForm">
		   			<label for="phoneNumber">
		   				手机号码
		   				<input class="input-border-bottom" id="phoneNumber" name="phoneNumber" type="number" v-model="phoneNumber" />
		   			</label>
		   			<label for="nickName">
		   				昵称
		   				<input class="input-border-bottom" id="nickName" name="nickName" type="text" v-model="nickName" />
		   			</label>
		   			<label for="passWord">
		   				输入密码
		   				<input class="input-border-bottom" id="passWord" name="passWord" type="text" v-model="passWord" />
		   			</label>
		   			<button form-type="submit" style="margin-top: 100upx; background-color: #F0AD4E;">注册</button>
		   		</form>
		   </view>
		</template>
	</view>
</template>

<script>
	// 注册模块
	export default {
		data() {
			return {
				headPortrait:'../../static/img/photoLogo.png',
				phoneNumber:'',
				nickName:'',
				passWord:''
			}
		},
		methods: {
			// 表单提交
			handleRegisterFormSubmit(e){
				console.log(e.detail.value);
				console.log()
				uni.request({
					url:'', //提交表单时候请求的接口
					data: {
						
					},
					success: (res) => {
						
					}
				})
			},
			error(e){
				console.log(e.detail);	
			},
			// 头像上传
			upload(){
				uni.chooseImage({
				    count: 1, //最多可以选择的图片张数
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    success: function (res) {
						// 返回图片的本地文件路径
				        // console.log(JSON.stringify(res.tempFilePaths));
						this.headPortrait=res.tempFilePaths[0];
						console.log(this.headPortrait);
				    }
				});
			}
		}
	}
</script>

<style>
	@import "register.css";
</style>

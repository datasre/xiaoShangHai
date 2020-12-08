<script>
	export default {
		onLaunch: function() { //APP 初始化完成
			uni.onTabBarMidButtonTap(()=>{
		        // 这里可以根据 个人需求 做点击处理，
		        // 本人需进行页面跳转。
				uni.navigateTo({
					url:'pages/huaban/huaban'
				})
			})
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 引入官方css库 */
	@import './common/uni.css';
	/* 引入自定义图标库 */
	@import './common/icon.css';
	/* 引入动画库 */
	@import './common/animate.css';
	/* 公共样式 */
	@import './common/common.css';
</style>

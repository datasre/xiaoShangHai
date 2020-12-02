import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const stroe = new Vuex.Store({
	state:{
		// 登录标识
		hasLogin: false,
		loginProvider: "",
		openid: null,
	},
	mutations:{
		login(state,provider){
			state.hasLogin = true;
			state.loginProvider = provider;
		},
		logout(state){
			state.hasLogin = true;
			state.loginProvider = null;
		}
	},
	actions:{
		getUserOpenId: async function({
			commit,
			state
		}){
			return await new Promise((resolve, reject) => {
				if(state.openid){
					resolve(state.openid);
				}else{
					uni.login({
						success: (data) => {
							commit('login');
							setTimeout(() => {
								const openid = '123456789';
									console.log('uni.request mock openid' + openid + ']');
									commit('setOpenid',openid);
									resolve(openid)
							},1000);
						},
						fail: (err) => {
							console.log('uni.login 接口调用失败，将无法正常使用开发接口等服务',err);
							reject(err);
						}
					})
				}
			})
		}
	}
})

export default stroe;
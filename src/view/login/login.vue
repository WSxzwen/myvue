<template>
	<div class="login-page">
		<div class="input-wrap">登录</div>
		<div class="input-wrap">用户名：<input v-model="name"/> </div>
		<div class="input-wrap">密码： <input v-model="pwd"/> </div>
		<button @click="submit">登录</button> <button @click="toRegister">注册</button> <button @click="$router.push({name: 'System'})">系统</button>
		<button @click="aliyun">阿里云</button>
	
<!-- <downloader
    url="http://onyx-edu.oss-cn-shenzhen.aliyuncs.com/f0bc05fd6597f97d099efa6c8ad47efe/92e0314fc49e700206c637ec32d36199.pdf" 
    name="cc.pdf"
    ref="downloader"></downloader>
<button @click.prevent="$refs.downloader.download();">dfdf</button>	 -->
	</div>
</template>

<script>
import Downloader from '@lassehaslev/vue-downloader';
	export default {
		components: {
			Downloader
		},
		data(){
			return {
				name: '',
				pwd: ''
			}
		},
		methods: {
			submit(){
				this.$http.login({username: this.name, password: this.pwd})
				.then(res => {
					console.log(res)
					window.localStorage.setItem('authToken', res.data.token)
					this.$router.push({name: 'Meeting'})
				})
				.catch(err => {
					console.log(err)
				})
			},
			toRegister(){
				this.$router.push({name: 'Register'})
			},
			aliyun(){
				this.$router.push({name: 'Upload'})
			}
		}
	}
</script>

<style scoped>
	.input-wrap{
		padding: 10px 0;
	}
</style>
<template>
	<div>
		<div class="input-wrap">注册</div>
        <div class="input-wrap">用户名<input type="text" v-model='params.username'> </div>
		<div class="input-wrap">密码<input v-model="params.password"/> </div>
        <div class="input-wrap">性别
			<el-radio-group v-model="params.sex">
				<el-radio :label="'male'">男</el-radio>
				<el-radio :label="'female'">女</el-radio>
			</el-radio-group>			
		</div>
        <div class="input-wrap">出生年月    
            <el-date-picker
                v-model="params.birthday"
                type="date"
                placeholder="请选择日期">
                </el-date-picker> 
        </div>
        <div class="input-wrap">个人简介<input type="textarea" v-model="params.abstract"></div>		
		<button @click="register">注册</button>
		<button @click="$router.push({name: 'Login'})">返回</button>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				params: {
					username: '',
					password: '',
					sex: '',
					birthday: '',
					abstract: ''
				}	
			}
		},
		methods: {
			register(){
				this.$http.register(this.params)
				.then(res => {
					console.log(res)
					this.$router.push({name: 'Login'})
				})
				.catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
	.input-wrap{
		padding: 10px 0;
	}	
</style>
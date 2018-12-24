<template>
    <div>
        <p>添加和编辑</p>
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
        <div class="input-wrap">部门<input v-model="params.userInfo.department"/> </div>
        <div class="input-wrap">职务<input v-model="params.userInfo.position"/> </div>
        <div class="input-wrap">编号<input type="number" v-model="params.userInfo.number"/> </div>
        <div class="input-wrap">个人简介<input type="textarea" v-model="params.abstract"></div>
        <button @click="save">保存</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            params: {
                username: '',
                password: '',
                sex: '',
                birthday: '',
                abstract: '',
                userInfo: {
                    department: '',
                    position: '',
                    number: 0
                }
            }
        }
    },
    methods: {
        save(){
            this.$route.query.editId ? this.edit() : this.create()
        },
        create(){
            this.$http.register(this.params)
            .then(res => {
                this.$router.push({name: 'Users'})
            })
            .catch(err => {
                console.log(err)
            })
        },
        edit(){
            this.$http.editUsers(this.$route.query.editId, this.params)
            .then(res => {
                this.$router.push({name: 'Users'})
            })
            .catch(err => {
                console.log(err)
            })            
        },
        getSingleData(){
            this.$http.getSingleUsers(this.$route.query.editId)
            .then(res => {
                this.params = res.data
            })
            .catch(err => {
                console.log(err)
            })            
        }        
    },
    created(){
        if(!this.$route.query.editId) return
        this.getSingleData()
    }
}
</script>

<style scoped>
	.input-wrap{
		padding: 10px 0;
	}    
</style>


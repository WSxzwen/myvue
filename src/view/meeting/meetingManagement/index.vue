<template>
    <div>
        <p>添加和编辑</p>
        <p>主题<input type="text" v-model='params.theme'> </p>
        <p>地址<input type="text" v-model="params.address"> </p>
        <p>创建人<input type="text" v-model="params.creator"> </p>
        <p>内容<input type="text" v-model="params.content"> </p>
        <button @click="save">保存</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            params: {
                theme: '',
                address: '',
                content: '',
                creator: ''
            }
        }
    },
    methods: {
        save(){
            this.$route.query.editId ? this.edit() : this.create()
        },
        create(){
            this.params.host = ['5bc5b5823f7f32e368e34c69', '5bc5b5543f7f32e368e34c68', '5bd434fbd1cc0e89cde5bc19']
            this.$http.createMeeting(this.params)
            .then(res => {
                this.$router.push({name: 'Meeting'})
            })
            .catch(err => {
                console.log(err)
            })
        },
        edit(){
            this.$http.editMeeting(this.$route.query.editId, this.params)
            .then(res => {
                this.$router.push({name: 'Meeting'})
            })
            .catch(err => {
                console.log(err)
            })            
        },
        getSingleMeeting(){
            this.$http.getSingleMeeting(this.$route.query.editId)
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
        this.getSingleMeeting()
    }
}
</script>

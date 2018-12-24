<template>
    <div>
        <p>添加和编辑</p>
        <p>设备名字<input type="text" v-model='params.name'> </p>
        <p>设备型号<input type="text" v-model="params.type"> </p>
        <p>设备尺寸<input type="text" v-model="params.size"> </p>
        <p>设备描述<input type="text" v-model="params.content"> </p>
        <button @click="save">保存</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            params: {
                name: '',
                type: '',
                content: '',
                size: ''
            }
        }
    },
    methods: {
        save(){
            this.$route.query.editId ? this.edit() : this.create()
        },
        create(){
            this.$http.createDevice(this.params)
            .then(res => {
                this.$router.push({name: 'Device'})
            })
            .catch(err => {
                console.log(err)
            })
        },
        edit(){
            this.$http.editDevice(this.$route.query.editId, this.params)
            .then(res => {
                this.$router.push({name: 'Device'})
            })
            .catch(err => {
                console.log(err)
            })            
        },
        getSingleData(){
            this.$http.getSingleDevice(this.$route.query.editId)
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

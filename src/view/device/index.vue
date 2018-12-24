<template>
    <div>
        <p>会议</p>
        <button @click="$router.push({name: 'DeviceManagement'})">添加设备</button>
        <button @click="$router.push({name: 'Meeting'})">返回</button>
        <ul>
            <li v-for="(item, index) in listData" :key="index">
                <p>设备名：{{item.name}}</p>
                <p>设备型号：{{item.type}}</p>
                <p>设备尺寸：{{item.size}}</p>
                <p>设备描述：{{item.content}}</p>
                <button @click="del(item)">删除</button>
                <button @click="$router.push({name: 'DeviceManagement', query: {editId: item._id}})">编辑</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            listData: []
        }
    },
    methods: { 
        getPageData(){
            this.$http.device()
            .then(res => {
                console.log(res)
                this.listData = res.data
            })
            .catch(err => {
                console.log(err)
            })
        },
        del(item){
            this.$http.delDevice(item._id)
            .then(res => {
                this.getPageData()
            })
            .catch(err => {
                console.log(err)
            })            
        }
    },
    created(){
        this.getPageData()
    }
}
</script>

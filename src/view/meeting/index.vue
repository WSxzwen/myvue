<template>
    <div>
        <p>会议</p>
        <button @click="$router.push({name: 'MeetingManagement'})">添加会议</button>
        <button @click="$router.push({name: 'Users'})">人员页面</button>
        <button @click="$router.push({name: 'Device'})">设备页面</button>
        <button @click="$router.push({name: 'Login'})">首页</button>
        <ul>
            <li v-for="(item, index) in listData" :key="index">
                <p>主题：{{item.theme}}</p>
                <p>地址：{{item.address}}</p>
                <p>创建人：{{item.creator}}</p>
                <p>内容：{{item.content}}</p>
                <button @click="del(item)">删除</button>
                <button @click="$router.push({name: 'MeetingManagement', query: {editId: item._id}})">编辑</button>
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
            this.$http.meeting()
            .then(res => {
                console.log(res)
                this.listData = res.data
            })
            .catch(err => {
                console.log(err)
            })
        },
        del(item){
            this.$http.delMeeting(item._id)
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

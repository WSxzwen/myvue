<template>
    <div>
        <p>会议</p>
        <button @click="$router.push({name: 'UsersManagement'})">添加人员</button>
        <button @click="$router.push({name: 'Meeting'})">返回</button>
        <ul>
            <li v-for="(item, index) in listData" :key="index">
                <p>用户名：{{item.username}}</p>
                <p>性别：{{item.sex}}</p>
                <p>出生年月：{{item.birthday}}</p>
                <p>个人简介：{{item.abstract}}</p>
                <button @click="del(item)">删除</button>
                <button @click="$router.push({name: 'UsersManagement', query: {editId: item._id}})">编辑</button>
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
            this.$http.users()
            .then(res => {
                console.log(res)
                this.listData = res.data
            })
            .catch(err => {
                console.log(err)
            })
        },
        del(item){
            this.$http.delUsers(item._id)
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

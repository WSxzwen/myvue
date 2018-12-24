<template>
  <div class="list">
      <input type="file" @change="upload" multiple id="upload">
      <button @click="self">上传</button><button @click="uploads">开始上传</button>
      <div v-for='(item, index) in files' :key="index">
          <!-- <p>{{item.progress}}</p> -->
          <p>{{item.status}}</p>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="item.progress"></el-progress>
      </div>
        <p v-show="false">{{per}}</p>
  </div>
</template>
<script>
var co = require("co");
var OSS = require("ali-oss");
export default {
    data(){
        return {
            files: [],
            per: 0,
            autoUpload: true,
            objData: null
        }
    },
  methods: {
    upload(event) {
            // this.autoUpload = true
            for(let ele of event.target.files){
                ele.progress = 0
                ele.status = '待上传'
            }
            this.files = event.target.files

            if(this.autoUpload){
                this.begainUpload(this.files)
            }
          }, 

        //  上传
        async begainUpload(files){
            for (let file of files) {
              // 上传
              await this.uploadOss(file)
              .then(res => {
                  console.log(res, 'wwwwwwwww')
              }) 
              .catch(err => {
                  console.log(err, 'qqqqq')
              })
              console.log('=====================')
            }            
        },

        //  单个文件
        uploadOss(file){
            let _this = this
            let random_name = this.random_string(6) + '_' + new Date().getTime() + '.' + file.name.split('.').pop()
            return new Promise((resolve, reject) => {
                this.clientOss().multipartUpload(`audio/${random_name}`, file, {
                    progress(percentage, cpt) {
                        // 上传进度
                        file.status = '进行中'
                        file.progress = Number(percentage.toFixed(2))
                        // console.log(file,  '=======')
                        // console.log(percentage)
                    //   console.log(cpt)
                      _this.per = percentage
                    }
                })
                .then((results) => {
                    // 上传完成
                    // console.log(results)

                    // const url = 'https://vinter.oss-cn-shenzhen.aliyuncs.com/'+ results.name;
                    // console.log(url);
                    results.name = file.name
                    file.status = '成功'
                    file.progress =  100   
                    _this.per = 100             
                    resolve(results)
                })
                .catch((err) => {
                    // console.log(err)
                    reject(err)
                })                
            })
        },

        //  参数
        clientOss(){
            // return this.$http.aliyunSts()
            // .then(res => {
                return new OSS({
                    region: 'oss-cn-shenzhen',
                    accessKeyId: this.objData.AccessKeyId,
                    accessKeySecret: this.objData.AccessKeySecret,
                    stsToken: this.objData.SecurityToken,
                    bucket: 'onyx-edu',                    
                })
            // })
            // .catch(err => {
            //     console.log(err)
            // })
            // let client = new OSS({
            //     region: "oss-cn-shenzhen",
            //     accessKeyId: "LTAIttitTusfYbhc",
            //     accessKeySecret: "YMbWMBFYaRs4Q14Rx9o8SFI39r66uq",
            //     "RoleArn" : "acs:ram::20690111:role/ossfullaccess",
            //     bucket: "vinter"
            // }); 
            // return client;           
        },

        // 随机生成文件名
        random_string(len) {
            　　len = len || 32;
            　　var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';   
            　　var maxPos = chars.length;
            　　var pwd = '';
            　　for (let i = 0; i < len; i++) {
            　　pwd += chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return pwd;
        },
        self(){
            let upload = document.querySelector('#upload')
            this.autoUpload = false
            // upload.onClick = function(event){
            //     console.log(event.target.files)
            // }
            upload.click()
        },
        uploads(){
            this.begainUpload(this.files)
        }
    },
    mounted(){
        this.$http.aliyunSts()
        .then(res => {
            this.objData = res.data
            console.log(res)
        })
    }
};
</script>
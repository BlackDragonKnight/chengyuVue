<template>
    <div>
        <el-row>
        <el-col :span="8":offset="8">
            <el-image style="height: 200px;width: 200px" :src="require('../assets/horse.jpg')" fit="contain"></el-image>
            <el-image style="height: 200px;width: 200px" :src="require('../assets/cloud.jpg')" fit="contain"></el-image>
        </el-col>
        </el-row>

        <el-row>
            <font color="green" size="5">猜明星</font>
        </el-row>

        <el-form :model="idiom" ref="idiom" label-width="100px" >
        <el-row>
            <el-col :span="5":offset="9">
                <el-form-item prop="name">
                <el-input v-model="idiom.name" placeholder="请输入"/>
                </el-form-item>
            </el-col>
        </el-row>
        </el-form>

        <el-row>
            <el-button type="primary" @click="login('idiom')" >验证</el-button>
            <el-button type="primary" @click="clear" >取消</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "DouYin",
        data() {
            return {
                idiom:{
                    name:''
                }
            }
        },
        methods: {
            login(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //发送请求给后台
                        axios.post('/api/idiom', this.idiom.name.toString()).then(response => {
                            //跳转到首页
                            console.log(this.idiom.name)
                            if (response.data.name === this.idiom.name ) {
                                // this.$store.commit('updateUser', response.data);
                                this.$message.info('正确');
                                // this.$router.push({path: '/index'});
                            } else {
                                this.$message.error('错误,请重新输入');
                            }
                        }).catch(error => console.log(error))
                    }
                })
            },
            clear(){
                this.idiom = {name:''}
            }
        }
    }
</script>

<style>
    el-row{
        margin-bottom: 20px;
    }
</style>
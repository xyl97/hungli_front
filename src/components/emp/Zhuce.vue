<!--
*@zhuce
*@author niemengshi
*@date 2023/6/30 16:39
-->
<template>

    <div>
        <el-form  :rules="rules" ref = "loginForm" :model ="zhuceForm" class="login-container">
            <h3 class="login-title">用户注册</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="zhuceForm.username" auto-complete="false" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="zhuceForm.password" auto-complete="false" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="mail">
                <el-input type="text" v-model="zhuceForm.mail" auto-complete="false" placeholder="请输入邮箱验证码"></el-input>
                <el-button @click="mailbut"> 点击发送</el-button>
            </el-form-item>

            <el-button @click="zhucebut"> 立即注册</el-button>

        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Zhuce",

        data() {
            return {
                zhuceForm :{
                    username: "",
                    password: "",
                    mail: "",

                }
            }
        },
        methods: {

            zhucebut(){
                this.$axios.post('http://localhost:8078/zhuce', this.zhuceForm).then((res) => {
                    console.log(res.data.result)
                    if (res.data.result === "添加成功") {
                        this.$router.push('/');
                        this.$message({
                            message: '注册成功',
                            type: 'success'
                        });
                    }
                }).catch((err) => {

                    console.log(err);
                });
            },

            mailbut(){
                this.$axios.post("http://localhost:8078/mail",this.zhuceForm.mail).then((res)=>{

                })
            }
        },
    }
</script>

<style scoped>

</style>
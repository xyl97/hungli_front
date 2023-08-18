<template>

    <div>
        <el-form  :rules="rules" ref = "loginForm" :model ="loginForm" class="login-container">
            <h3 class="login-title">系统登录</h3>
            <el-form-item prop="username">
            <el-input type="text" v-model="loginForm.username" auto-complete="false" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" auto-complete="false" placeholder="请输入密码"></el-input>
            </el-form-item>
<!--            <el-form-item prop="code">-->
<!--                <el-input type = "text" auto-complete="false" v-model="loginForm.code" placeholder="点击图片跟换验证码" style="width: 250px;margin-right: 5px"></el-input>-->
<!--                <img :src="captchaUrl">-->
<!--            </el-form-item>-->
<!--            <el-checkbox v-model="checkeds" class="login-remember">记住我</el-checkbox>-->
            <el-button type="primary" style="width: 100%"@click="submitLogin">登录</el-button>
<!--            <el-button @click="zhuce"> 注册</el-button>-->
        </el-form>
    </div>
</template>

<script>
    export default {

        name: "Login",

        data() {
            return {
                // captchaUrl:'/captcha?time='+new Date(),
                loginForm: {
                    username: '',
                    password: '',
                    // code:''
                },

                rules:{
                    username:[{required:true,message:"请输入用户名",trigger:'blur'}],
                    password:[{required:true ,message:"请输入密码",trigger:'blur'}],
                    // code:[{required:true ,message:"请输入验证码",trigger:'blur'}]
                }

            }
        },

        methods: {

            submitLogin() {
                this.$refs.loginForm.validate((valid) =>{
                    if (valid){
                        // alert("成功")
                    }else {
                        this.$message.error('请输入所有字段');
                        return false;
                    }

                if (this.loginForm.username == '') {
                    this.$message({
                        message: '账号不能为空',
                        type: 'warning'
                    });
                    return false;
                }
                if (this.loginForm.password == '') {
                    this.$message({
                        message: '密码不能为空',
                        type: 'error'
                    });
                    return false;
                }

                /*跳转*/
                this.$axios.post('http://localhost:8078/login', this.loginForm).then((res) => {
                    console.log(res)
                    if (res.data.result === "登录成功") {


                        this.$router.push('/index');
                        this.$message({
                            message: '登录成功',
                            type: 'success'
                        });
                    }else {
                        this.$message({
                            message: res.data.msg,
                            type :'error'
                        })
                    }
                }).catch((err) => {

                    console.log(err);
                });

                })

            },

            // zhuce(){
            //     this.$router.push('/zhuce');
            //
            //
            // },
            // clearForm() {
            //     this.user = {};
            // }
        }

    }
</script>

<style scoped>
    .login-container {
        width: 500px;
        height: 320px;
        background-color: #fff;
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 5px;
    }
.login-title{
    margin: 0px auto 40px auto;
    text-align: center;
}
.login-remember{
    text-align: left;
    margin: 0px 0px 15px 0px;
}
    .logo {
        width: 130px;
        height: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 8px;
        box-shadow: 0 0 10px #eee;
        position: absolute;
        left: 50%;
        transform: translateX(-50%) translateY(-60px);
        background-color: #fff;
    }
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
    }


    .loginform_style {
        padding: 0 20px;
        margin-top: 110px;
    }

    .btns {
        display: flex;
        justify-content: center;
    }


</style>

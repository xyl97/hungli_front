<template>

    <div id="app">



<!--        <el-main>-->
         <router-view  v-if="isRouterAlive"> </router-view>


    </div>




</template>

<style>

</style>
<script>
    // import StudentList from "./components/student/StudentList";
    export default {
        provide() {
            return {
                reload: this.reload
            }
        },
        data(){
            return {
                isRouterAlive: true
            }
        },
       // components: {StudentList}
        methods: {
            // 解决登陆成功后重新加载当前页面方法
            reload() {
                this.isRouterAlive = false
                this.$nextTick(() => {
                    this.isRouterAlive = true
                })
            }
        }
    }
</script>
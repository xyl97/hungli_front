import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
import { Message } from 'element-ui';
// import router from'../src/router'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI)


// vue有一点不好的是，他不能自动把前台cookie发送到服务器，所以需要手动把coookie发送到服务器
axios.defaults.withCredentials = true


axios.interceptors.request.use(function (config) {

  console.log(config);
  return config;
});

//响应拦截器
// axios.interceptors.response.use(function (success) {
//     console.log(success.data.msg)
//   if (success.data.msg==="请重新登录") {
//         router.replace("/login")
//     return response;
//   }
// })



new Vue({
  router,
  store,
  ElementUI,
  axios,
  render: h => h(App)
}).$mount('#app')

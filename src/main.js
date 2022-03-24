import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './../mock/index.js'
import 'animate.css/animate.min.css'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

var app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//通过前台拦截器处理所有
app.axios.interceptors.response.use(config=>{
  return config;
},err=>{
  if(err.response.status === 403 && err.response.data.msg === 'access denied'){
    app.$message({
      message:'请先登录',
      type:'error',
      duration:3000,
      showClose:true,
      onClose(){
        router.push({path:'/'})
      }
    })
  }
  return Promise.reject(err);
})


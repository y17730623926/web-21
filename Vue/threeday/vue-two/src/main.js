// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// axios
import axios from 'axios';
// import vueAxios from 'vue-axios';
Vue.prototype.$http = axios;
// Vue.use(axios,vueAxios);
// Vue.use(vueAxios); 

// echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts;

Vue.use(ElementUI);

//拦截请求
axios.interceptors.request.use(config => {
  // console.log(config);
  if (store.state.token) {
    config.headers['Authorization'] = `Bearer ${store.state.token}`;
  }
  return config;
})

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

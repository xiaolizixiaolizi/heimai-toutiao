import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'amfe-flexible/index.js'
import './plugins/vant'
// import './plugins/vconsole' //引入console调式插件
import api from './network'
Vue.prototype.$api = api


// 引入全局组件
import globalComp from './components/global-comp'
for (const key in globalComp) {
  Vue.use(globalComp[key])

}
// 引入全局方法
import globalFn from './utils/globalFun'
Vue.use(globalFn)

//引入全局过滤器
import MyFilter from './utils/filters'
for (let key in MyFilter) {
  Vue.filter(key, MyFilter[key])
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

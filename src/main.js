import Vue from 'vue'
import App from './App.vue'
import '@/common/scss/index.scss'
import router from './router/router'
import fastclick from 'fastclick'
Vue.config.productionTip = false

fastclick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

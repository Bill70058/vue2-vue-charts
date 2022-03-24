import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import VueCharts from '../packages'
Vue.use(VueCharts)

new Vue({
  render: h => h(App),
}).$mount('#app')

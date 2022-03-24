/*
 * @Author: your name
 * @Date: 2022-03-24 16:01:28
 * @LastEditTime: 2022-03-24 16:17:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /publicComponent/echartComponent/vue-chart/packages/charts/index.js
 */
// 为组件提供 install 方法，供组件对外按需引入
import VueCharts from './src/charts'
VueCharts.install = Vue => {
  Vue.component(VueCharts.name, VueCharts)
}
export default VueCharts

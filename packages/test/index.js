// 为组件提供 install 方法，供组件对外按需引入
import testComponent from './src/test'
testComponent.install = Vue => {
  Vue.component(testComponent.name, testComponent)
}
export default testComponent

# vue-charts
vue2.x版本封装的响应式echarts组件

# 使用

### 全局导入
```javascript
import VueCharts from 'VueCharts'
Vue.use(VueCharts)
```

### 页面内导入
```javascript
import VueCharts from 'VueCharts'
<script>
export default{
  components:{
    VueCharts
  },
  data() {
    return {}
  }
}
<script/>
```

### 参数


| 参数名 | 类型 | 描述 | 示范传参 |
| :-----| ----: | :----: | :----:|
| id | String | 渲染div的id | 'target' |
| option | Object | 配置项 | {.....} |
| width | String | 渲染div的宽度 | '200px' |
| height | String | 渲染div的高度 | '200px' |
| watchData | Array | 渲染echarts的数据，监听是否发生变化，当数据更新时会重新触发渲染，示例传参 | [100,200,300,400] |


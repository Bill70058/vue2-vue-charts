<!--
 * @Author: your name
 * @Date: 2022-03-24 15:42:42
 * @LastEditTime: 2022-03-24 16:40:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /publicComponent/echartComponent/vue-chart/src/components/HelloWorld.vue
-->
<template>
  <div>
    <vue-charts :option="option"
                :height="'20rem'"
                :width="'80%'" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      }
    }
  }
}
</script>
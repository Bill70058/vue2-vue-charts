<template>
  <div :ref="id"
       :style="{height:height, width: width}"></div>
</template>

<script>
import { debounce } from '../../utils/index'
import * as echarts from 'echarts';
export default {
  name: 'VueCharts',
  props: {
    // 渲染charts的div id
    id: {
      type: String,
      default: () => {
        return ''
      }
    },
    // 渲染charts的div 宽度
    width: {
      type: String,
      default: () => {
        return '200px'
      }
    },
    // 渲染charts的div 高度
    height: {
      type: String,
      default: () => {
        return '200px'
      }
    },
    // 渲染charts的配置项
    option: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // 当配置项数据发生改变时重新渲染echarts，传入示例：option.series[0].data
    watchData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.initChart()
    this._resizeHanlder = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this._resizeHanlder)
    // 监听侧边栏
    const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    if (sidebarElm) {
      sidebarElm.addEventListener('transitionend', this._resizeHanlder)
    }
  },
  beforeDestroy () {
    if (!this.chart)
      return
    this.chart.dispose()
    this.chart = null
  },
  destroyed () {
    window.removeEventListener('resize', this.initChart())
  },
  watch: {
    watchData: {
      deep: true,
      handler () {
        this.initChart()
      }
    }
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$refs[this.id])
      this.chart.setOption(this.option)
    }
  }
}
</script>
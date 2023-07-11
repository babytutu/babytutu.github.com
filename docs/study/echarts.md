# Echarts 接入 vue3

## 安装

```bash
yarn add echarts
```

## 引入

根据官方文档按需引入，并增加模块导出

```ts
import * as echarts from 'echarts/core'
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  // 数据集组件
  DatasetComponent,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import type {
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineSeriesOption,
} from 'echarts/charts'
import type {
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
} from 'echarts/components'
import type { ComposeOption } from 'echarts/core'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
])

export default {
  echarts,
}

```

## 组件

可根据窗口大小变化重新渲染自适应尺寸

echartModel.vue

```vue
<template>
  <div class="chartDomStyle" ref="chartDom"></div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch, shallowRef } from 'vue'
import echarts from '@/utils/echart'
import type { ECOption } from '@/utils/echart'

const chartDom = ref<any>(null)

/**
 * @see https://echarts.apache.org/zh/faq.html
 * 如果你使用的是 Vue 3，请避免使用 reactive 及 ref。
 * 解决方案为：使用普通变量声明 ECharts 对象实例，或使用 shallowRef / shallowReactive / markRaw 等 API 防止 ECharts 对象实例被代理。
 */
const myChart = shallowRef<any>()

// 参数类型验证
interface Props {
  options: ECOption | Object
}

const props = defineProps<Props>()

const resize = (opt?: any) => {
  myChart.value?.resize(opt)
}

onMounted(() => {
  myChart.value = echarts.echarts.init(chartDom.value)
  myChart.value?.setOption(props.options)
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
})

watch(
  () => props.options,
  (newOptions) => {
    myChart.value?.setOption(newOptions)
  },
  {
    deep: true,
  }
)

defineExpose({ resize })
</script>
<style scoped>
.chartDomStyle {
  width: 100%;
  height: 100%;
}
</style>
```

## 示例

- 定义容器样式
- 通过参数options调整配置参数，changeType
- 通过调整容器高度实现重新渲染，changeSize

```vue
<template>
  <el-radio-group v-model="height" @change="changeSize">
    <el-radio-button label="300px" />
    <el-radio-button label="500px" />
  </el-radio-group>
  <el-radio-group v-model="type" @change="changeType">
    <el-radio-button label="bar" />
    <el-radio-button label="line" />
  </el-radio-group>
  <div class="chartDom" :style="{ height }">
    <echartModel ref="chartDom" :options="defaultOptions(type)"></echartModel>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

// 指定图表的配置项和数据
const defaultOptions = (type: string) => ({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type,
    },
  ],
})

const height = ref('300px')
const chartDom = ref()
const type = ref('bar')

function changeSize(size: string) {
  chartDom.value?.resize({
    height: size,
  })
}

function changeType(val: string) {
  type.value = val
}

</script>
<style>
.chartDom {
  width: 100%;
}
</style>

```
import { onBeforeMount, onMounted, ref } from 'vue'

export function useEcharts() {
  // 图表实例Ref引用
  const chartRef = ref<HTMLDivElement>()
  const chartInstance = ref<any>()
  // 图表配置项
  const chartOptions = ref<any>()
  onMounted(() => {

  })
  onBeforeMount(() => {
    chartInstance.value.dispose()
  })
  return {
    chartRef,
    chartInstance,
    chartOptions,
  }
}

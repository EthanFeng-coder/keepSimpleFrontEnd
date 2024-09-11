'use client'
import React, { useEffect } from 'react'

import * as echarts from 'echarts';
type EChartsOption = echarts.EChartsOption;


const BarChart: React.FC = () => {
  useEffect(() => {
    var chartDom = document.getElementById('barChart')!
    var myChart = echarts.init(chartDom)

    var option: EChartsOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      legend: {

      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220],
        },
      ],
    }

    option && myChart.setOption(option)

    window.addEventListener('resize', () => {
      myChart.resize()
    })

    return () => {
      myChart.dispose()
    }
  }, [])

  return <div id="barChart" style={{ width: '100%', height: '400px' }} />
}

export default BarChart

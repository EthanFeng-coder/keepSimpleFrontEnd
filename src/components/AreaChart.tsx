'use client'
import React, { useEffect } from 'react'
import * as echarts from 'echarts'
type EChartsOption = echarts.EChartsOption

const AreaChartComponent: React.FC = () => {
  useEffect(() => {
    var chartDom = document.getElementById('lineChart')!
    var myChart = echarts.init(chartDom)

    var option: EChartsOption = {
      legend: {},
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {},
        },
      ],
    }

    myChart.setOption(option)

    window.addEventListener('resize', () => {
      myChart.resize()
    })

    return () => {
      myChart.dispose()
    }
  }, [])

  return <div id="lineChart" style={{ width: '100%', height: '400px' }} />
}

export default AreaChartComponent

'use client'
import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const HorizontalBarChart: React.FC = () => {
  useEffect(() => {
    var chartDom = document.getElementById('horizontalBarChart')!;
    var myChart = echarts.init(chartDom);

    const labelRight = {
      position: 'right'
    } as const;

    var option: echarts.EChartsOption = {
      title: {
        text: 'Horizontal Bar Chart with Negative Values'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: 80,
        bottom: 30
      },
      xAxis: {
        type: 'value',
        position: 'top',
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      yAxis: {
        type: 'category',
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        data: [
          'ten',
          'nine',
          'eight',
          'seven',
          'six',
          'five',
          'four',
          'three',
          'two',
          'one'
        ]
      },
      series: [
        {
          name: 'Cost',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true,
            formatter: '{b}'
          },
          data: [
            { value: -0.07, label: labelRight },
            { value: -0.09, label: labelRight },
            0.2,
            0.44,
            { value: -0.23, label: labelRight },
            0.08,
            { value: -0.17, label: labelRight },
            0.47,
            { value: -0.36, label: labelRight },
            0.18
          ]
        }
      ]
    };

    myChart.setOption(option);

    window.addEventListener('resize', () => {
      myChart.resize();
    });

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="horizontalBarChart" style={{ width: '100%', height: '400px' }} />;
};

export default HorizontalBarChart;

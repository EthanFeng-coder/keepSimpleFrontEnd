"use client"
import React, { useEffect } from 'react';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

const DoughnutChart: React.FC = () => {
  useEffect(() => {
    var chartDom = document.getElementById('main')!;
    var myChart = echarts.init(chartDom);

    var option: EChartsOption = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 30,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    };

    option && myChart.setOption(option);

    window.addEventListener('resize', () => {
      myChart.resize();
    });

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="main" style={{ width: '100%', height: '400px' }} />;
};

export default DoughnutChart;

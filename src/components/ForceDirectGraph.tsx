'use client'
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import graphData from '../graph-mock-data.json';

interface NodeData {
  id: string;
  name: string;
  symbolSize: number;
  category: number;
  label?: {
    show: boolean;
  };
}

interface LinkData {
  source: string;
  target: string;
}

interface CategoryData {
  name: string;
}

interface GraphData {
  nodes: NodeData[];
  links: LinkData[];
  categories: CategoryData[];
}

const MyGraphComponent: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let myChart: echarts.ECharts | null = null;

    if (chartRef.current) {
      myChart = echarts.init(chartRef.current);

      // Prepare the data
      const graph: GraphData = graphData;

      graph.nodes.forEach((node) => {
        node.label = {
          show: node.symbolSize > 30,
        };
      });

      const option: echarts.EChartsOption = {
        title: {
          text: 'Les Miserables',
          subtext: 'Default layout',
          top: 'bottom',
          left: 'right',
        },
        tooltip: {},
        legend: [
          {
            data: graph.categories.map((a) => a.name),
          },
        ],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            name: 'Les Miserables',
            type: 'graph',
            legendHoverLink: false,
            layout: 'none',
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: true,
            label: {
              position: 'right',
              formatter: '{b}',
            },
            lineStyle: {
              color: 'source',
              curveness: 0.3,
            },
            emphasis: {
              focus: 'adjacency',
              lineStyle: {
                width: 10,
              },
            },
          },
        ],
      };

      myChart.setOption(option);

      // Clean up on component unmount
      return () => {
        myChart && myChart.dispose();
      };
    }
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '500px' }} />;
};

export default MyGraphComponent;

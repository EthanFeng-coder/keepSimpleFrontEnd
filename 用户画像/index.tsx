import "./Tailwind.css"
import * as echarts from 'echarts';
import React, { useEffect, useRef,useState } from 'react';
import "./persona.css"
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import graphData from './les-miserables.json';


const onChange = (key: string) => {
  console.log(key);
};

const tabs: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
  },
  {
    key: '2',
    label: 'Tab 2',
  },
  {
    key: '3',
    label: 'Tab 3',
  },
];
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', icon: <PieChartOutlined />, label: 'Graph 1' },
  { key: '2', icon: <DesktopOutlined />, label: 'Graph 2' },
  { key: '3', icon: <ContainerOutlined />, label: 'Graph 3' },
];


export default function MainComponent() {


const [collapsed, setCollapsed] = useState(false);
const [selectedKey, setSelectedKey] = useState('1');
  const chartRef = useRef<HTMLDivElement>(null);


  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  useEffect(() => {
    if (chartRef.current) {

      const chart = echarts.init(chartRef.current);
      let option = {};
      chart.clear();
      if (selectedKey === '1') {
        chart.showLoading();

        // Using the imported JSON data directly
        const graph = graphData;
        chart.hideLoading();
        graph.nodes.forEach((node) => {
          node.label = {
            show: node.symbolSize > 30
          };
        });
        option = {
          title: {
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
          },
          tooltip: {},
          legend: [
            {
              data: graph.categories.map((a) => a.name)
            }
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
                formatter: '{b}'
              },
              lineStyle: {
                color: 'source',
                curveness: 0.3
              },
              emphasis: {
                focus: 'adjacency',
                lineStyle: {
                  width: 10
                }
              }
            }
          ]
        };
        chart.setOption(option);
      } else if (selectedKey === '2') {
        chart.showLoading();

        // Using the imported JSON data
        const graph = graphData;
         chart.hideLoading();
        graph.nodes.forEach((node) => {
          node.label = {
            show: node.symbolSize > 30
          };
        });

        option = {
          title: {
            text: 'Les Miserables',
            subtext: 'Circular layout',
            top: 'bottom',
            left: 'right'
          },
          tooltip: {},
          legend: [
            {
              data: graph.categories.map((a) => a.name)
            }
          ],
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              name: 'Les Miserables',
              type: 'graph',
              layout: 'circular',
              circular: {
                rotateLabel: true
              },
              data: graph.nodes,
              links: graph.links,
              categories: graph.categories,
              roam: true,
              label: {
                position: 'right',
                formatter: '{b}'
              },
              lineStyle: {
                color: 'source',
                curveness: 0.3
              }
            }
          ]
        };
         chart.setOption(option);

      } else if (selectedKey === '3') {
         chart.showLoading();
        // Load JSON data for Graph 3
        const graph = graphData;
        chart.hideLoading();
        // Define options for Graph 3
        option = {
          tooltip: {},
          legend: [
            {
              data: graph.categories.map((a) => a.name)
            }
          ],
          series: [
            {
              name: 'Les Miserables',
              type: 'graph',
              layout: 'none',
              data: graph.nodes,
              links: graph.links,
              categories: graph.categories,
              roam: true,
              label: {
                show: true,
                position: 'right',
                formatter: '{b}'
              },
              labelLayout: {
                hideOverlap: true
              },
              scaleLimit: {
                min: 0.4,
                max: 2
              },
              lineStyle: {
                color: 'source',
                curveness: 0.3
              }
            }
          ]
        };
        chart.setOption(option);
      }

      window.addEventListener('resize', () => chart.resize());
      return () => window.removeEventListener('resize', () => chart.resize());
    }
  }, [selectedKey]);



  return (
  <>
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar on the left */}
      <div style={{ width: 256, minHeight: '60vh', overflowY: 'auto' }}>
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          onClick={({ key }) => setSelectedKey(key)}
        />
      </div>

      {/* Content on the right */}
      <div style={{ flex: 1, padding: '10px', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Tabs above the graph */}
{/*         <Tabs defaultActiveKey="1" items={tabs} onChange={(key) => console.log(key)} /> */}

        {/* Graph area */}
        <div style={{ flex: 1 }}>
          <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </div>
    </>
  );
}
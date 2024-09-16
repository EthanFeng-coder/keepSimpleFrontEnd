import React, { useEffect, useRef, useState } from "react";
import { Modal, Button } from "antd";
import * as echarts from "echarts";

const KnowledgeGraph = () => {
  const chartRef = useRef(null);
  const modalChartRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const graphData = {
    nodes: [
      { name: "Alice", category: 0, value: 10, x: 300, y: 200, color: "#a1e3a1" },
      { name: "Bob", category: 1, value: 10, x: 600, y: 200, color: "#e78aa1" },
      { name: "Charlie", category: 2, value: 10, x: 450, y: 400, color: "#8e71a9" },
      { name: "Dave", category: 3, value: 10, x: 600, y: 500, color: "#1e945a" },
      { name: "Eve", category: 4, value: 10, x: 200, y: 400, color: "#f1a75b" },
      { name: "Frank", category: 5, value: 10, x: 150, y: 300, color: "#f1e55b" },
    ],
    // Ensure only one link per node, no multiple links
    links: [
      { source: "Alice", target: "Bob", value: "Connection" },
      { source: "Charlie", target: "Dave", value: "Connection" },
      { source: "Eve", target: "Frank", value: "Connection" },
       { source: "Frank", target: "Alice", value: "Connection" },
        { source: "Charlie", target: "Alice", value: "Connection" },
    ],
  };

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);
    const option = {
      tooltip: {},
      series: [
        {
          type: "graph",
          layout: "none", // This ensures nodes remain static
          data: graphData.nodes.map((node) => ({
            name: node.name,
            value: node.value,
            x: node.x,
            y: node.y,
            itemStyle: { color: node.color },
          })),
          links: graphData.links.map((link) => ({
            source: link.source,
            target: link.target,
            label: { show: true, formatter: link.value },
          })),
          roam: true, // Allows zooming and panning, but no layout movement
          label: {
            show: true,
            position: "right",
            formatter: "{b}",
          },
          emphasis: {
            focus: "adjacency",
          },
          lineStyle: {
            color: "source",
            curveness: 0, // Set to 0 to make the lines straight
          },
        },
      ],
    };

    chartInstance.setOption(option);

    chartInstance.on("click", (params) => {
      setSelectedNode(params.name);
      setModalVisible(true);
    });

    return () => {
      chartInstance.dispose();
    };
  }, [graphData]);

  useEffect(() => {
    if (modalVisible && selectedNode && modalChartRef.current) {
      const modalChartInstance = echarts.init(modalChartRef.current);
      modalChartInstance.setOption(getChartOption());

      // Add this to ensure the chart fills the modal correctly
      modalChartInstance.resize();

      return () => {
        modalChartInstance.dispose();
      };
    }
  }, [modalVisible, selectedNode]);

  const getChartOption = () => {
    switch (selectedNode) {
      case "Alice":
        return {
          title: { text: "Alice's Data Overview" },
          xAxis: { type: "category", data: ["Jan", "Feb", "Mar"] },
          yAxis: { type: "value" },
          series: [{ data: [820, 932, 901], type: "line" }],
        };
      case "Bob":
        return {
          title: { text: "Bob's Data Overview" },
          xAxis: { type: "category", data: ["Q1", "Q2", "Q3"] },
          yAxis: { type: "value" },
          series: [{ data: [500, 400, 600], type: "bar" }],
        };
      case "Charlie":
        return {
          title: { text: "Charlie's Policy Details" },
          xAxis: { type: "category", data: ["Type A", "Type B", "Type C"] },
          yAxis: { type: "value" },
          series: [{ data: [300, 200, 500], type: "pie" }],
        };
      case "Dave":
        return {
          title: { text: "Dave's Vehicle Information" },
          radar: {
            indicator: [
              { name: "Safety", max: 100 },
              { name: "Maintenance", max: 100 },
              { name: "Fuel Efficiency", max: 100 },
            ],
          },
          series: [
            {
              name: "Vehicle Stats",
              type: "radar",
              data: [{ value: [90, 80, 70], name: "Vehicle" }],
            },
          ],
        };
      default:
        return {
          title: { text: `Overview of ${selectedNode}` },
          xAxis: { type: "category", data: ["A", "B", "C"] },
          yAxis: { type: "value" },
          series: [{ data: [100, 200, 300], type: "line" }],
        };
    }
  };

  return (
    <div>
      <div
        ref={chartRef}
        style={{ width: "100%", height: "500px", marginBottom: "20px" }}
      ></div>

      <Modal
        title={`Details of ${selectedNode}`}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setModalVisible(false)}>
            Close
          </Button>,
        ]}
      >
        {/* ECharts Component for Chart */}
        <div
          ref={modalChartRef}
          style={{ width: "500px", height: "350px" }} // Adjust the height and width to fit the modal
        ></div>
      </Modal>
    </div>
  );
};

export default KnowledgeGraph;

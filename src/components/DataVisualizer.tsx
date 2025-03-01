import React, { useCallback } from "react";
import { ReactFlow } from "@xyflow/react";
import {
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

interface DataVisualizerProps {
  data: any | { array: number[]; target: number };
  type: "algorithm" | "dataStructure";
  name: string;
}

const renderLinkedList = (data: any[]): { nodes: Node[]; edges: Edge[] } => {
  const nodes: Node[] = data.map((item, index) => ({
    id: `${index}`,
    data: { label: item.toString() },
    position: { x: index * 150, y: 50 },
  }));

  const edges: Edge[] = data.slice(0, -1).map((_, index) => ({
    id: `e${index}-${index + 1}`,
    source: `${index}`,
    target: `${index + 1}`,
    animated: true,
  }));

  return { nodes, edges };
};

const renderBinarySearch = (data: {
  array: number[];
  target: number;
}): { nodes: Node[]; edges: Edge[] } => {
  // Implement binary search visualization logic here
  return { nodes: [], edges: [] };
};

const renderBinaryTree = (data: any[]): { nodes: Node[]; edges: Edge[] } => {
  // Implement binary tree visualization logic here
  return { nodes: [], edges: [] };
};

const DataVisualizer: React.FC<DataVisualizerProps> = ({
  data,
  type,
  name,
}) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onInit = useCallback(() => {
    let initialElements;

    switch (type) {
      case "dataStructure":
        switch (name) {
          case "linkedList":
            initialElements = renderLinkedList(data);
            break;
          case "binaryTree":
            initialElements = renderBinaryTree(data);
            break;
          // Add more data structures here
        }
        break;
      case "algorithm":
        switch (name) {
          case "binarySearch":
            initialElements = renderBinarySearch(
              data as { array: number[]; target: number },
            );
            break;
          // Add more algorithms here
        }
        break;
    }

    if (initialElements) {
      setNodes(initialElements.nodes);
      setEdges(initialElements.edges);
    }
  }, [data, type, name, setNodes, setEdges]);

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onInit={onInit}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default DataVisualizer;

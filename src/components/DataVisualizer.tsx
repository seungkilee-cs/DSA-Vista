import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './DataVisualizer.css';


interface DataVisualizerProps {
  data: any;
  type: 'algorithm' | 'dataStructure';
  name: string;
}

const DataVisualizer: React.FC<DataVisualizerProps> = ({ data, type, name }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);
      svg.selectAll('*').remove(); // Clear previous visualization

      switch (type) {
        case 'algorithm':
          drawAlgorithm(svg, data, name);
          break;
        case 'dataStructure':
          drawDataStructure(svg, data, name);
          break;
      }
    }
  }, [data, type, name]);

  return <svg ref={svgRef} width="100%" height="400"></svg>;
};

function drawAlgorithm(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, data: any, name: string) {
  // Implement algorithm-specific visualization
  switch (name) {
    case 'binarySearch':
      drawBinarySearch(svg, data);
      break;
    // Add cases for other algorithms
  }
}

function drawDataStructure(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, data: any, name: string) {
  // Implement data structure-specific visualization
  switch (name) {
    case 'linkedList':
      drawLinkedList(svg, data);
      break;
    // Add cases for other data structures
  }
}

function drawBinarySearch(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, data: number[]) {
  const width = 400;
  const height = 200;
  const barWidth = width / data.length;

  svg.attr('viewBox', `0 0 ${width} ${height}`);

  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * barWidth)
    .attr('y', d => height - d * 10)
    .attr('width', barWidth - 1)
    .attr('height', d => d * 10)
    .attr('fill', 'steelblue');

  svg.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .text(d => d)
    .attr('x', (d, i) => i * barWidth + barWidth / 2)
    .attr('y', d => height - d * 10 - 5)
    .attr('text-anchor', 'middle')
    .attr('fill', 'black');
}

function drawLinkedList(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, data: any[]) {
  const width = 400;
  const height = 100;
  const nodeRadius = 20;
  const nodeSpacing = 80;

  svg.attr('viewBox', `0 0 ${width} ${height}`);

  const nodes = svg.selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('transform', (d, i) => `translate(${i * nodeSpacing + nodeRadius}, ${height / 2})`);

  nodes.append('circle')
    .attr('r', nodeRadius)
    .attr('fill', 'lightblue')
    .attr('stroke', 'steelblue');

  nodes.append('text')
    .text(d => d)
    .attr('text-anchor', 'middle')
    .attr('dy', '0.3em');

  svg.selectAll('line')
    .data(data.slice(0, -1))
    .enter()
    .append('line')
    .attr('x1', (d, i) => (i + 1) * nodeSpacing)
    .attr('y1', height / 2)
    .attr('x2', (d, i) => (i + 2) * nodeSpacing - nodeRadius)
    .attr('y2', height / 2)
    .attr('stroke', 'black')
    .attr('marker-end', 'url(#arrowhead)');

  svg.append('defs').append('marker')
    .attr('id', 'arrowhead')
    .attr('viewBox', '-0 -5 10 10')
    .attr('refX', 8)
    .attr('refY', 0)
    .attr('orient', 'auto')
    .attr('markerWidth', 6)
    .attr('markerHeight', 6)
    .attr('xoverflow', 'visible')
    .append('svg:path')
    .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
    .attr('fill', 'black')
    .style('stroke', 'none');
}

export default DataVisualizer;

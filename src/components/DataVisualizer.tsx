import { useEffect, useRef } from 'react';
// import * as d3 from 'd3';
import './DataVisualizer.css';

interface DataVisualizerProps {
  data: any[];
}

function DataVisualizer({ data }: DataVisualizerProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      // const svg = d3.select(svgRef.current);
      // Implement your D3 visualization here
    }
  }, [data]);

  return <svg ref={svgRef} width="100%" height="400"></svg>;
}

export default DataVisualizer;

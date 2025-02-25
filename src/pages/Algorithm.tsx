import { useParams } from 'react-router-dom';
import CodeHighlighter from '../components/CodeHighlighter';
import DataVisualizer from '../components/DataVisualizer';
import Explanation from '../components/Explanation';
import { algorithms } from '../utils/algorithms';
import './Algorithm.css'

function Algorithm() {
  const { name } = useParams<{ name: string }>();
  const algorithm = algorithms[name as keyof typeof algorithms];

  if (!algorithm) {
    return <div>Algorithm not found</div>;
  }

  return (
    <div>
      <h1>{algorithm.name}</h1>
      <CodeHighlighter code={algorithm.code} language={algorithm.language} currentLine={1} />
      <h2>Sample Input</h2>
      <pre>{JSON.stringify(algorithm.sampleInput, null, 2)}</pre>
      <h2>Sample Output</h2>
      <pre>{JSON.stringify(algorithm.sampleOutput, null, 2)}</pre>
      <DataVisualizer data={algorithm.sampleInput} />
      <Explanation markdown={algorithm.explanation} />
    </div>
  );
}

export default Algorithm;

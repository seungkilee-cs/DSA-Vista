import { useParams } from "react-router-dom";
import CodeHighlighter from "../components/CodeHighlighter";
import DataVisualizer from "../components/DataVisualizer";
import Explanation from "../components/Explanation";
import { dataStructures } from "../utils/dataStructures";
import "./DataStructure.css";

function DataStructure() {
  const { name } = useParams<{ name: string }>();
  const ds = dataStructures[name as keyof typeof dataStructures];

  if (!ds) {
    return <div>Data structure not found</div>;
  }

  return (
    <div>
      <h1>{ds.name}</h1>
      <CodeHighlighter code={ds.code} language={ds.language} currentLine={1} />
      <DataVisualizer
        data={ds.sampleData}
        type="dataStructure"
        name={name as string}
      />
      <Explanation markdown={ds.explanation} />
    </div>
  );
}

export default DataStructure;

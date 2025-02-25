import { marked } from 'marked';
import './Explanation.css';

interface ExplanationProps {
  markdown: string;
}

function Explanation({ markdown }: ExplanationProps) {
  const html = marked(markdown);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default Explanation;

import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // Use a more colorful theme
import 'prismjs/components/prism-python'; // Add language support as needed
import './CodeHighlighter.css';

interface CodeHighlighterProps {
  code: string;
  language: string;
  currentLine: number;
}

function CodeHighlighter({ code, language, currentLine }: CodeHighlighterProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <pre className="code-highlighter">
      <code ref={codeRef} className={`language-${language}`}>
        {code.split('\n').map((line, index) => (
          <span
            key={index}
            className={`code-line ${index + 1 === currentLine ? 'highlight-line' : ''}`}
          >
            <span className="line-number">{index + 1}</span>
            {line}
            {'\n'}
          </span>
        ))}
      </code>
    </pre>
  );
}

export default CodeHighlighter;

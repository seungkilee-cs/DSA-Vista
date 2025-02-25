import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
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
    <pre>
      <code ref={codeRef} className={`language-${language}`}>
        {code.split('\n').map((line, index) => (
          <span
            key={index}
            className={index + 1 === currentLine ? 'highlight-line' : ''}
          >
            {line}
            {'\n'}
          </span>
        ))}
      </code>
    </pre>
  );
}

export default CodeHighlighter;

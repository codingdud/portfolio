import Mermaid from './Mermaid';
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-yaml';

function CodeBlock({ className, children, ...props }: any) {
  const language = className?.replace('language-', '');
  const code = Array.isArray(children) ? children.join('') : String(children || '');

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  if (language === 'mermaid') {
    return <Mermaid chart={code} />;
  }


  return (
    <pre className={className} style={{ whiteSpace: 'pre-wrap', overflowX: 'auto' }} {...props}>
      <code className={className}>{children}</code>
    </pre>
  );
}

export const mdxComponents = {
  pre: CodeBlock,
  code: ({ className, children, ...props }: any) => {
    const language = className?.replace('language-', '');
    
    if (language === 'mermaid') {
      const code = Array.isArray(children) ? children.join('') : String(children || '');
      return <Mermaid chart={code} />;
    }
    
    if (className) {
      return <code className={className} {...props}>{children}</code>;
    }
    return <code {...props}>{children}</code>;
  },
};
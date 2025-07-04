import Mermaid from './Mermaid';

function CodeBlock({ className, children, ...props }: any) {
  const language = className?.replace('language-', '');
  const code = Array.isArray(children) ? children.join('') : String(children || '');

  if (language === 'mermaid') {
    return <Mermaid chart={code} />;
  }

  return (
    <pre className={className} {...props}>
      <code>{children}</code>
    </pre>
  );
}

export const mdxComponents = {
  pre: CodeBlock,
  code: ({ className, children, ...props }: any) => {
    const language = className?.replace('language-', '');
    const code = Array.isArray(children) ? children.join('') : String(children || '');
    
    if (language === 'mermaid') {
      return <Mermaid chart={code} />;
    }
    
    return <code className={className} {...props}>{children}</code>;
  },
};
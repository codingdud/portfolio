import Mermaid from './Mermaid';

const CodeBlock = ({ className = '', children }: any) => {
  const language = className.replace('language-', '');
  if (language === 'mermaid') {
    return <Mermaid>{children}</Mermaid>;
  }
  return (
    <pre className={className}>
      <code>{children}</code>
    </pre>
  );
};

export const mdxComponents = {
  pre: CodeBlock,
  Mermaid,
};
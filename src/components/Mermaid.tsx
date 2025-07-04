import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({ startOnLoad: false });

const Mermaid = ({ children, chart }: { children?: string; chart?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const content = children || chart || '';

  useEffect(() => {
    if (ref.current) {
      mermaid.contentLoaded();
    }
  }, [content]);

  return (
    <div className="mermaid" ref={ref}>
      {content}
    </div>
  );
};

export default Mermaid;
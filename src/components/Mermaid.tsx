import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    const renderChart = async () => {
      if (!chartRef.current || !chart) return;
      
      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            darkMode: true,
            primaryColor: '#3b82f6',
            primaryTextColor: '#ffffff',
            primaryBorderColor: '#1e40af',
            lineColor: '#64748b',
            sectionBkgColor: '#1e293b',
            altSectionBkgColor: '#0f172a',
            gridColor: '#374151',
            secondaryColor: '#6366f1',
            tertiaryColor: '#8b5cf6',
          },
        });
        
        const { svg } = await mermaid.render('mermaid-' + Date.now(), chart);
        chartRef.current.innerHTML = svg;
      } catch (error) {
        console.error('Mermaid error:', error);
        chartRef.current.innerHTML = `<pre style="color: red;">Mermaid Error: ${error}</pre>`;
      }
    };
    
    renderChart();
  }, [chart]);

  return <div className="mermaid my-6" ref={chartRef} />;
}
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
        console.error('Mermaid syntax error in chart:', chart.substring(0, 100));
        console.error('Full error:', error);
        chartRef.current.innerHTML = `<div style="color: red; background: #2d1b1b; padding: 1rem; border-radius: 4px; font-family: monospace;"><strong>Mermaid Syntax Error:</strong><br/>${error}<br/><br/><strong>Chart preview:</strong><br/><pre style="font-size: 12px; overflow: auto;">${chart.substring(0, 200)}...</pre></div>`;
      }
    };
    
    renderChart();
  }, [chart]);

  return <div className="mermaid my-6" ref={chartRef} />;
}
import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderChart = async () => {
      if (!chartRef.current || !chart.trim()) return;
      
      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          securityLevel: 'sandbox',
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
        
        const cleanChart = chart.trim();
        const { svg } = await mermaid.render('mermaid-' + Date.now(), cleanChart);
        chartRef.current.innerHTML = svg;
      } catch (error) {
        console.error('Mermaid error:', error);
        chartRef.current.innerHTML = `<div style="color: red; background: #2d1b1b; padding: 1rem; border-radius: 4px; font-family: monospace;"><strong>Mermaid Error:</strong><br/>${error}<br/><br/><strong>Chart:</strong><br/><pre style="font-size: 12px;">${chart}</pre></div>`;
      }
    };
    
    renderChart();
  }, [chart]);

  return <div className="mermaid my-6" ref={chartRef} />;
}
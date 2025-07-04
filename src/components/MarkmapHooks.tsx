import React, { useRef, useEffect } from 'react';
import { Markmap } from 'markmap-view';
import { transformer } from './markmap';
import { Toolbar } from 'markmap-toolbar';
import '../index.css';

function renderToolbar(mm: Markmap, wrapper: HTMLElement) {
  while (wrapper?.firstChild) wrapper.firstChild.remove();
  if (mm && wrapper) {
    const toolbar = new Toolbar();
    toolbar.attach(mm);
    toolbar.register({
      id: 'alert',
      title: 'Click to show an alert',
      content: 'Alert',
      onClick: () => alert('You made it!'),
    });
    toolbar.setItems([...Toolbar.defaultItems, 'alert']);
    wrapper.append(toolbar.render());
  }
}

interface MarkmapHooksProps {
  initialValue?: string;
}

const defaultValue = `# markmap\n- beautiful\n- useful\n- easy\n- interactive\n`;

const MarkmapHooks: React.FC<MarkmapHooksProps> = ({ initialValue }) => {
  const value = initialValue || defaultValue;
  const refSvg = useRef<SVGSVGElement>(null);
  const refMm = useRef<Markmap | null>(null);
  const refToolbar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refMm.current) return;
    const mm = Markmap.create(refSvg.current!);
    refMm.current = mm;
    renderToolbar(refMm.current, refToolbar.current!);
  }, []);

  useEffect(() => {
    const mm = refMm.current;
    if (!mm) return;
    const { root } = transformer.transform(value);
    mm.setData(root).then(() => {
      mm.fit();
    });
  }, [value]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full bg-[#181A20] rounded-lg shadow-lg">
      <svg className="w-full h-full" ref={refSvg} style={{ background: '#181A20', borderRadius: '0.5rem',color:'white' }} />
      <div className="absolute bottom-1 right-1" ref={refToolbar}></div>
    </div>
  );
};

export default MarkmapHooks;
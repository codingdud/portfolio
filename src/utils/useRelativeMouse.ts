import { useState, useCallback } from 'react';

export const useRelativeMouse = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>, parentRef: React.RefObject<HTMLElement>) => {
    if (!parentRef.current) return;
    const rect = parentRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  }, []);

  return { mousePos, handleMouseMove, resetMouse: () => setMousePos({ x: 0, y: 0 }) };
};

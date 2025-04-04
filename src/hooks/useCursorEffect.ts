import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

const useCursorEffect = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // マウスの動きを追跡
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // マウスが動いたら表示
      if (!isVisible) {
        setIsVisible(true);
      }
    };
    
    // マウスがウィンドウから出た場合
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    // マウスがウィンドウに入った場合
    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);
  
  return { position, isHovering, setIsHovering, isVisible };
};

export default useCursorEffect;
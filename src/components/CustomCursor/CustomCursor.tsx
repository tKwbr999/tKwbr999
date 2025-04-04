import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useCursorEffect from '../../hooks/useCursorEffect';

interface CursorProps {
  $isHovering: boolean;
}

const CursorOuter = styled(motion.div)<CursorProps>`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  width: ${props => props.$isHovering ? '60px' : '30px'};
  height: ${props => props.$isHovering ? '60px' : '30px'};
  border: 2px solid var(--accent-color);
  border-radius: 50%;
  opacity: ${props => props.$isHovering ? 0.5 : 0.25};
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s, opacity 0.3s;
`;

const CursorInner = styled(motion.div)<CursorProps>`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  width: ${props => props.$isHovering ? '8px' : '4px'};
  height: ${props => props.$isHovering ? '8px' : '4px'};
  background-color: var(--accent-color);
  border-radius: 50%;
  opacity: 1;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s;
`;

const CustomCursor = () => {
  const { position, isHovering, setIsHovering, isVisible } = useCursorEffect();
  const [isMobile, setIsMobile] = useState(false);
  
  // ホバー要素を検知
  useEffect(() => {
    // モバイルデバイスの検出
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // ホバー可能要素の検出
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.project-item');
        
      setIsHovering(!!isHoverable);
    };
    
    const handleMouseOut = () => {
      setIsHovering(false);
    };
    
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [setIsHovering]);
  
  if (isMobile || !isVisible) return null;
  
  return (
    <>
      <CursorOuter
        $isHovering={isHovering}
        animate={{
          x: position.x,
          y: position.y,
          transition: {
            type: 'spring',
            mass: 0.3,
            stiffness: 200
          }
        }}
      />
      <CursorInner
        $isHovering={isHovering}
        animate={{
          x: position.x,
          y: position.y,
          transition: {
            type: 'spring',
            mass: 0.1,
            stiffness: 250
          }
        }}
      />
    </>
  );
};

export default CustomCursor;
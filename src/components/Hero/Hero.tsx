import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding-left: var(--header-width);
  
  @media (max-width: 1279px) and (min-width: 768px) {
    padding-left: var(--header-width-tablet);
  }
  
  @media (max-width: 767px) {
    padding-left: 0;
    padding-top: var(--header-height-mobile);
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 40%, #333, #111);
  z-index: -2;
`;

const HeroContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;
  
  @media (max-width: 767px) {
    padding: 0 20px;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.1;
  
  span {
    color: var(--accent-color);
  }
  
  @media (max-width: 1279px) {
    font-size: 4rem;
  }
  
  @media (max-width: 767px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 600px;
  margin-bottom: 40px;
  color: var(--text-color-muted);
  
  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

const ParallaxLayer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`;

const CodeElement = styled(motion.div)`
  position: absolute;
  padding: 15px;
  border-radius: 8px;
  background-color: rgba(40, 42, 54, 0.8);
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: #f8f8f2;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  max-width: 300px;
  overflow: hidden;
  
  pre {
    margin: 0;
    white-space: pre-wrap;
  }
  
  .keyword {
    color: #ff79c6;
  }
  
  .function {
    color: #50fa7b;
  }
  
  .string {
    color: #f1fa8c;
  }
  
  .comment {
    color: #6272a4;
  }
  
  .type {
    color: #8be9fd;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  span {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }
  
  .arrow {
    width: 20px;
    height: 20px;
    border: solid var(--text-color);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const codeSnippets = [
  { 
    x: '20%', 
    y: '20%', 
    scale: 1, 
    delay: 0,
    code: `<span class="keyword">func</span> <span class="function">main</span>() {
  <span class="keyword">fmt</span>.<span class="function">Println</span>(<span class="string">"Hello, Go!"</span>)
}`
  },
  { 
    x: '70%', 
    y: '30%', 
    scale: 0.8, 
    delay: 0.2,
    code: `<span class="keyword">const</span> <span class="function">App</span> = () => {
  <span class="keyword">return</span> (
    <span class="type">&lt;div&gt;</span>Hello React<span class="type">&lt;/div&gt;</span>
  );
};`
  },
  { 
    x: '40%', 
    y: '70%', 
    scale: 1.2, 
    delay: 0.4,
    code: `<span class="comment">// AI活用の例</span>
<span class="keyword">async function</span> <span class="function">generateText</span>() {
  <span class="keyword">const</span> response = <span class="keyword">await</span> model.
    <span class="function">complete</span>(<span class="string">"AIと人間の協働"</span>);
  <span class="keyword">return</span> response.text;
}`
  },
  { 
    x: '65%', 
    y: '60%', 
    scale: 0.7, 
    delay: 0.6,
    code: `<span class="keyword">type</span> <span class="type">User</span> <span class="keyword">struct</span> {
  ID    <span class="type">string</span>
  Name  <span class="type">string</span>
  Email <span class="type">string</span>
}`
  },
  { 
    x: '15%', 
    y: '50%', 
    scale: 0.75, 
    delay: 0.8,
    code: `<span class="comment">// TypeScriptの型定義</span>
<span class="keyword">interface</span> <span class="type">Project</span> {
  id: <span class="type">string</span>;
  title: <span class="type">string</span>;
  techs: <span class="type">string</span>[];
}`
  }
];

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleParallax = () => {
      if (!sectionRef.current) return;
      const scrollY = window.scrollY;
      const layers = sectionRef.current.querySelectorAll('.parallax-layer');
      
      layers.forEach((layer, index) => {
        const speed = 0.1 * (index + 1);
        const yPos = -scrollY * speed;
        (layer as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);
  
  return (
    <HeroSection id="hero" ref={sectionRef}>
      <HeroBackground />
      
      {codeSnippets.map((snippet, index) => (
        <ParallaxLayer 
          key={index} 
          className="parallax-layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: snippet.delay, duration: 0.6 }}
          style={{ zIndex: -1 }}
        >
          <CodeElement 
            style={{ 
              left: snippet.x, 
              top: snippet.y, 
              scale: snippet.scale 
            }}
            animate={{ 
              x: [0, 10, -10, 5, 0],
              y: [0, -15, -5, -10, 0],
              rotate: [0, 1, -1, 0.5, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 10,
              delay: snippet.delay,
              ease: "easeInOut"
            }}
          >
            <pre dangerouslySetInnerHTML={{ __html: snippet.code }} />
          </CodeElement>
        </ParallaxLayer>
      ))}
      
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AI"も"使える<br />エンジニアが<span>未来</span>を創る
        </HeroTitle>
        
        <HeroSubtitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Go/TypeScript/Reactを駆使するフルスタックエンジニア。バックエンド開発を得意とし、最新のAI技術も積極的に活用しています。
        </HeroSubtitle>
      </HeroContent>
      
      <ScrollIndicator
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <span>Scroll</span>
        <div className="arrow"></div>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
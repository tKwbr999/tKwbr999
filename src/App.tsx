import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import Layout from './layout/Layout';
import GlobalStyle from './styles/GlobalStyle';

// コンポーネントの遅延読み込み
const Hero = lazy(() => import('./components/Hero/Hero'));
const Works = lazy(() => import('./components/Works/Works'));
const About = lazy(() => import('./components/About/About'));
const Contact = lazy(() => import('./components/Contact/Contact'));

const LoadingFallback = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);
  font-size: 1.5rem;

  .dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--accent-color);
    margin: 0 3px;
    animation: pulse 1.5s infinite ease-in-out;
  }

  .dot:nth-child(1) {
    animation-delay: 0s;
  }

  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(0.5);
      opacity: 0.5;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Suspense
          fallback={
            <LoadingFallback>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </LoadingFallback>
          }
        >
          <Hero />
          <About />
          <Works />
          <Contact />
        </Suspense>
      </Layout>
    </>
  );
}

export default App;

import { ReactNode } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CustomCursor from '../components/CustomCursor/CustomCursor';

interface LayoutProps {
  children: ReactNode;
}

const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  
  @media (min-width: 768px) {
    padding-left: 0;
  }
  
  @media (max-width: 767px) {
    padding-top: var(--header-height-mobile);
  }
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <CustomCursor />
    </>
  );
};

export default Layout;
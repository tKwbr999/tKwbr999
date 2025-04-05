import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBriefcase, FaUserAlt, FaEnvelope, FaBlog, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  background-color: var(--bg-color);
  color: var(--text-color);
  z-index: 1000;
  
  @media (min-width: 768px) {
    left: 0;
    top: 0;
    width: var(--header-width);
    height: 100vh;
    border-right: 1px solid #333;
  }
  
  @media (max-width: 1279px) and (min-width: 768px) {
    width: var(--header-width-tablet);
  }
  
  @media (max-width: 767px) {
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height-mobile);
    border-bottom: 1px solid #333;
  }
`;

const Logo = styled.div`
  padding: 30px 20px;
  
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    
    span {
      color: var(--accent-color);
    }
  }
  
  @media (max-width: 767px) {
    padding: 15px 20px;
    
    h1 {
      font-size: 1.2rem;
    }
  }
`;

const Navigation = styled.nav`
  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 1.5rem;
    color: var(--text-color);
    z-index: 1001;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  
  @media (max-width: 767px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--bg-color);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0 20px;
  
  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
  }
`;

const NavItem = styled.li`
  margin-bottom: 30px;
  
  a {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    transition: color 0.3s ease;
    
    &:before {
      content: '';
      position: absolute;
      left: -20px;
      width: 3px;
      height: 0;
      background-color: var(--accent-color);
      transition: height 0.3s ease;
    }
    
    &.active {
      color: var(--accent-color);
      
      &:before {
        height: 100%;
      }
    }
    
    &:hover {
      color: var(--accent-color);
      
      &:before {
        height: 50%;
      }
    }
  }
  
  svg {
    margin-right: 10px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 1279px) and (min-width: 768px) {
    span {
      display: none;
    }
    
    svg {
      font-size: 1.5rem;
      margin-right: 0;
    }
  }
  
  @media (max-width: 767px) {
    margin-bottom: 40px;
    
    a {
      font-size: 1.3rem;
      justify-content: center;
      
      &:before {
        display: none;
      }
    }
    
    svg {
      margin-right: 15px;
      font-size: 1.5rem;
    }
  }
`;

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'works', 'about', 'message'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 100;
          
          if (rect.top <= offset && rect.bottom > offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navItems = [
    { id: 'works', label: 'WORKS', icon: <FaBriefcase /> },
    { id: 'about', label: 'ABOUT', icon: <FaUserAlt /> },
    { id: 'message', label: 'MESSAGE', icon: <FaEnvelope /> }
  ];
  
  return (
    <HeaderContainer>
      <Logo>
        <h1>KUWABARA<span>.</span>DEV</h1>
      </Logo>
      
      <MobileMenuButton onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuButton>
      
      <Navigation>
        <NavList>
          {navItems.map((item) => (
            <NavItem key={item.id}>
              <ScrollLink
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.icon}
                <span>{item.label}</span>
              </ScrollLink>
            </NavItem>
          ))}
          <NavItem>
            <a href="https://zenn.dev/tkwbr999" target="_blank" rel="noopener noreferrer">
              <FaBlog />
              <span>BLOG</span>
            </a>
          </NavItem>
        </NavList>
      </Navigation>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <NavList>
              {navItems.map((item) => (
                <NavItem key={item.id}>
                  <ScrollLink
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={closeMobileMenu}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </ScrollLink>
                </NavItem>
              ))}
              <NavItem>
                <a href="https://zenn.dev/tkwbr999" target="_blank" rel="noopener noreferrer">
                  <FaBlog />
                  <span>BLOG</span>
                </a>
              </NavItem>
            </NavList>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
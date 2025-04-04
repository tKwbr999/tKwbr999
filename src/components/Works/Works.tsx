import { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { worksData } from '../../data/worksData';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

const WorksSection = styled.section`
  min-height: 100vh;
  padding: var(--section-padding);
  padding-left: calc(var(--header-width) + 60px);
  position: relative;
  background-color: var(--bg-color);
  
  @media (max-width: 1279px) and (min-width: 768px) {
    padding-left: calc(var(--header-width-tablet) + 40px);
  }
  
  @media (max-width: 767px) {
    padding-left: 20px;
    padding-top: 100px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 60px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -15px;
    width: 60px;
    height: 3px;
    background-color: var(--accent-color);
  }
  
  @media (max-width: 767px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  
  @media (max-width: 767px) {
    gap: 60px;
  }
`;

const ProjectItem = styled(motion.div)`
  position: relative;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    min-height: 70vh;
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="%23d42d83"><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>') 16 16, auto;
  }
  
  &::-webkit-scrollbar {
    height: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--bg-color);
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border-radius: 10px;
  }
`;

const ProjectInfo = styled.div`
  flex: 0 0 40%;
  min-width: 40%;
  padding-right: 40px;
  scroll-snap-align: start;
  
  @media (max-width: 767px) {
    padding-right: 0;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 100%;
    height: 2px;
    background-color: var(--accent-color);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover:after {
    transform: scaleX(1);
  }
  
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  margin-bottom: 20px;
  color: var(--text-color-muted);
`;

const ProjectRole = styled.div`
  margin-bottom: 20px;
  
  span {
    font-weight: 700;
  }
`;

const ProjectPublications = styled.div`
  margin-bottom: 20px;
  
  span {
    font-weight: 700;
  }
  
  ul {
    list-style: none;
    padding-left: 0;
  }
  
  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 5px;
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 10px;
      width: 10px;
      height: 2px;
      background-color: var(--accent-color);
    }
  }
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: var(--accent-color);
  font-weight: 700;
  transition: all 0.3s ease;
  
  svg {
    margin-left: 10px;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    opacity: 0.8;
    
    svg {
      transform: translateX(5px);
    }
  }
`;

const ProjectImage = styled.div`
  flex: 0 0 70%;
  min-width: 70%;
  height: 60vh;
  scroll-snap-align: start;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  @media (max-width: 767px) {
    height: 40vh;
    margin-top: 20px;
  }
`;

const ScrollInstruction = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  right: 60px;
  display: flex;
  align-items: center;
  color: var(--text-color-muted);
  
  span {
    margin-right: 10px;
  }
  
  @media (max-width: 767px) {
    display: none;
  }
`;

const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [showInstruction, setShowInstruction] = useState(true);
  
  return (
    <WorksSection id="works" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
      >
        WORKS
      </SectionTitle>
      
      <ProjectsContainer>
        {worksData.map((project, index) => (
          <ProjectItem
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onScroll={() => setShowInstruction(false)}
          >
            <ProjectInfo>
              <ProjectTitle>
                <a href={project.link || '#'} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectRole>
                <span>担当: </span>{project.role}
              </ProjectRole>
              
              {project.publications && project.publications.length > 0 && (
                <ProjectPublications>
                  <span>掲載: </span>
                  <ul>
                    {project.publications.map((pub, idx) => (
                      <li key={idx}>{pub}</li>
                    ))}
                  </ul>
                </ProjectPublications>
              )}
              
              <ProjectLink href={project.link || '#'} target="_blank" rel="noopener noreferrer">
                詳細を見る <FaExternalLinkAlt />
              </ProjectLink>
            </ProjectInfo>
            
            <ProjectImage>
              <img src={project.imageUrl} alt={project.title} />
            </ProjectImage>
          </ProjectItem>
        ))}
      </ProjectsContainer>
      
      {showInstruction && (
        <ScrollInstruction
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span>右へスクロール</span>
          <FaArrowRight />
        </ScrollInstruction>
      )}
    </WorksSection>
  );
};

export default Works;
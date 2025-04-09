import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import styled from 'styled-components';
import { worksData } from '../../data/worksData';

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

  /* 画像がない場合はflexレイアウトや横スクロールは不要 */
  /* 必要に応じてスタイルを調整 */
  min-height: auto; /* コンテンツの高さに合わせる */
`;

const ProjectInfo = styled.div`
  /* 幅を100%に広げる */
  width: 100%;
  padding-right: 0; /* 右側のパディングを削除 */
  /* scroll-snap-align: start; 横スクロールしないので不要 */

  @media (max-width: 767px) {
    /* 既に上で padding-right: 0; にしているので不要 */
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
  /* flexレイアウトではなくなったため、flex関連のプロパティは不要 */
  /* min-width: 70%; */
  height: 60vh; /* 高さは維持 */
  /* scroll-snap-align: start; 横スクロールしないので不要 */
  position: relative;
  overflow: hidden;
  margin-top: 30px; /* 上の要素との間にマージンを追加 */

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
    /* margin-top は上で設定済み */
  }
`;

/* ScrollInstruction は不要になったため削除 */

const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  /* ScrollInstruction を削除したので不要 */
  // const [showInstruction, setShowInstruction] = useState(true);

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
            /* onScroll は不要になったため削除 */
            // onScroll={() => setShowInstruction(false)}
          >
            <ProjectInfo>
              <ProjectTitle>
                <a href={project.link || '#'} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectRole>
                <span>担当: </span>
                {project.role}
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

            {project.imageUrl && (
              <ProjectImage>
                <img src={project.imageUrl} alt={project.title} />
              </ProjectImage>
            )}
          </ProjectItem>
        ))}
      </ProjectsContainer>

      {/* ScrollInstruction は不要になったため削除 */}
    </WorksSection>
  );
};

export default Works;

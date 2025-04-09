import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiWantedly, SiZenn } from 'react-icons/si';
import styled from 'styled-components';
import { newsItems, profileInfo } from '../../data/profileData';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: var(--section-padding);
  padding-left: calc(var(--header-width) + 60px);
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 65% 30%;
  gap: 5%;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const MainContent = styled.div``;

const Subsection = styled(motion.div)`
  margin-bottom: 60px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SubsectionTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 2px;
    background-color: var(--accent-color);
  }
`;

const Bio = styled.p`
  margin-bottom: 30px;
  line-height: 1.8;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  margin-bottom: 30px;
`;

const SkillItem = styled.li`
  background-color: rgba(212, 45, 131, 0.1);
  color: var(--accent-color);
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const ExperienceList = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    height: 100%;
    width: 1px;
    background-color: #444;
  }
`;

const ExperienceItem = styled.div`
  position: relative;
  padding-left: 40px;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--accent-color);
    z-index: 1;
  }
`;

const ExperienceCompany = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const ExperienceRole = styled.div`
  font-size: 1rem;
  color: var(--accent-color);
  margin-bottom: 5px;
`;

const ExperiencePeriod = styled.div`
  font-size: 0.9rem;
  color: var(--text-color-muted);
  margin-bottom: 10px;
`;

const ExperienceDescription = styled.p`
  font-size: 0.95rem;
`;

const Sidebar = styled.div``;

const NewsList = styled.div``;

const NewsItem = styled(motion.div)`
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #444;

  &:last-child {
    border-bottom: none;
  }
`;

const NewsDate = styled.div`
  font-size: 0.9rem;
  color: var(--accent-color);
  margin-bottom: 10px;
`;

const NewsTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

const NewsContent = styled.p`
  font-size: 0.95rem;
  color: var(--text-color-muted);
`;

const QRCodeSection = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const QRCodeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const QRCode = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: #fff;
  padding: 5px;
`;

const QRCodeInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const QRCodeTitle = styled.h5`
  font-size: 1rem;
  margin-bottom: 5px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`;

const QRCodeDescription = styled.p`
  font-size: 0.9rem;
  color: var(--text-color-muted);
`;

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const baseUrl = import.meta.env.BASE_URL;

  return (
    <AboutSection id="about" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
      >
        ABOUT
      </SectionTitle>

      <AboutContent>
        <MainContent>
          <Subsection
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SubsectionTitle>このサイトについて</SubsectionTitle>
            <Bio>
              「AI"も"使えるエンジニア」として、フルスタックエンジニア桑原崇のポートフォリオサイトです。バックエンド開発を中心としたスキルと経験、個人制作物、技術記事を紹介しています。
            </Bio>
          </Subsection>

          <Subsection
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SubsectionTitle>プロフィール</SubsectionTitle>
            <Bio>{profileInfo.bio}</Bio>

            <SkillsList>
              {profileInfo.skills.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </SkillsList>

            <ExperienceList>
              {profileInfo.experience.map((exp, index) => (
                <ExperienceItem key={index}>
                  <ExperienceCompany>{exp.company}</ExperienceCompany>
                  <ExperienceRole>{exp.role}</ExperienceRole>
                  <ExperiencePeriod>{exp.period}</ExperiencePeriod>
                  <ExperienceDescription>{exp.description}</ExperienceDescription>
                </ExperienceItem>
              ))}
            </ExperienceList>
          </Subsection>

          <Subsection
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SubsectionTitle>ビジョン</SubsectionTitle>
            <Bio>
              SIerとしての経験から、Webエンジニア、そして最新のAI技術を活用したフルスタックエンジニアへと進化してきました。技術の変化が激しい現代において、常に新しい技術や開発手法を取り入れ、時代に合わせたプロダクト開発を目指しています。
            </Bio>
            <Bio>
              マイクロサービスアーキテクチャやクラウドネイティブな開発、AIを活用した効率化など、最新のトレンドを取り入れながらも、基本となるクリーンアーキテクチャやDDDの考え方を大切にしています。
            </Bio>
            <Bio>
              今後は個人プロダクト開発も積極的に進め、TypeScript+React+Next.jsを中心としたフロントエンド技術と、Goを中心としたバックエンド技術の両面でスキルを磨き、Webサービス開発のフルスタック化を目指しています。
            </Bio>
          </Subsection>
        </MainContent>

        <Sidebar>
          <Subsection
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <SubsectionTitle>お知らせ</SubsectionTitle>
            <NewsList>
              {newsItems.map((news, index) => (
                <NewsItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <NewsDate>{news.date}</NewsDate>
                  <NewsTitle>{news.title}</NewsTitle>
                  <NewsContent>{news.content}</NewsContent>
                </NewsItem>
              ))}
            </NewsList>
          </Subsection>

          <Subsection
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <SubsectionTitle>SNS</SubsectionTitle>
            <QRCodeSection>
              <QRCodeContainer>
                <QRCode src={`${baseUrl}wantedly-qr.png`} alt="Wantedlyプロフィール" />
                <QRCodeInfo>
                  <QRCodeTitle>
                    <SiWantedly /> Wantedly
                  </QRCodeTitle>
                  <QRCodeDescription>職務経歴や実績の詳細はこちら</QRCodeDescription>
                </QRCodeInfo>
              </QRCodeContainer>

              <QRCodeContainer>
                <QRCode src={`${baseUrl}x-qr.png`} alt="X (Twitter)プロフィール" />
                <QRCodeInfo>
                  <QRCodeTitle>
                    <FaGithub /> X (Twitter)
                  </QRCodeTitle>
                  <QRCodeDescription>最新の活動や業界情報を発信</QRCodeDescription>
                </QRCodeInfo>
              </QRCodeContainer>

              <QRCodeContainer>
                <QRCode src={`${baseUrl}zenn-qr.png`} alt="Zenn技術ブログ" />
                <QRCodeInfo>
                  <QRCodeTitle>
                    <SiZenn /> Zenn
                  </QRCodeTitle>
                  <QRCodeDescription>技術記事やチュートリアルを公開</QRCodeDescription>
                </QRCodeInfo>
              </QRCodeContainer>
            </QRCodeSection>
          </Subsection>
        </Sidebar>
      </AboutContent>
    </AboutSection>
  );
};

export default About;

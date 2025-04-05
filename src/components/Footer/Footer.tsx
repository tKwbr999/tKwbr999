import styled from "styled-components";
import { FaGithub, FaTwitter, FaRegStickyNote } from "react-icons/fa";
import { SiZenn, SiWantedly } from "react-icons/si";
import { motion } from "framer-motion";
import { socialLinks } from "../../data/profileData";

const FooterContainer = styled.footer`
  padding: 60px;
  padding-left: calc(var(--header-width) + 60px);
  background-color: var(--bg-color);
  border-top: 1px solid #333;

  @media (max-width: 1279px) and (min-width: 768px) {
    padding-left: calc(var(--header-width-tablet) + 40px);
    padding: 40px;
  }

  @media (max-width: 767px) {
    padding: 40px 20px;
    padding-left: 20px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
  }
`;

const Copyright = styled.div`
  color: var(--text-color-muted);
  font-size: 0.9rem;

  a {
    color: var(--accent-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialLink = styled(motion.a)`
  font-size: 1.5rem;
  color: var(--text-color);

  &:hover {
    color: var(--accent-color);
  }
`;

const Footer = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "FaTwitter":
        return <FaTwitter />;
      case "FaGithub":
        return <FaGithub />;
      case "SiZenn":
        return <SiZenn />;
      case "SiWantedly":
        return <SiWantedly />;
      case "SiNote":
        return <FaRegStickyNote />;
      default:
        return null;
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          © 2025 <a href="#/">KUWABARA.DEV</a> All Rights Reserved.
        </Copyright>

        <SocialLinks>
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {getIconComponent(link.icon)}
            </SocialLink>
          ))}
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

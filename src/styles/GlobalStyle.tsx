import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --base-color: #666;
    --bg-color: #111;
    --bg-color-light: #333;
    --accent-color: #d42d83;
    --text-color: #fff;
    --text-color-muted: #aaa;
    --header-width: 220px;
    --header-width-tablet: 150px;
    --header-height-mobile: 80px;
    --section-padding: 120px 60px;
    --gutter: 30px;
    
    @media (max-width: 1279px) {
      --section-padding: 100px 40px;
      --gutter: 20px;
    }
    
    @media (max-width: 767px) {
      --section-padding: 80px 20px;
      --gutter: 15px;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 16px;
    font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--bg-color);
    overflow-x: hidden;
  }

  body {
    margin: 0;
    display: block;
    min-height: 100vh;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--accent-color);
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.3;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background-color: var(--accent-color);
    color: white;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-color);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--base-color);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--accent-color);
  }

  /* Utilities */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

export default GlobalStyle;
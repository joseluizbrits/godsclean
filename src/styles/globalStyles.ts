import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --bg: #D4E1F9;
    --text: #4169AB;
    --emphasis: #224C8F;
    /* --gradient: linear-gradient(to right, #692FA4, #764BA2, #8659B4); */
    --small: clamp(1rem, 1.125vw, 1.125rem);
    --medium: clamp(1.125rem, 1.5vw, 1.5rem);
    --large: clamp(1.75rem, 2.5vw, 2.5rem);
    --x-large: clamp(1.875rem, 3vw, 3rem);
    --xx-large: clamp(2rem, 3.5vw, 3.5rem);
  }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background: var(--background);
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  input, textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none;
  }

  input:focus, textarea:focus {
    border: none;
    box-shadow: none;
    outline-style: none;
  }

  .padding-space {
    padding: 0 120px;
  }

  .margin-space {
    margin: 0 120px;
  }

  /* ---------- SCROLLBAR ---------- */

  *::-webkit-scrollbar,
  body::-webkit-scrollbar,
  html::-webkit-scrollbar {
    background: var(--bg);
    width: 12px;
    height: 12px;
  }

  *::-webkit-scrollbar-thumb,
  body::-webkit-scrollbar-thumb,
  html::-webkit-scrollbar-thumb {
    background: var(--bg);
    border-radius: 5px;
    border: 1px solid var(--white);
  }

  *::-webkit-scrollbar-thumb:hover,
  body::-webkit-scrollbar-thumb:hover,
  html::-webkit-scrollbar-thumb:hover {
    background: var(--white);
  }

  @media screen and (max-width: 1440px) {
    .padding-space {
      padding: 0 80px;
    }

    .margin-space {
      margin: 0 80px;
    }
  }

  @media screen and (max-width: 1024px) {
    .padding-space {
      padding: 0 40px;
    }

    .margin-space {
      margin: 0 40px;
    }
  }

  @media screen and (max-width: 768px) {
    .padding-space {
      padding: 0 20px;
    }

    .margin-space {
      margin: 0 20px;
    }
  }

  @media screen and (max-width: 480px) {
    .padding-space {
      padding: 0 20px;
    }

    .margin-space {
      margin: 0 20px;
    }
  }
`;

export default GlobalStyles;

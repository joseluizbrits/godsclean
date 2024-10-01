import styled from "styled-components";

export const IntroductionContainer = styled.section`
  ul {
    height: 85vh;
    position: relative;
  }

  li {
    width: 180px;
    height: 180px;
    border-radius: 100%;
    background-color: var(--white);
    border: 1px solid var(--bg);
    box-shadow: 0 0 8px 0 #b6caea;

    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  li span {
    font-weight: 500;
    font-size: 1.15rem;
    letter-spacing: 0.05rem;
    line-height: 1.25em;
    text-align: center;
    color: var(--text);
    max-width: 10ch;
  }

  #label-1 {
    left: 60%;
    top: 10%;
  }

  #label-2 {
    left: 25%;
    top: 20%;
  }

  #label-3 {
    left: 80%;
    top: 55%;
  }

  #label-4 {
    left: 50%;
    top: 75%;
  }

  .image-container {
    width: 100vw;
    height: 65vh;
    position: relative;
    margin-left: -42vw;
    margin-top: -35vh;

    img {
      object-fit: contain;
    }
  }
`;

import styled from "styled-components";

export const IntroductionContainer = styled.section`
  ul {
    height: 85vh;
    position: relative;
  }

  li {
    width: clamp(180px, 12vw, 300px);
    height: clamp(180px, 12vw, 300px);
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
    font-size: clamp(1.15rem, 1.25vw, 1.5rem);
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
    left: 56%;
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

  @media screen and (min-width: 1680px) {
    #label-3 {
      top: 50%;
    }

    #label-4 {
      left: 55%;
    }
  }

  @media screen and (max-width: 1280px) {
    #label-1 {
      left: 41%;
      top: 10%;
    }

    #label-2 {
      left: 9%;
      top: 32%;
    }

    #label-3 {
      left: 70%;
      top: 40%;
    }

    #label-4 {
      left: 58%;
      top: 82%;
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      height: 65vh;
    }

    #label-2 {
      left: 7%;
      top: 25%;
    }

    #label-3 {
      left: 65%;
      top: 37%;
    }

    #label-4 {
      left: 30%;
      top: 51%;
    }

    .image-container {
      width: 120vw;
    }
  }
`;

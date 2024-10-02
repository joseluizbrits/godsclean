import styled from "styled-components";

export const ProcessContainer = styled.section`
  h2 {
    line-height: 1.25em;
  }

  ul {
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  li {
    padding: 8px;
    border-radius: 10px;
    background-image: radial-gradient(#f3f5fa, #b5cffe);
    transition: 0.3s ease-out;
  }

  li > div {
    height: 100%;
    padding: 28px;
    padding-bottom: 56px;
    border: 1px solid #a7c9ff;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  span {
    font-size: 2rem;
    color: var(--white);
    max-width: 25%;
    padding-bottom: 6px;
    border-bottom: 3px solid var(--white);
  }

  h3 {
    font-weight: 500;
    font-size: 2rem;
    color: var(--text);
  }

  p {
    font-size: 1.15rem;
    color: var(--text);
  }

  p + p {
    padding-top: 16px;
  }

  @media screen and (max-width: 1080px) {
    ul {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 140px;
  }
`;

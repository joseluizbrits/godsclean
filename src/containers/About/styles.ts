import styled from "styled-components";

export const AboutContainer = styled.section`
  background-image: linear-gradient(var(--bg), var(--white) 90%);

  > :nth-child(2) {
    margin-top: 120px;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 64px;
  }

  h3 {
    font-weight: 500;
    font-size: 3rem;
    letter-spacing: 0.02rem;
    line-height: 1.1em;
    color: var(--text);
    max-width: 18ch;
    margin-bottom: 56px;
  }

  > :nth-child(2) p {
    font-size: 1.15rem;
    line-height: 1.15em;
    color: var(--text);
  }

  > :nth-child(2) p + p {
    padding-top: 32px;
  }

  ul {
    margin: 120px 64px 0 64px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  li {
    background-color: #386cd2;
    padding: 40px;
    border-radius: 10px;

    display: grid;
    place-items: center;
    gap: 8px;
  }

  li h4 {
    font-weight: 600;
    font-size: 2rem;
    letter-spacing: 0.05rem;
    color: var(--white);
  }

  li p {
    font-size: 1.15rem;
    text-align: center;
    color: var(--white);
  }

  @media screen and (max-width: 1440px) {
    padding-top: 200px;
  }

  @media screen and (max-width: 1280px) {
    h3 {
      margin-bottom: 40px;
    }

    > :nth-child(2) {
      grid-template-columns: 1fr 1.3fr;
    }

    > :nth-child(2) p + p {
      padding-top: 20px;
    }

    ul {
      margin: 0;
      margin-top: 80px;
    }
  }

  @media screen and (max-width: 768px) {
    > :nth-child(2),
    ul {
      grid-template-columns: 1fr;
    }
  }
`;

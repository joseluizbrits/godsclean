import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  display: grid;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 400;
    font-size: 6rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    color: var(--white);
    margin-bottom: 80px;

    grid-area: 1/1;
    z-index: 1;
  }

  span {
    color: var(--text);
    font-size: 14px;
    letter-spacing: 0.05rem;
    max-width: 45ch;
    margin-bottom: 40px;
    opacity: 0.5;

    position: absolute;
    bottom: 0;
    z-index: 1;
  }

  img {
    object-fit: cover;
  }
`;

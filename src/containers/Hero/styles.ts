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
    font-size: clamp(5rem, 6vw, 7.5rem);
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: var(--white);
    margin-bottom: 80px;

    grid-area: 1/1;
    z-index: 1;
  }

  span {
    color: var(--text);
    letter-spacing: 0.05rem;
    max-width: 42ch;
    margin-bottom: 40px;
    opacity: 0.5;

    position: absolute;
    bottom: 0;
    z-index: 1;
  }

  img {
    object-fit: cover;
  }

  @media screen and (max-width: 1280px) {
    span {
      opacity: 0;
      pointer-events: none;
    }
  }

  @media screen and (max-width: 768px) {
    height: 75vh;

    h1 {
      font-size: 3.5rem;
      margin-bottom: -40px;
    }

    img {
      padding-top: 80px;
      object-position: 46%;
    }
  }

  @media screen and (max-width: 540px) {
    height: 75vh;

    h1 {
      font-size: 3rem;
    }
  }
`;

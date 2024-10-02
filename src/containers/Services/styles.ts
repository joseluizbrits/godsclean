import styled from "styled-components";

export const ServicesContainer = styled.section`
  background-image: linear-gradient(var(--bg), var(--white) 35% 80%, var(--bg));
  margin-top: -40px;

  h3 {
    font-weight: 500;
    font-size: clamp(2.15rem, 3vw, 3.25rem);
    letter-spacing: 0.02rem;
    line-height: 1.1em;
    color: var(--text);
    max-width: 11ch;
    margin-bottom: 64px;
  }

  .content {
    margin-top: 120px;
    display: grid;
    grid-template-columns: 1fr 2.5fr;
    gap: 80px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  li {
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
    gap: 20px;
  }

  li p {
    font-size: 1.15rem;
    line-height: 1.35em;
    color: var(--text);

    strong {
      font-size: 1.15rem;
      color: var(--highlight);
      margin-right: 6px;
    }

    em {
      font-weight: 600;
      font-style: normal;
    }
  }

  .images {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 8px;
  }

  .images > div {
    position: relative;

    img {
      object-fit: cover;
      border-radius: 2px;
    }
  }

  .images > div:not(:nth-child(1)) {
    aspect-ratio: 3/2;
    max-width: 300px;
  }

  #img-1 {
    grid-column: span 2;
    grid-row: span 2;
  }

  #img-2 {
    margin-top: 40px;
  }

  #img-3 {
    margin-bottom: 40px;
  }

  #img-4 {
    margin-left: 56px;
  }

  #img-5 {
    margin-right: 40px;
  }

  @media screen and (max-width: 1680px) {
    .images > div:not(:nth-child(1)) {
      aspect-ratio: initial;
      height: 160px;
    }
  }

  @media screen and (max-width: 1440px) {
    padding-top: 200px;

    .content {
      gap: 64px;
    }

    .images {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    #img-1 {
      grid-column: 1;
    }
  }

  @media screen and (max-width: 1080px) {
    h3 {
      margin-bottom: 40px;
    }

    .content {
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    ul {
      gap: 20px;
    }

    li p {
      font-size: 1rem;

      strong {
        font-size: 1.2rem;
      }
    }

    .images > :nth-child(1) {
      display: none;
    }

    .images > div:not(:nth-child(1)) {
      height: auto;
    }

    #img-2 {
      margin-top: 0;
    }

    #img-3 {
      margin-bottom: 0;
    }
    #img-4 {
      margin-left: 0;
    }

    #img-5 {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 80px;

    .content {
      margin-top: 80px;
    }
  }

  @media screen and (max-width: 480px) {
    padding-top: 64px;

    h2 {
      max-width: 10ch;
    }

    li {
      align-items: start;
    }

    svg {
      margin-top: 6px;
    }
  }
`;

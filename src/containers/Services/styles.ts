import styled from "styled-components";

export const ServicesContainer = styled.section`
  background-image: linear-gradient(var(--bg), var(--white) 35% 65%, var(--bg));
  margin-top: -40px;

  h3 {
    font-weight: 500;
    font-size: 3.5rem;
    letter-spacing: 0.02rem;
    line-height: 1.1em;
    color: var(--text);
    max-width: 9ch;
    margin-bottom: 64px;
  }

  .content {
    margin-top: 120px;
    display: grid;
    grid-template-columns: 1fr 2.5fr;
    gap: 120px;
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
    color: var(--text);
    line-height: 1.15em;

    strong {
      font-size: 1.15rem;
      color: var(--highlight);
      margin-right: 6px;
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
`;

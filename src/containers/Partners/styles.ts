import styled from "styled-components";

export const PartnersContainer = styled.section`
  ul {
    display: flex;
    justify-content: center;
    gap: 40px;

    margin-top: 80px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  li {
    max-width: 200px;
    min-width: 160px;
    background-color: #dfe8fa;

    border-radius: 100%;
    aspect-ratio: 1/1;
    flex: 1;
    position: relative;
  }

  img {
    object-fit: cover;
  }

  @media screen and (max-width: 1440px) {
    padding-top: 200px;
  }

  @media screen and (max-width: 992px) {
    ul {
      justify-content: start;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 140px;

    ul {
      margin-top: 48px;
      gap: 12px;
    }
  }
`;

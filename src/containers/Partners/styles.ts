import styled from "styled-components";

export const PartnersContainer = styled.section`
  margin-bottom: 200px;

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
    min-width: 120px;
    background-color: #dfe8fa;

    border-radius: 100%;
    aspect-ratio: 1/1;
    flex: 1;
    position: relative;
  }

  img {
    object-fit: cover;
  }
`;

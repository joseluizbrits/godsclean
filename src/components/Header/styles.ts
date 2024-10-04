import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }

  li {
    letter-spacing: 0.05rem;
    color: var(--text);
  }

  ul :last-child a {
    padding: 16px 16px 8px 16px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--text);
    border-radius: 5px;
    cursor: pointer;

    transition: 0.3s ease-out;
    position: relative;

    &::after {
      content: "";
      width: 71%;
      height: 2.5px;
      background-color: var(--text);

      transition: 0.3s ease-out;
      position: absolute;
      bottom: 0;
      left: 14.5%;
    }
  }

  @media screen and (min-width: 1440px) {
    ul :last-child a:hover {
      color: var(--emphasis);

      &::after {
        width: 5%;
        left: 47%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    ul :last-child a {
      padding-right: 0;

      &::after {
        width: 83%;
        left: 16.5%;
      }
    }
  }
`;

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
    cursor: pointer;
    position: relative;

    &::after {
      content: "";
      width: 71%;
      height: 2.5px;
      background-color: var(--text);

      position: absolute;
      bottom: 0;
      left: 14.5%;
    }
  }
`;

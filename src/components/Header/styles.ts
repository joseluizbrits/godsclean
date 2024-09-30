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
    padding: 6px 0;
    font-weight: 600;
    text-transform: uppercase;
    border-bottom: solid 3px var(--text);
    cursor: pointer;
  }
`;

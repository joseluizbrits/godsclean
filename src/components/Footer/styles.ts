import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--white);
  padding-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > :first-child {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  span {
    color: var(--text);
    letter-spacing: 0.05rem;
  }

  > :first-child span {
    text-transform: uppercase;
  }

  a {
    text-decoration: underline;
    color: var(--text);
  }
`;

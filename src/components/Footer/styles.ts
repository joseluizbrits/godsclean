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
    display: block;
    color: var(--text);
    letter-spacing: 0.05rem;
  }

  > :first-child span {
    text-transform: uppercase;
  }

  span a {
    text-decoration: underline;
    color: var(--text);
  }

  @media screen and (max-width: 1440px) {
    padding-top: 200px;
  }

  @media screen and (max-width: 1080px) {
    flex-direction: column;
    gap: 20px;

    span {
      text-align: center;
    }
  }
`;

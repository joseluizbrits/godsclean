import styled from "styled-components";

export const TitleContainer = styled.div`
  &,
  &.centered div {
    display: flex;
    flex-direction: column;
  }

  &.centered div {
    align-items: center;

    p {
      text-align: center;
    }
  }

  h2 {
    font-size: 4rem;
    letter-spacing: 0.05rem;
    color: var(--emphasis);
  }

  p {
    font-size: 1.25rem;
    line-height: 1.15em;
    color: var(--text);
    max-width: 45ch;
    margin-top: 16px;
  }
`;

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

    h2 {
      text-align: center;
    }
  }

  h2 {
    font-weight: 500;
    font-size: clamp(2.5rem, 3.5vw, 3.5rem);
    letter-spacing: 0.05rem;
    line-height: 1.25em;
    color: var(--emphasis);
  }

  p {
    font-size: 1.25rem;
    line-height: 1.35em;
    color: var(--text);
    max-width: 50ch;
    margin-top: 8px;
  }

  @media screen and (max-width: 1080px) {
    p {
      margin-top: 16px;
    }
  }
`;

import styled from "styled-components";

export const FAQContainer = styled.section`
  background-image: linear-gradient(var(--bg), var(--white) 70%);

  ul {
    margin: 80px 200px 0 200px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  li {
    border-radius: 10px;
    border: 1px solid #aabcde;
  }

  li div {
    padding: 24px;
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    font-weight: 500;
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
    color: var(--emphasis);
  }

  p {
    font-size: 1.15rem;
    line-height: 1.25em;
    color: var(--emphasis);
    height: 0;
    opacity: 0;
    pointer-events: none;
  }

  .active p {
    padding: 0 24px 24px 24px;
    height: max-content;
    opacity: 1;
    pointer-events: initial;
  }

  .active svg {
    rotate: 180deg;
  }
`;

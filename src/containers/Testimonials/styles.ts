import styled from "styled-components";

export const TestimonialsContainer = styled.section`
  background-image: linear-gradient(var(--white) 70%, var(--bg));
  overflow: hidden;

  .swiper-wrapper {
    display: flex;
    width: fit-content;
    margin-top: 80px;
    cursor: grab;
  }

  .swiper-slide {
    background-color: var(--bg);
    padding: 28px;
    border-radius: 10px;
  }

  .swiper-slide > :first-child {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

  h3 {
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
    color: var(--text);
  }

  a {
    font-size: 0.875rem;
    color: var(--text);
    position: relative;
  }

  a::after {
    content: "";
    width: 100%;
    height: 0.5px;
    background-color: var(--text);

    position: absolute;
    bottom: 0;
    left: 0;
  }

  p {
    font-size: 1.15rem;
    line-height: 1.5em;
    color: var(--text);
    margin-top: 28px;
    margin-bottom: 64px;
  }

  .swiper-slide > :last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .swiper-slide > :last-child > div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .stars {
    display: flex;
    gap: 8px;
  }

  span {
    font-weight: 500;
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
    color: var(--emphasis);
  }

  .swiper-pagination {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  .swiper-pagination-bullet {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: var(--text);
    opacity: 0.1;
    transition: 0.2s ease-out;
    cursor: pointer;
  }

  .swiper-pagination-bullet-active {
    opacity: 0.6;
  }

  @media screen and (min-width: 1440px) {
    .swiper-pagination-bullet:hover {
      opacity: 0.3;
    }

    .swiper-pagination-bullet-active:hover {
      opacity: 0.6;
    }

    a:hover {
      color: var(--emphasis);
    }
  }

  @media screen and (max-width: 1440px) {
    padding-top: 200px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 160px;

    .swiper-wrapper {
      margin-top: 56px;
    }
  }

  @media screen and (max-width: 480px) {
    .swiper-slide > :first-child {
      flex-direction: column;
      gap: 4px;
    }

    p {
      margin-top: 40px;
      margin-bottom: 64px;
    }
  }
`;

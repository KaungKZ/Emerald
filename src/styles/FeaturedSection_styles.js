import styled from "styled-components";

export const FeaturedBanner = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.35);
    z-index: 0;
  }

  .gatsby-image-wrapper {
    picture img {
      object-fit: fill !important;
    }
  }

  @media (max-width: 600px) {
    .gatsby-image-wrapper {
      height: 300px;
      picture img {
        object-fit: cover !important;
      }
    }
  }
`;

export const FeaturedContent = styled.div`
  position: absolute;
  top: 40%;
  left: 20%;
  transform: translate(-20%, -40%);
  z-index: 1;
  /* height: 50%; */
  /* height: 100%; */
  width: 65%;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */

  .featured-title {
    font-family: var(--primary-font);
    font-size: 3.1rem;
    color: #fff;
    margin-bottom: 25px;
    text-transform: capitalize;
    line-height: 90px;
  }

  .btn-link {
    border: none;
  }

  @media (max-width: 1280px) {
    .featured-title {
      font-size: 2.8rem;
      line-height: 80px;
    }
  }

  @media (max-width: 1024px) {
    .featured-title {
      font-size: 2.4rem;
      line-height: initial;
    }
  }

  @media (max-width: 768px) {
    .featured-title {
      font-size: 2rem;
    }
  }

  @media (max-width: 600px) {
    .featured-title {
      font-size: 1.6rem;
    }
  }
`;

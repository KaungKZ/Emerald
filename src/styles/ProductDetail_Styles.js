import styled from "styled-components";

export const Product_Detail_Wrapper = styled.section`
  width: 100%;
  margin-bottom: 25px;
`;
export const TopSection = styled.div`
  width: 90%;
  display: flex;
  margin: var(--large-item-margin) auto;

  @media (max-width: 768px) {
    margin: var(--small-section-margin) auto;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto var(--small-section-margin) auto;
  }
`;

export const ProductHeader = styled.div`
  font-family: var(--small-title-font);
  color: var(--light-text-color);
  margin-bottom: 20px;
  max-width: 90%;

  .product-title {
    font-size: 2.2rem;
  }

  .product-by {
    font-size: 14px;
    color: var(--primary-color);
    margin: 15px 0 25px 0;

    .product-seller {
      font-weight: 700;
      color: var(--light-text-color);
      text-decoration: underline;
      cursor: pointer;
    }
  }

  @media (max-width: 1024px) {
    .product-title {
      font-size: 2rem;
    }
  }

  @media (max-width: 600px) {
    .product-title {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 480px) {
    .product-by {
      font-size: 12px;
    }
  }
`;

export const ProductImages = styled.div`
  margin-right: 7%;

  display: flex;
  flex-direction: column;

  .product-image {
    background: #ffefd0; // f2f2f2 previous
    margin-bottom: 15px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    margin-right: 0%;
    display: grid;
    grid-column-gap: 10px;
    grid-template-areas:
      "photo1 photo2"
      "photo3 photo3";

    .product-image:first-child {
      grid-area: photo1;
    }

    .product-image:nth-child(2n) {
      grid-area: photo2;
    }

    .product-image:nth-child(3n) {
      grid-area: photo3;
    }

    .product-image {
      display: flex;
      justify-content: center;
      margin: 0 auto 15px auto;
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .product-image {
      padding: 10px;

      .gatsby-image-wrapper {
        width: 145px !important;
        height: 145px !important;
        max-height: 145px !important;

        picture img {
          object-fit: contain !important;
        }
      }
    }
  }

  @media (max-width: 360px) {
    .product-image {
      .gatsby-image-wrapper {
        width: 120px !important;
        height: 120px !important;
        max-height: 120px !important;
      }
    }
  }

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ProductBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -35px;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 25px;
  }

  @media (max-width: 600px) {
    width: 90%;
    margin: 25px auto 0 auto;
  }
`;
export const ProductContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .detail-title {
    font-weight: 700;
    margin-right: 10px;
    color: var(--text-color);
    font-size: 14px;
  }

  > :not(:last-child) {
    margin-bottom: 30px;
  }

  .product-price {
    font-weight: 700;
    color: var(--light-text-color);
    font-size: 1.5rem;
    font-family: var(--secondary-font);
  }

  .product-size .product-size-description {
    font-family: var(--content-font);

    color: var(--light-text-color);
  }

  .product-size,
  .product-quantity {
    position: relative;
    display: flex;
    font-family: var(--secondary-font);
    display: flex;
    align-items: center;

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type="number"] {
      color: var(--text-color);
      -moz-appearance: textfield;
      font-family: var(--secondary-font);
    }

    input {
      width: 90px;
      height: 25px;
      line-height: 1.65;
      padding: 0;
      margin: 0;
      padding-left: 40px;
      border: 1px solid #eee;
    }

    input:focus {
      outline: 0;
    }

    .quantity-nav {
      float: left;
      position: relative;
      height: 42px;
    }

    .quantity-button {
      position: relative;
      cursor: pointer;
      border-left: 1px solid #eee;
      width: 20px;
      text-align: center;
      color: #333;
      font-size: 13px;
      font-family: "Trebuchet MS", Helvetica, sans-serif !important;
      line-height: 1.7;
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -o-user-select: none;
      user-select: none;
    }

    .quantity-button.quantity-up {
      outline: none;
      position: absolute;
      height: 25px;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      border-bottom: 1px solid #eee;
    }

    .quantity-button.quantity-down {
      outline: none;
      border-right: 1px solid #eee;
      height: 25px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border-bottom: 1px solid #eee;
      right: 70px;
    }
  }

  .product-gender {
    font-family: var(--secondary-font);
    display: flex;
    font-size: 12px;

    span {
      height: 35px;
      width: 65px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      border: 1px solid var(--grey-color);
      transition: all 300ms;
      color: var(--text-color);
      cursor: pointer;

      &:hover {
        background: var(--general-color);
        color: #fff;
      }
    }

    .active {
      background: var(--general-color);
      color: #fff;
    }
  }

  .product-description {
    max-width: 800px;
    font-family: var(--secondary-font);

    p {
      font-family: var(--content-font);
      margin-top: 25px;
      color: var(--light-text-color);
      font-size: 16px;
      line-height: 30px;
      font-weight: 400;
    }
  }

  .product-buttons {
    display: flex;
  }

  @media (max-width: 1024px) {
    .product-price {
      font-size: 1.3rem;
    }

    .product-size {
      .product-size-description {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 600px) {
    .product-description p {
      font-size: 14px;
    }

    .product-price {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    .product-size .product-size-description {
      font-size: 12px;
    }
  }

  @media (max-width: 400px) {
    .product-description p {
      font-size: 12px;
      line-height: 25px;
    }
  }

  @media (max-width: 360px) {
    .product-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .product-add-to-cart {
        margin-right: 0px;
        margin-bottom: 20px;
      }
    }
  }
`;

export const SeemoreBtn = styled.span`
  color: rgba(53, 53, 53, 0.7);
  font-size: 14px;
  font-weight: 700;
  margin-left: 10px;

  @media (max-width: 480px) {
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
export const ProductOptionWrapper = styled.div`
  position: absolute;
  top: 0;

  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
`;

export const ProductOption = styled.button`
  position: absolute;
  top: 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  cursor: pointer;
  outline: none;
  background: transparent;
  border: none;
  transition: background 200ms;
  border-radius: 50px;

  &.active {
    background: #efefef;
  }

  &:hover {
    background: #efefef;
  }
`;

export const OptionPopupStyles = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 10px;
  min-width: 130px;
  max-width: 200px;
  background: var(--general-color);
  border-radius: 4px;
  opacity: 0;
  transition: opacity 200ms ease;
  visibility: hidden;
  padding: 5px 0px;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  ul {
    li {
      list-style-type: none;
      font-size: 12px;
      padding: 4px;
      font-family: var(--small-title-font);
      cursor: pointer;
      transition: all 250ms;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(255, 255, 255, 0.9);

      &:hover {
        color: rgba(255, 255, 255, 1);
        background: rgba(255, 255, 255, 0.095);
      }
    }
  }
`;

export const BottomSection = styled.div`
  width: 90%;
  margin: 0 auto var(--large-item-margin) auto;

  @media (max-width: 600px) {
    margin: 0 auto var(--small-section-margin) auto;
  }
`;

export const BottomSectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ReviewSection = styled.div`
  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 75%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const ReviewBox = styled.div`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  margin-right: var(--item-margin);
  width: 400px;
  min-height: 250px;
  background: var(--general-color);

  @media (max-width: 1024px) {
    width: 350px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
  }

  @media (max-width: 320px) {
    padding: 15px;
  }
`;

export const ReviewTitle = styled.div`
  color: #fff;
  font-family: var(--secondary-font);
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  .rating {
    margin-right: 7px;
  }

  .rating-amount {
    letter-spacing: 1px;
    font-size: 12px;
  }
`;
export const ReviewRating = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ReviewAdd = styled.div`
  margin-top: 20px;
`;
export const ReviewInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .review-star {
    display: flex;
    margin-right: 35px;
    svg {
      margin-right: 4px;
    }
  }

  .meter {
    box-sizing: content-box;
    height: 5px; /* Can be anything */
    position: relative;
    min-width: 150px;
    background: #434343;
    border-radius: 25px;

    span {
      display: block;
      height: 100%;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      position: relative;
      overflow: hidden;
      background: #fff;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        z-index: 1;
        background-size: 50px 50px;

        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        overflow: hidden;
      }
    }
  }

  @media (max-width: 1024px) {
    .review-star {
      margin-right: 20px;
    }
  }

  @media (max-width: 360px) {
    .meter {
      min-width: initial;
      width: 100%;
    }
    .review-star {
      margin-right: 10px;
      svg {
        margin-right: 3px;
      }
    }
  }
`;

export const CommentSection = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
  }
`;
export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Comment = styled.div`
  min-width: 250px;
  min-height: 150px;
  background: #fff;
  box-shadow: rgba(229, 229, 229, 0.2) 0px 0px 0px 1px inset,
    rgba(229, 229, 229, 0.9) 0px 0px 0px 1px;
  padding: 25px;
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .comment-title,
  .comment-content {
    margin-bottom: 10px;
  }

  .comment-title {
    display: flex;
    align-items: baseline;

    .comment-name {
      font-size: 1.3rem;
      margin-right: 10px;
      font-family: var(--small-title-font);
      color: var(--text-color);
    }

    .comment-stars {
      display: flex;
    }
  }
  .comment-content,
  .comment-date {
    font-family: var(--content-font);
  }

  .comment-content {
    display: flex;
    color: var(--text-color);
    align-items: center;
    font-size: 14px;

    span {
      margin-right: 7px;
    }

    .content {
      line-height: 20px;
    }
  }

  .comment-date {
    color: var(--light-text-color);
    font-size: 12px;
    margin-left: 14.15px;
  }

  @media (max-width: 1024px) {
    padding: 18px;

    .comment-title {
      .comment-name {
        font-size: 1.2rem;
      }
    }

    .comment-content {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    .comment-content {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    .comment-title .comment-name {
      font-size: 1.1rem;
    }

    .comment-content {
      font-size: 12px;
    }
  }
`;

export const SeemoreComments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--secondary-font);
  color: var(--text-color);
  cursor: pointer;
  padding: 4px 15px;
  margin: 0 auto;
  width: fit-content;

  svg {
    transform: rotate(0deg);
    transition: transform 300ms ease-in-out;
  }

  &.hovered {
    border-radius: 3px;

    svg {
      transform: rotate(90deg);
    }
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

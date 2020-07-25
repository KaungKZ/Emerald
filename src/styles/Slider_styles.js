import styled, { css } from "styled-components";

export const Sliders = styled.div`
  display: flex;
  overflow: hidden;
  width: ${props => props.width * 3}px;
`;

export const SliderWrapper = styled.div`
width: ${props => props.width}px;
  display: ${props => props.half_content && "flex"};
  position: ${props => props.second_slider && "relative"};
  ${props => css`
    transform: translateX(-${props.transform}px);
    transition: transform ${props.transition}ms;
  `}

  /* ${SliderContent} {
    position: absolute;
  } */

  ${props =>
    props.half_content &&
    css`
      flex-direction: row;
      justify-content: space-between;
    `}

  /* .slider-banner {
    width: ${props => (props.half_content ? "70%" : "100%")};
  } */
`;

// const SliderOne = styled.div`

// `;
export const SliderTitle = styled.div`
  font-family: var(--secondary-font);
  text-transform: capitalize;

  &.white {
    h1,
    h3 {
      color: #fff;
    }
    h3 {
      opacity: 0.75;
    }
  }

  &.black {
    h1 {
      color: var(--general-color);
    }

    h3 {
      color: var(--light-text-color);
    }
  }

  h1 {
    font-size: 36px;
    margin-bottom: 25px;
  }

  h3 {
    font-size: var(--normal-text);
    opacity: 0.8;
    font-weight: 400;
    margin-bottom: var(--item-margin);
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 28px;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 14px;
      margin-bottom: 35px;
    }
  }
`;

export const SliderBanner = styled.div`
  width: ${props => (props.half_content ? "60%" : "100%")};
  position: relative;

  .gatsby-image-wrapper {
    height: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  ${props =>
    props.second_slider &&
    css`
      position: absolute;
      top: 50%;
      transform: translate(-10%, -50%);
      left: 10%;
      z-index: 1;
    `};

  &.bg-pink {
    background: var(--primary-light);
  }
  &.bg-white {
    background: #fff;
  }
  /* &:first-child {
    background: var(--primary-light);
  } */
  ${props =>
    props.half_content &&
    css`
      padding: 50px;
    `}

  .no-border {
    border: none;
  }

  @media (max-width: 1024px) {
    ${props =>
      props.half_content &&
      css`
        padding: 30px;
      `}
  }
`;

export const WrapperSliderNavigators = styled.div`
  display: flex;
  position: absolute;
  top: 90%;
  left: 60%;
  transform: translate(-60%, -90%);
`;

export const SliderNavigator = styled.span`
  width: 30px;
  height: 2px;
  background: #fff;
  opacity: ${props => (props.active ? "1" : "0.75")};

  &:not(:last-child) {
    margin-right: 7px;
  }
`;

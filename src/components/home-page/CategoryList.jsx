import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
// import {
//   Category,
//   CategoryTitle,
//   CategoryBanner,
// } from "../../styles/Category_styles";

const Category = styled.div`
  position: relative;
  height: 300px;
  border-radius: 4px;
  /* cursor: pointer; */
  overflow: hidden;
  &:hover {
    ${CategoryBanner} {
      .gatsby-image-wrapper {
        transform: scale(1.05);
      }
    }
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const CategoryTitle = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -90%);
  font-family: var(--secondary-font);

  a {
    text-decoration: none;
    color: var(--light-text-color);
    font-size: 14px;
    font-weight: 700;
    padding: 5px 35px;
    background: #f4f4f4;
    text-transform: capitalize;
    border-radius: 5px;
    transition: background 400ms;

    &:hover {
      background: #fff;
    }
  }
`;

const CategoryBanner = styled.div`
  position: relative;
  height: 100%;

  .gatsby-image-wrapper {
    transition: transform 400ms;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.3;
    z-index: 1;
  }

  @media (max-width: 768px) {
    .gatsby-image-wrapper {
      width: 200px !important;
      height: 250px !important;
    }
  }
`;

export default function CategoryList({ classNames, image }) {
  classNames = classNames.split(" ")[0];
  // console.log(classNames);
  return (
    <Category>
      <CategoryTitle>{<Link to="/products">{classNames}</Link>}</CategoryTitle>
      <CategoryBanner>{<Img fixed={image}></Img>}</CategoryBanner>
    </Category>
  );
}

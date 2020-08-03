import React from "react";
import { Link } from "gatsby";
// import Images from "./Images";
import Img from "gatsby-image";
import { Icon } from "@iconify/react";
import heartOutlined from "@iconify/icons-ant-design/heart-outlined";
import styled from "styled-components";
// import { Icon, InlineIcon } from '@iconify/react';
import starFilled from "@iconify/icons-ant-design/star-filled";

const ShowcaseProduct = styled.div`
  min-width: 250px;
  min-height: 350px;
  /* width: 250px;
  height: 350px; */
  border: 1px solid rgba(90, 90, 90, 0.4);
  border-radius: 9px;
  position: relative;
  transition: box-shadow 400ms;

  &.swipe-active {
    pointer-events: none;
  }

  &:not(:last-child) {
    margin-right: var(--large-item-margin);
  }

  &:first-child {
    margin-left: 75px;
  }

  &:last-child {
    /* margin-right: 5%; */
    position: relative;

    &::after {
      content: "";
      /* margin-right: 100px; */
      clear: both;
      position: absolute;
      display: block;
      top: 0;
      left: 100%;
      width: 75px;
      height: 1px;
    }
  }

  &:hover {
    /* filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15)) */
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  }

  /* &:first-child {
    margin-left: 20%
  } */

  @media (max-width: 768px) {
    min-width: 200px;
    min-height: 270px;

    &:hover {
      box-shadow: none;
    }
  }

  @media (max-width: 600px) {
    &:not(:last-child) {
      margin-right: 75px;
    }
    /* &:first-child {
      margin-left: 50px;
    }
    &:last-child::after {
      width: 50px;
    } */
  }
`;

const ShowcaseProductLink = styled(Link)`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  /* justify-content: space-between; */
`;

const ShowcaseProductImage = styled.div`
  padding: 10px 7px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f9f9f9;
    z-index: -1;
  }

  @media (max-width: 1024px) {
    padding: 5px 4px;
  }

  @media (max-width: 768px) {
    .gatsby-image-wrapper {
      height: 100px !important;
      width: 100px !important;
    }
  }
  /* margin-bottom: 10px; */
`;

const ShowcaseProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100%;  */
  flex: 1;
  justify-content: space-between;
  padding: 10px 15px 40px 15px;

  /* & * {
    text-decoration: none;
  } */

  .item-title {
    font-family: var(--small-title-font);
    font-size: var(--normal-text);
    color: var(--text-color);
    text-transform: capitalize;
    text-align: center;
  }

  .item-by,
  .item-rating,
  .item-price {
    font-family: var(--secondary-font);
  }

  .item-by {
    color: var(--primary-color);
    font-size: 12px;

    span {
      color: var(--light-text-color);
      text-decoration: underline;
      text-transform: uppercase;
      margin-left: var(--small-margin);
      font-weight: 700;
    }
  }

  .item-rating {
    font-size: 12px;
    color: var(--light-text-color);
    display: flex;
    align-items: center;

    .rating-icon {
      margin-right: var(--small-margin);
    }
  }

  .item-price {
    font-size: var(--normal-text);
    color: var(--text-color);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    padding: 10px 15px 20px 15px;
    .item-title,
    .item-price {
      font-size: 14px !important;
    }
    .item-by,
    .item-rating {
      font-size: 10px;
    }
  }

  /* @media (max-width: 480px) {
    .item-title,
    .item-price {
      font-size: 14px !important;
    }
    .item-by,
    .item-rating {
      font-size: 10px;
    }
  } */
`;

const ShowcaseATW = styled.div`
  position: absolute;
  top: 87%;
  right: 10%;
  /* transform: translate(10%, -90%); */
  background: rgba(255, 239, 208, 0.8);
  border-radius: 25px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 300ms, transform 400ms;

  &:hover {
    background: rgba(255, 239, 208, 1);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: 83%;
    width: 28px;
    height: 28px;
    &:hover {
      background: rgba(255, 239, 208, 0.8);
      transform: scale(1);
    }
  }
`;

const ShowcaseToolTip = styled.div``;

export default function ProductList({ details, pointerNone }) {
  // console.log(details);
  return (
    <ShowcaseProduct className={`${pointerNone ? "swipe-active" : ""}`}>
      <ShowcaseProductLink
        to={`/product/${details.id}`}
        state={{ item: details }}
      >
        {details.images.length > 0 ? (
          <ShowcaseProductImage>
            <Img
              fixed={details.images[0].fixed}
              style={{ maxHeight: "150px" }}
            />
          </ShowcaseProductImage>
        ) : (
          <div className="no-image-for-item">
            there is not image for this item
          </div>
        )}

        {/* {console.log(details.title.length)} */}

        <ShowcaseProductDetails>
          <h3 className="item-title">
            {details.title.length > 20
              ? details.title.substring(0, 20).concat(" ...")
              : details.title}
          </h3>
          <span className="item-by">
            By<span>{details.by}</span>
          </span>
          <span className="item-rating">
            <Icon
              icon={starFilled}
              className="rating-icon"
              style={{ color: "#e0cca7", fontSize: "17px" }}
            />
            <span>
              {details.rating} (
              {details.ratingAmount.toString().substring(0, 3) +
                " " +
                details.ratingAmount.toString().substring(3)}
              )
            </span>
          </span>
          <span className="item-price">${details.price}</span>
        </ShowcaseProductDetails>
      </ShowcaseProductLink>

      <ShowcaseATW>
        <Icon
          icon={heartOutlined}
          style={{ color: "#606060", fontSize: "15px" }}
          className="add-to-wishlist-icon"
        />
      </ShowcaseATW>

      <ShowcaseToolTip>
        <p></p>
      </ShowcaseToolTip>

      {/* </div> */}
    </ShowcaseProduct>
  );
}

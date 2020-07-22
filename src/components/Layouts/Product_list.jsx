import React from "react";
import { Link } from "gatsby";
// import Images from "./Images";
import Img from "gatsby-image";
import { Icon } from "@iconify/react";
import heartOutlined from "@iconify/icons-ant-design/heart-outlined";
import styled from "styled-components";

const ShowcaseProduct = styled.div`
  width: 250px;
  height: 350px;
  border: 1px solid rgba(90, 90, 90, 0.4);
  border-radius: 9px;

  &:not(:last-child) {
    margin-right: var(--large-item-margin);
  }

  &:first-child {
    margin-left: 5%;
  }

  &:last-child {
    margin-right: 5%;
  }

  /* &:first-child {
    margin-left: 20%
  } */
`;

const ShowcaseProductLink = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: column;

  /* justify-content: space-between; */
`;

const ShowcaseProductImage = styled.div`
  padding: 10px 0 15px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShowcaseProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100%;  */
  flex: 1;
`;

export default function ProductList({ details }) {
  // console.log(details);
  return (
    <ShowcaseProduct>
      <ShowcaseProductLink
        to={`/product/${details.id}`}
        state={{ item: details }}
        style={{ display: "block" }}
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

        <ShowcaseProductDetails>
          <h3 className="item-title">{details.title}</h3>
          <span className="item-by">By{details.by}</span>
          <span className="item-rating">
            rating: {details.rating}({details.ratingAmount})
          </span>
          <span className="item-price">${details.price}</span>
        </ShowcaseProductDetails>
      </ShowcaseProductLink>

      <div className="add-to-wishlist">
        <Icon
          icon={heartOutlined}
          style={{ color: "#606060", fontSize: "15px" }}
          className="add-to-wishlist-icon"
        />
      </div>
      {/* </div> */}
    </ShowcaseProduct>
  );
}

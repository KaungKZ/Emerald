import React from "react";
import { Link } from "gatsby";
// import Images from "./Images";
import Img from "gatsby-image";
import { Icon, InlineIcon } from "@iconify/react";
import heartOutlined from "@iconify/icons-ant-design/heart-outlined";

export default function ProductList({ details }) {
  console.log(details);
  return (
    <div className="item">
      <Link
        to={`/product/${details.id}`}
        state={{ item: details }}
        style={{ display: "block" }}
      >
        {details.images.length > 0 ? (
          <Img fixed={details.images[0].fixed} style={{ maxHeight: "150px" }} />
        ) : (
          <div className="no-image-for-item">
            there is not image for this item
          </div>
        )}

        <div className="item-details">
          <h3 className="item-title">{details.title}</h3>
          <span className="item-by">By{details.by}</span>
          <span className="item-rating">
            rating: {details.rating}({details.ratingAmount})
          </span>
          <span className="item-price">${details.price}</span>
        </div>
      </Link>

      <div className="add-to-wishlist">
        <Icon
          icon={heartOutlined}
          style={{ color: "#606060", fontSize: "15px" }}
          className="add-to-wishlist-icon"
        />
      </div>
      {/* </div> */}
    </div>
  );
}

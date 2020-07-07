import React from "react";
import { Link } from "gatsby";
// import Images from "./Images";
import Img from "gatsby-image";
export default function ProductList({ details }) {
  return (
    <div>
      <h3>{details.title}</h3>
      <p>
        rating: {details.rating}
        <span> ({details.ratingAmount})</span>
      </p>
      <span>{details.price}</span>
      {/* <Images details={details}></Images> */}
      {/* <img src={details.image}></img> */}
      {/* <div
        className="image-container"
        style={{ maxHeight: "100%", height: "200px" }}
      > */}
      {details.images.length > 0 ? (
        <Img fixed={details.images[0].fixed} style={{ maxHeight: "150px" }} />
      ) : (
        <div className="no-image-for-item">
          there is not image for this item
        </div>
      )}

      {/* </div> */}

      <Link
        to={`/product/${details.id}`}
        state={{ item: details }}
        style={{ display: "block" }}
      >
        Click here if you wanna buy this item homie
      </Link>
    </div>
  );
}

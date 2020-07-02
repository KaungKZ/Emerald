import React from "react";
import { Link } from "gatsby";
// import Images from "./Images";
import Img from "gatsby-image";
export default function ExampleList({ details, i }) {
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
      <Img fixed={details.images[0].fixed} />

      <Link
        to={`/product/${details.slug}`}
        state={{ item: details }}
        style={{ display: "block" }}
      >
        Click here if you wanna buy this item homie
      </Link>
    </div>
  );
}

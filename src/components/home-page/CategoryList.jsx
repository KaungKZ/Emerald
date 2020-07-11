import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

export default function CategoryList({ classNames, image }) {
  classNames = classNames.split(" ")[0];
  // console.log(classNames);
  return (
    <div className={`${classNames} category`}>
      <div className="category-title">
        {<Link to="/products">{classNames}</Link>}
      </div>
      <div className="category-banner">{<Img fixed={image}></Img>}</div>
    </div>
  );
}

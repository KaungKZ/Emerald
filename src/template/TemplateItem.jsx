import React from "react";
import { graphql } from "gatsby";

export default function TemplateItem({ data: { res } }) {
  //console.log(data);
  return <div>{res.title}</div>;
}

export const query = graphql`
  query MyQuery($slug: String) {
    res: contentfulAllProducts(slug: { eq: $slug }) {
      title
      by
      price
      oldprice
      description {
        description
      }
      rating
      ratingAmount
      gender
      size
      images {
        fixed(height: 100, width: 100) {
          src
        }
      }
      reviews {
        reviews {
          name
          rating
          comment
          date
        }
      }
    }
  }
`;

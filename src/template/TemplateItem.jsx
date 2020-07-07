import React from "react";
import { graphql } from "gatsby";

export default function TemplateItem({ data: { res } }) {
  return (
    <div>
      <h1>This is {res.title} page</h1>
    </div>
  );
}

export const query = graphql`
  query MyQuery($slug: String) {
    res: contentfulAllProducts(id: { eq: $slug }) {
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

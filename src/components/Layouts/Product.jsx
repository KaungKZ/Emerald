import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ProductList from "./Product_list";

export default function Product({ product }) {
  const {
    res: { edges },
  } = useStaticQuery(getBsData);

  // console.log(edges);

  const products = edges.filter(one => {
    // console.log(one.node.category);
    return one.node.category.includes(product);
  });

  if (!products) return null;

  return products.map(one => {
    // console.log(one);
    return <ProductList key={one.node.id} details={one.node}></ProductList>;
  });
}

const getBsData = graphql`
  {
    res: allContentfulAllProducts {
      edges {
        node {
          id
          title
          by
          price
          oldprice
          rating
          ratingAmount
          slug
          category
          images {
            fixed(width: 150, height: 150, quality: 100) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`;

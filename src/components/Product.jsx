import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ProductList from "./ProductList";

const getData = graphql`
  {
    res: allContentfulAllProducts(filter: { category: { regex: "/bs/" } }) {
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

export default function Product() {
  const {
    res: { edges },
  } = useStaticQuery(getData);

  return edges.map(one => {
    // console.log(one.node);
    return <ProductList key={one.node.id} details={one.node}></ProductList>;
  });

  // console.log(data);
  //   return data;
}

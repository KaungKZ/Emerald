import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ExampleList from "./ExampleList";

const getData = graphql`
  {
    res: allContentfulBestSellers {
      edges {
        node {
          id
          oldprice
          price
          title
          slug
          rating
          by
          ratingAmount
          images {
            fixed(height: 150, width: 150) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`;

export default function Example() {
  const {
    res: { edges },
  } = useStaticQuery(getData);

  return edges.map(one => {
    // console.log(one.node);
    return <ExampleList key={one.node.id} details={one.node}></ExampleList>;
  });

  // console.log(data);
  //   return data;
}

import React, { useState, useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";

import ProductList from "./Product_list";
import styled from "styled-components";
import PagesNavigator from "../products-page/PagesNavigator";
// import { ShowcaseArrows } from "../../styles/ShowcaseArrows_styles";
// import chevronLeftFill from "@iconify/icons-eva/chevron-left-fill";

const AllItemsWrapper = styled.div`
  /* position: relative; */
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  justify-content: center;
  row-gap: var(--item-margin);
  column-gap: var(--large-item-margin);

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, 200px);
  }
`;

// const PagesNavigator = styled.div``;

export default function AllProducts({ product }) {
  const {
    res: { edges },
  } = useStaticQuery(getData);

  const products = edges.filter(one => {
    return one.node.category.includes(product);
  });

  if (!products) return null;
  return (
    <>
      {/* might need a wrapper for navigator and allitems  */}
      <PagesNavigator></PagesNavigator>
      <AllItemsWrapper>
        {products.map(one => {
          return (
            <ProductList
              key={one.node.id}
              details={one.node}
              all_items={true}
            ></ProductList>
          );
        })}
      </AllItemsWrapper>
      <PagesNavigator></PagesNavigator>
    </>
  );
}
const getData = graphql`
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

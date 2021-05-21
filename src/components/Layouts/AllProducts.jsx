import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import ProductList from "./Product_list";
import styled from "styled-components";
import PagesNavigator from "../../PagesNavigator";

const AllItemsWrapper = styled.div`
  width: 90%;
  margin: var(--item-margin) auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  justify-content: center;
  row-gap: var(--item-margin);
  column-gap: var(--large-item-margin);

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, 200px);
  }

  @media (max-width: 560px) {
    row-gap: calc(var(--item-margin) / 2);
    column-gap: calc(var(--large-item-margin) / 5);
    grid-template-columns: repeat(2, 200px);
  }

  @media (max-width: 440px) {
    width: 95%;
    grid-template-columns: repeat(2, 150px);
    row-gap: 15px;
    column-gap: 15px;
  }
`;

export default function AllProducts({ product }) {
  const {
    res: { edges },
  } = useStaticQuery(getData);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(
      edges.filter(one => {
        return one.node.category.includes(product);
      })
    );
  }, [edges, product]);

  if (!products) return null;
  return (
    <>
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

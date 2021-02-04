import React from "react";
import styled from "styled-components";
import { Button } from "../../styles/Button";
import Img from "gatsby-image";

const TopSection = styled.section``;

const BottomSection = styled.section``;

const ProductImages = styled.div``;

const ProductBody = styled.div``;
const ProductContent = styled.div``;

const ProductOption = styled.div``;

const ProductHeader = styled.div`
  font-family: var(--small-title-font);
  color: var(--light-text-color);
`;
// const ProductBy = styled.div``;

export default function Product_Detail({ data }) {
  // console.log(data);
  return (
    <>
      <TopSection>
        <ProductImages>
          {data.images.map(v => {
            console.log(v);
            return (
              <Img
                fixed={v.fixed}
                key={v.fixed.src}
                style={{ maxHeight: "150px" }}
              />
            );
          })}
        </ProductImages>
        <ProductBody>
          <ProductHeader>
            <h1 className="product-title">{data.title}</h1>

            {/* <ProductTitle>hello fri</ProductTitle> */}
            <p className="product-by">
              By : <span>{data.by}</span>
            </p>
          </ProductHeader>
          <ProductContent>
            <span className="product-price"> </span>
            <span className="product-size"> </span>
            <span className="product-gender"></span>
            <span className="product-quality"></span>
            {/* <div className="product-quality"></div> */}
            <p className="product-description">
              {data.description.description}
            </p>
            <div className="product-buttons">
              <Button className="dark">Add To Cart</Button>
              <Button>Add To Wishlist</Button>
            </div>
          </ProductContent>
        </ProductBody>
        <ProductOption></ProductOption>
      </TopSection>
      <BottomSection></BottomSection>
    </>
  );
}

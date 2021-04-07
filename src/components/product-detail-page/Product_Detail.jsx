import React, { useState } from "react";
import styled from "styled-components";
// import { Button } from "../../styles/Button";

import ProductDetailTop from "./ProductDetailTop";
import ProductDetailBottom from "./ProductDetailBottom";
// import dotsThreeVertical from '@iconify-icons/entypo/dots-three-vertical';
import { Product_Detail_Wrapper } from "../../styles/Product_Detail_Styles";
import { Main_Button, Arrow_Button } from "../../styles/Link_Button";
import { Section_Title, Section_Title_Text } from "../../styles/Section_Title";
import { Icon } from "@iconify/react";
import arrowRight from "@iconify/icons-bi/arrow-right";
import Product from "../Product";

const SimilarItemsWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
`;

// import Input from "../../styles/Input";

// const ProductBy = styled.div``;

export default function Product_Detail({ data }) {
  // console.log(data);
  // const numberRef = useRef();
  // const QtyRef = useRef();

  const [productValues, setProductValues] = useState({
    productSize: data.size,
    productQty: 1,
    productGender: data.gender,
  });

  // console.log(data);

  // console.log(productValues);

  // console.log(data.title.toLowerCase().split(" "));

  // function handleOnchange ( ) {

  // }

  return (
    <Product_Detail_Wrapper>
      <ProductDetailTop
        productValues={productValues}
        setProductValues={setProductValues}
        data={data}
      ></ProductDetailTop>
      <ProductDetailBottom data={data}></ProductDetailBottom>
      <SimilarItemsWrapper>
        <Section_Title className="showcase-title">
          <Section_Title_Text>Similar Items</Section_Title_Text>

          <Arrow_Button to="/products" className="see-all-link">
            See all{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="see-all-icon arrow-right-icon"
            />
          </Arrow_Button>
        </Section_Title>
        <Product product="si"></Product>
      </SimilarItemsWrapper>
    </Product_Detail_Wrapper>
  );
}

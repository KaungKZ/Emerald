import React, { useState } from "react";
// import styled from "styled-components";
// import { Button } from "../../styles/Button";

import ProductDetailTop from "../product-detail-page/ProductDetailTop";
import ProductDetailBottom from "../product-detail-page/ProductDetailBottom";
// import dotsThreeVertical from '@iconify-icons/entypo/dots-three-vertical';
import { Product_Detail_Wrapper } from "../product-detail-page/Product_Detail_Styles";
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
    </Product_Detail_Wrapper>
  );
}

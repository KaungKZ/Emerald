import React from "react";
import AllProducts from "../Layouts/AllProducts";
import { Icon } from "@iconify/react";
import arrowRight from "@iconify/icons-bi/arrow-right";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import allProductsBgShape from "../../images/all items page/bg shape.svg";
import { ShowcaseProducts } from "../home-page/HomeMainContent";
import Product from "../Layouts/Product";
import {
  HeaderWrapper,
  HeaderQuoteWrapper,
  HeaderBgShape,
} from "../../styles/AllProducts_header_styles";
import { Main_Button, Text_Button } from "../../styles/Link_Button";
// import PagesNavigator from "./PagesNavigator";
// import arrowRight from "@iconify/icons-bi/arrow-right";
// import { Icon } from "@iconify/react";

import styled from "styled-components";

const AllProductsHeader = styled.section`
  width: 100%;
  /* height: 550px; */

  /* max-height: 550px; */
`;

const AllProductStyles = styled.section`
  margin: var(--section-margin) 0;
`;

export default function ProductsMainContent() {
  const headerImage = useStaticQuery(getHeaderImage);

  return (
    <>
      <AllProductsHeader>
        <HeaderWrapper>
          <Img fluid={headerImage.headerImage.childImageSharp.fluid}></Img>
          <HeaderQuoteWrapper>
            <h1 className="allProducts-header-quote">
              Life's short, go shopping
            </h1>
            <h3 className="allProducts-header-subquote">
              save up to 50% off winter season sale
            </h3>
            <Main_Button to="/products" className="header-btn-link">
              Shop now{" "}
              <Icon
                icon={arrowRight}
                style={{ color: "#606060", fontSize: "25px" }}
                className="arrow-right-icon"
              />
            </Main_Button>
          </HeaderQuoteWrapper>
        </HeaderWrapper>
        <HeaderBgShape>
          <img src={allProductsBgShape} alt="" className="header-bg-shape" />
        </HeaderBgShape>
      </AllProductsHeader>
      {/* header banner */}

      {/* all products */}
      <AllProductStyles>
        <div className="section-title">
          <h1>All Products</h1>

          {/* <Text_Button to="/products" className="see-all-link">
            See all{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="see-all-icon arrow-right-icon"
            />
          </Text_Button> */}
        </div>
        {/* <PagesNavigator></PagesNavigator> */}
        <AllProducts product="ai"></AllProducts>
        {/* <PagesNavigator></PagesNavigator> */}
      </AllProductStyles>

      <ShowcaseProducts>
        <div className="section-title showcase-title">
          <h1>More Like This</h1>

          <Text_Button to="/products" className="see-all-link">
            See all{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="see-all-icon arrow-right-icon"
            />
          </Text_Button>
        </div>

        <Product product="mlt"></Product>
      </ShowcaseProducts>
    </>
  );
}

const getHeaderImage = graphql`
  {
    headerImage: file(
      relativePath: { eq: "all items page/result header background.jpg" }
    ) {
      childImageSharp {
        fluid(maxHeight: 550, jpegQuality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

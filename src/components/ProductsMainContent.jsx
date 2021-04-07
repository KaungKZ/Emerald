import React from "react";
import AllProducts from "./Layouts/AllProducts";
import { Icon } from "@iconify/react";
import arrowRight from "@iconify/icons-bi/arrow-right";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import allProductsBgShape from "../images/all items page/bg shape.svg";
import { ShowcaseProducts } from "./HomeMainContent";
import Product from "./Layouts/Product";
import {
  HeaderWrapper,
  HeaderQuoteWrapper,
  HeaderBgShape,
} from "../styles/AllProducts_header_styles";
import { Main_Button, Arrow_Button } from "../styles/Link_Button";
import { Section_Title, Section_Title_Text } from "../styles/Section_Title";

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
        <Section_Title>
          <Section_Title_Text>All Products</Section_Title_Text>

          {/* <Arrow_Button to="/products" className="see-all-link">
            See all{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="see-all-icon arrow-right-icon"
            />
          </Arrow_Button> */}
        </Section_Title>
        {/* <PagesNavigator></PagesNavigator> */}
        <AllProducts product="ai"></AllProducts>
        {/* <PagesNavigator></PagesNavigator> */}
      </AllProductStyles>

      <ShowcaseProducts>
        <Section_Title className="showcase-title">
          <Section_Title_Text>More Like This</Section_Title_Text>

          <Arrow_Button to="/products" className="see-all-link">
            See all{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="see-all-icon arrow-right-icon"
            />
          </Arrow_Button>
        </Section_Title>

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

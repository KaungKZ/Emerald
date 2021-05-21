import React from "react";
import AllProducts from "../Layouts/AllProducts";
import { Icon } from "@iconify/react";
import arrowRight from "@iconify/icons-bi/arrow-right";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import allProductsBgShape from "../../images/all items page/bg shape.svg";
import { ShowcaseProducts } from "../HomeMainContent";
import Product from "../Product";
import {
  HeaderWrapper,
  HeaderQuoteWrapper,
  HeaderBgShape,
} from "../../styles/AllProductsHeader_Styles";
import { Main_Button, Arrow_Button } from "../../styles/Link_Button";
import { Section_Title, Section_Title_Text } from "../../styles/Section_Title";

import styled from "styled-components";

const AllProductsHeader = styled.section`
  width: 100%;
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
      <AllProductStyles>
        <Section_Title>
          <Section_Title_Text>All Products</Section_Title_Text>
        </Section_Title>

        <AllProducts product="ai"></AllProducts>
      </AllProductStyles>

      <ShowcaseProducts>
        <Section_Title className="showcase-title">
          <Section_Title_Text>More Like This</Section_Title_Text>

          <Arrow_Button to="/products" className="see-all-link" $sub>
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

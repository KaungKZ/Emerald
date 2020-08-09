import React from "react";
import Product from "../Layouts/Product";
import CategoryList from "./CategoryList";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import stripeBG from "../../images/home/stripes background.svg";
import arrowRight from "@iconify/icons-bi/arrow-right";
import { Icon } from "@iconify/react";
import Slider from "./Slider";
import {
  HeaderDetailStyles,
  HeaderContent,
  HeaderBannerWrapper,
  HeaderDetails,
  HeaderTitle,
} from "../../styles/HeaderDetail_Styles";
import {
  FeaturedContent,
  FeaturedBanner,
} from "../../styles/FeaturedSection_styles";
import styled from "styled-components";

const Categories = styled.section`
  width: 100%;
  margin-bottom: var(--section-margin);
`;

const CategoryWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);

  grid-column-gap: var(--item-margin);
  grid-row-gap: 35px;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, 200px);
  }
`;

const ShowcaseProducts = styled.section`
  width: 100%;
  margin-bottom: var(--section-margin);
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
`;

const HomeSlider = styled.section`
  width: 100%;
  margin-bottom: var(--section-margin);
  position: relative;
  overflow: hidden;
`;

const FeaturedSection = styled.section`
  width: 100%;
  margin-bottom: var(--section-margin);
  position: relative;
`;

export default function HomeMainContent() {
  const images = useStaticQuery(getImages);

  return (
    <>
      <HeaderDetailStyles>
        <HeaderDetails>
          <HeaderTitle>
            <h1>A place for your</h1>
            <h1 className="hidden-lg">Needs</h1>
          </HeaderTitle>

          <HeaderContent>
            <p className="sub-title">Save up to 30% off for new arrivals !</p>

            <Link to="/products" className="btn-link header-btn-link">
              Shop now{" "}
              <Icon
                icon={arrowRight}
                style={{ color: "#606060", fontSize: "25px" }}
                className="arrow-right-icon"
              />
            </Link>

            <Link to="/products" className="special-offer">
              winter season special offers
            </Link>
          </HeaderContent>
        </HeaderDetails>
        <HeaderBannerWrapper>
          {
            <Img
              fluid={images.headerBanner.childImageSharp.fluid}
              alt="header-banner"
            ></Img>
          }
          <img
            src={stripeBG}
            alt="stripe background"
            className="stripe-background"
          />
        </HeaderBannerWrapper>
      </HeaderDetailStyles>

      <Categories>
        <div className="section-title">
          <h1>Categories</h1>
        </div>
        <CategoryWrapper>
          {images.categoryImages.edges.map((one, _) => {
            return (
              <CategoryList
                image={one.node.childImageSharp.fixed}
                key={one.node.childImageSharp.fixed.src}
                classNames={one.node.name}
              ></CategoryList>
            );
          })}
        </CategoryWrapper>
      </Categories>

      <ShowcaseProducts>
        <div className="section-title showcase-title">
          <h1>Best Sellers</h1>

          <Link to="/products" className="see-all-link">
            See all{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="see-all-icon arrow-right-icon"
            />
          </Link>
        </div>

        <Product product="bs"></Product>
      </ShowcaseProducts>

      <HomeSlider>
        <Slider></Slider>
      </HomeSlider>

      <ShowcaseProducts>
        <div className="section-title showcase-title">
          <h1>Best deals for today</h1>

          <Link to="/products" className="see-all-link">
            See all{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="see-all-icon arrow-right-icon"
            />
          </Link>
        </div>
        <Product product="bd"></Product>
      </ShowcaseProducts>

      <FeaturedSection>
        <FeaturedContent>
          <h1 className="featured-title">
            See what we are doing to fight covid 19
          </h1>

          <Link to="/products" className="btn-link">
            Read more{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="arrow-right-icon"
            />
          </Link>
        </FeaturedContent>

        <FeaturedBanner>
          <Img
            fluid={images.featuredImage.childImageSharp.fluid}
            style={{ maxHeight: "500px" }}
          ></Img>
        </FeaturedBanner>
      </FeaturedSection>
    </>
  );
}

// graphql query

const getImages = graphql`
  {
    headerBanner: file(
      relativePath: { eq: "home/home header section banner.jpg" }
    ) {
      relativePath

      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 550, jpegQuality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }

    categoryImages: allFile(
      filter: { relativeDirectory: { eq: "home/categories" } }
    ) {
      edges {
        node {
          relativeDirectory
          name
          childImageSharp {
            fixed(width: 250, height: 300, jpegQuality: 100) {
              src
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }

    featuredImage: file(relativePath: { eq: "home/covid 19 bg.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 500, jpegQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
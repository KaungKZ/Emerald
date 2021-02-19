import React, { useEffect, useState } from "react";
import Product from "../Layouts/Product";
import CategoryList from "./CategoryList";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import stripeBG from "../../images/home/stripes background.svg";
import arrowRight from "@iconify/icons-bi/arrow-right";
import { Icon } from "@iconify/react";
import { Main_Button, Text_Button } from "../../styles/Link_Button";
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
import { Button } from "../../styles/Button";
import { Section_Title, Section_Title_Text } from "../../styles/Section_Title";
// import { useState } from "react";

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

  @media (max-width: 600px) {
    /* display: none; */
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  @media (max-width: 530px) {
    width: 85%;
    grid-template-columns: repeat(auto-fit, 180px);
    justify-content: space-around;
  }

  @media (max-width: 450px) {
    width: 90%;
    grid-column-gap: 15px;
  }

  @media (max-width: 420px) {
    grid-template-columns: repeat(auto-fit, 150px);
  }

  @media (max-width: 360px) {
    width: 100%;
    grid-column-gap: 10px;
  }
`;

export const ShowcaseProducts = styled.section`
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
  const [isSmallSize, setIsSmallSize] = useState();
  const [seemoreClicked, setSeemoreClicked] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 600) {
        setIsSmallSize(true);
      } else {
        setIsSmallSize(false);
      }
      window.addEventListener("resize", handleWindowResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleWindowResize);
      }
    };
  }, []);

  // console.log(seemoreClicked);

  function handleWindowResize() {
    if (window.innerWidth < 600) {
      setIsSmallSize(true);
    } else {
      setIsSmallSize(false);
    }
  }

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

            <Main_Button to="/products" className="header-btn-link">
              Shop now{" "}
              <Icon
                icon={arrowRight}
                style={{ color: "#606060", fontSize: "25px" }}
                className="arrow-right-icon"
              />
            </Main_Button>

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
        <Section_Title>
          <Section_Title_Text>Categories</Section_Title_Text>
        </Section_Title>
        <CategoryWrapper>
          {isSmallSize
            ? seemoreClicked
              ? images.categoryImages.edges.map((one, _) => {
                  return (
                    <CategoryList
                      image={one.node.childImageSharp.fixed}
                      key={one.node.childImageSharp.fixed.src}
                      classNames={one.node.name}
                      isSmallSize={isSmallSize}
                    ></CategoryList>
                  );
                })
              : images.categoryImages.edges.slice(0, 4).map((one, _) => {
                  return (
                    <CategoryList
                      image={one.node.childImageSharp.fixed}
                      key={one.node.childImageSharp.fixed.src}
                      classNames={one.node.name}
                      isSmallSize={isSmallSize}
                    ></CategoryList>
                  );
                })
            : images.categoryImages.edges.map((one, _) => {
                return (
                  <CategoryList
                    image={one.node.childImageSharp.fixed}
                    key={one.node.childImageSharp.fixed.src}
                    classNames={one.node.name}
                    isSmallSize={isSmallSize}
                  ></CategoryList>
                );
              })}
        </CategoryWrapper>
        {isSmallSize && (
          <Button
            center
            onClick={() => setSeemoreClicked(() => !seemoreClicked)}
          >
            {seemoreClicked ? "show less" : "show more"}
          </Button>
        )}
      </Categories>

      <ShowcaseProducts>
        <Section_Title className="showcase-title">
          <Section_Title_Text>Best Sellers</Section_Title_Text>

          <Text_Button to="/products">
            See all{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="see-all-icon arrow-right-icon"
            />
          </Text_Button>
        </Section_Title>

        <Product product="bs"></Product>
      </ShowcaseProducts>

      <HomeSlider>
        <Slider></Slider>
      </HomeSlider>

      <ShowcaseProducts>
        <Section_Title className="showcase-title">
          <Section_Title_Text>Best deals for today</Section_Title_Text>

          <Text_Button to="/products">
            See all{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="see-all-icon arrow-right-icon"
            />
          </Text_Button>
        </Section_Title>
        <Product product="bd"></Product>
      </ShowcaseProducts>

      <FeaturedSection>
        <FeaturedContent>
          <h1 className="featured-title">
            See what we are doing to fight covid 19
          </h1>

          <Main_Button to="/products">
            Read more{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="arrow-right-icon"
            />
          </Main_Button>
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

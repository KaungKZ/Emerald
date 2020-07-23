import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import arrowRight from "@iconify/icons-bi/arrow-right";
import { Icon } from "@iconify/react";
import styled, { css } from "styled-components";

const SliderWrapper = styled.div`
  display: ${props => (props.half_content ? "flex" : "unset")};

  ${props =>
    props.half_content &&
    css`
      flex-direction: row;
      justify-content: space-between;
    `}

  /* .slider-banner {
    width: ${props => (props.half_content ? "70%" : "100%")};
  } */
`;

// const SliderOne = styled.div`

// `;

const SliderBanner = styled.div`
  width: ${props => (props.half_content ? "70%" : "100%")};
`;

const SliderTitle = styled.div`
  font-family: var(--secondary-font);
  text-transform: capitalize;

  h1 {
    font-size: 36px;
    margin-bottom: 25px;
  }

  h3 {
    font-size: var(--normal-text);
    opacity: 0.8;
    font-weight: 400;
    margin-bottom: 25px;
  }
`;

const SliderContent = styled.div`
  &.bg-pink {
    background: var(--primary-light);
  }
  &.bg-white {
    background: #fff;
  }
  /* &:first-child {
    background: var(--primary-light);
  } */
  ${props =>
    props.half_content &&
    css`
      padding: 30px;
    `}
`;

export default function Slider() {
  const sliderImages = useStaticQuery(getSliderImage);

  // console.log(sliderImages.allFile.edges[0]);

  //   console.log(sliderImages);

  return (
    <>
      <SliderWrapper half_content>
        <SliderContent half_content className="bg-pink">
          <SliderTitle>
            <h1>Get the supplies for covid 19</h1>
          </SliderTitle>

          <Link to="/products" className="btn-link">
            Get supplies{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="arrow-right-icon"
            />
          </Link>
        </SliderContent>

        <SliderBanner half_content>
          <Img
            fluid={sliderImages.allFile.edges[0].node.childImageSharp.fluid}
            // style={{ maxWidth: "900px" }}
          ></Img>
        </SliderBanner>
      </SliderWrapper>

      <SliderWrapper>
        <SliderContent>
          <SliderTitle>
            <h1>special offers from sketchers</h1>
            <h3>Up to 50% off and free shipping</h3>
          </SliderTitle>

          <Link to="/products" className="btn-link">
            Get your thing{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="arrow-right-icon"
            />
          </Link>
        </SliderContent>

        <SliderBanner>
          {/* <img src={example} alt="" /> */}
          <Img
            fluid={sliderImages.allFile.edges[1].node.childImageSharp.fluid}
          ></Img>
        </SliderBanner>
      </SliderWrapper>

      <SliderWrapper half_content>
        <SliderContent half_content className="bg-white">
          <SliderTitle>
            <h1>it's easy to get started</h1>
            <h3>start finding biggest deals on thousands of items</h3>
          </SliderTitle>

          <Link to="/products" className="btn-link">
            Shop now{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="arrow-right-icon"
            />
          </Link>
        </SliderContent>

        <SliderBanner half_content>
          <Img
            fluid={sliderImages.allFile.edges[2].node.childImageSharp.fluid}
            // imgStyle={{ maxWidth: "1440px" }}
            // style={{ maxWidth: "900px" }}
          ></Img>
        </SliderBanner>
      </SliderWrapper>

      <div className="navigators">
        <span className="navigator"></span>
        <span className="navigator"></span>
        <span className="navigator"></span>
      </div>
    </>
  );
}

const getSliderImage = graphql`
  {
    allFile(
      filter: { relativePath: { regex: "/slider/" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxHeight: 500, jpegQuality: 100, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

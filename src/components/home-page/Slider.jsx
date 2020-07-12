import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import arrowRight from "@iconify/icons-bi/arrow-right";
import { Icon, InlineIcon } from "@iconify/react";

export default function Slider() {
  const sliderImages = useStaticQuery(getSliderImage);

  // console.log(sliderImages.allFile.edges[0]);

  //   console.log(sliderImages);

  return (
    <>
      <div className="slider-1 slider">
        <div className="slider-title">
          <h1>Get the supplies for covid 19</h1>
        </div>

        <Link to="/products" className="btn-link">
          Get supplies{" "}
          <Icon
            icon={arrowRight}
            style={{ color: "#606060", fontSize: "25px" }}
            className="arrow-right-icon"
          />
        </Link>

        <div className="slider-banner">
          <Img
            fluid={sliderImages.allFile.edges[0].node.childImageSharp.fluid}
            style={{ maxWidth: "900px" }}
          ></Img>
        </div>
      </div>

      <div className="slider-2 slider">
        <div className="slider-title">
          <h1>special offers from sketchers</h1>
          <h3>Up to 50% off and free shipping</h3>
        </div>

        <Link to="/products" className="btn-link">
          Get your thing{" "}
          <Icon
            icon={arrowRight}
            style={{ color: "#606060", fontSize: "25px" }}
            className="arrow-right-icon"
          />
        </Link>

        <div className="slider-banner">
          {/* <img src={example} alt="" /> */}
          <Img
            fluid={sliderImages.allFile.edges[1].node.childImageSharp.fluid}
          ></Img>
        </div>
      </div>

      <div className="slider-3 slider">
        <div className="slider-title">
          <h1>it's easy to get started</h1>
          <h3>start finding biggest deals on thousands of items</h3>
        </div>

        <Link to="/products" className="btn-link">
          Shop now{" "}
          <Icon
            icon={arrowRight}
            style={{ color: "#606060", fontSize: "25px" }}
            className="arrow-right-icon"
          />
        </Link>

        <div className="slider-banner">
          <Img
            fluid={sliderImages.allFile.edges[2].node.childImageSharp.fluid}
            // imgStyle={{ maxWidth: "1440px" }}
            style={{ maxWidth: "900px" }}
          ></Img>
        </div>
      </div>

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

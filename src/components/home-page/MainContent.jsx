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
} from "../../styles/Header_detailStyles";
// import example from "../../images/home/covid 19 bg.jpg";

// import { getImages } from "../../graphql-fragments/IndexQueries";

export default function MainContent() {
  // console.log(getImages);
  const images = useStaticQuery(getImages);

  // let classNames = [
  //   "fashion",
  //   "electronics",
  //   "kids and babies",
  //   "home appliances",
  //   "sport",
  //   "gaming",
  //   "security",
  //   "accessories",
  // ];

  // const categoryImages = useStaticQuery(getCategoryImages);
  return (
    <>
      <HeaderDetailStyles>
        <HeaderDetails>
          {/* <div className="titles"> */}
          <HeaderTitle>
            <h1>A place for your</h1>
            {/* <h1>Needs</h1>p */}
          </HeaderTitle>

          <HeaderContent>
            <p className="sub-title">Save up to 30% off for new arrivals !</p>
            {/* </div> */}
            {/* <div className="links"> */}

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
          {/* </div> */}
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

      <section className="categories">
        <div className="section-title">
          <h1>Categories</h1>
        </div>
        <div className="wrapper-categories">
          {images.categoryImages.edges.map((one, _) => {
            return (
              <CategoryList
                image={one.node.childImageSharp.fixed}
                key={one.node.childImageSharp.fixed.src}
                classNames={one.node.name}
              ></CategoryList>
            );
          })}
        </div>
      </section>

      <section className="best-sellers">
        <div className="section-title">
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
        <div className="wrapper-best-sellers">
          <Product product="bs"></Product>
        </div>
      </section>

      <section className="home-slider">
        <Slider></Slider>
      </section>

      <section className="best-deals">
        <div className="section-title">
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
        <div className="wrapper-best-deals">
          <Product product="bd"></Product>
        </div>
      </section>

      <section className="featured-section">
        <div className="featured-title">
          <h1>See what we are doing to fight covid 19</h1>

          <Link to="/products" className="btn-link">
            Read more{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="arrow-right-icon"
            />
          </Link>
        </div>

        <div className="featured-banner">
          {/* <img src={example} alt="" /> */}

          <Img
            fluid={images.featuredImage.childImageSharp.fluid}
            style={{ maxHeight: "450px" }}
            imgStyle={{ objectFit: "fill" }}
          ></Img>
        </div>
      </section>
    </>
  );
}

// const StyledBackgroundSection = styled(BackgroundSection)`
//   width: 100%;
//   background-position: bottom center;
//   background-repeat: repeat-y;
//   background-size: cover;
// `

// export default StyledBackgroundSection

const getImages = graphql`
  {
    headerBanner: file(
      relativePath: { eq: "home/home header section banner.jpg" }
    ) {
      relativePath

      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 600, jpegQuality: 100) {
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

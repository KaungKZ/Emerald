import React, { useState, useEffect, useRef } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import arrowRight from "@iconify/icons-bi/arrow-right";
import { Icon } from "@iconify/react";
import {
  Sliders,
  SliderWrapper,
  SliderTitle,
  SliderBanner,
  SliderContent,
  WrapperSliderNavigators,
  SliderNavigator,
} from "../../styles/Slider_styles";

export default function Slider() {
  const [transition, setTransition] = useState({
    activeIndex: 0,
    translate: 0,
    transitionDuration: 400,
    slides: [slide_one, slide_two, slide_three],
  });

  const { activeIndex, translate, transitionDuration } = transition;

  const autoPlayRef = useRef();
  const slide_one = useRef();
  const slide_two = useRef();
  const slide_three = useRef();

  const sliderImages = useStaticQuery(getSliderImage);

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  console.log(translate);

  useEffect(() => {
    // console.log(autoPlayRef.current());
    function play() {
      autoPlayRef.current();
    }

    const interval = setInterval(play, 4000);

    return () => clearInterval(interval);
  }, []);

  function nextSlide() {
    setTransition({
      ...transition,
      activeIndex: activeIndex === 2 ? 0 : activeIndex + 1,
      translate: activeIndex === 2 ? 0 : translate + getWidth(),
    });
    // }
  }

  function getWidth() {
    // console.log(window.innerWidth());
    return window.innerWidth;
  }

  // console.log(sliderImages.allFile.edges[0]);

  //   console.log(sliderImages);

  return (
    <>
      <Sliders width={getWidth()}>
        <SliderWrapper
          half_content
          width={getWidth()}
          transform={translate}
          transition={transitionDuration}
          // ref={slide_one}
        >
          <SliderContent half_content className="bg-pink">
            <SliderTitle className="black">
              <h1>Get the supplies for covid 19</h1>
            </SliderTitle>

            <Link to="/products" className="btn-link no-border">
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

        <SliderWrapper
          second_slider
          width={getWidth()}
          transform={translate}
          transition={transitionDuration}
          // ref={slide_two}
        >
          <SliderContent second_slider>
            <SliderTitle className="white">
              <h1>special offers from sketchers</h1>
              <h3>Up to 50% off and free shipping</h3>
            </SliderTitle>

            <Link to="/products" className="btn-link no-border">
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

        <SliderWrapper
          half_content
          width={getWidth()}
          transform={translate}
          transition={transitionDuration}
          // ref={slide_three}
        >
          <SliderContent half_content className="bg-white">
            <SliderTitle className="black">
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
      </Sliders>
      <WrapperSliderNavigators>
        {new Array(3).fill(1).map((_, i) => (
          <SliderNavigator
            index={i}
            active={activeIndex === i}
            key={i}
          ></SliderNavigator>
        ))}
        {/* <SliderNavigator></SliderNavigator>
        <SliderNavigator></SliderNavigator>
        <SliderNavigator></SliderNavigator> */}
      </WrapperSliderNavigators>
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

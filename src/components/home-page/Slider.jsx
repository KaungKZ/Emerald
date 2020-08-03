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
  const [windowWidth, setWindowWidth] = useState(null);
  const [transition, setTransition] = useState({
    activeIndex: 0,
    translate: 0,
    transitionDuration: 0,
  });

  // const slides = document.querySelectorAll(".slide");

  // const first_slide = slides[0];
  // const second_slide = slides[0];
  // const last_slide = slides[slides.length - 1];

  const { activeIndex, translate, transitionDuration } = transition;

  const autoPlayRef = useRef();
  const resizeRef = useRef();
  // const transitionRef = useRef();

  const sliderImages = useStaticQuery(getSliderImage);

  // const transitionEnd = window.addEventListener("transitionend", smooth);

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    resizeRef.current = handleResize;
    // transitionRef.current = smoothTransition;
  });

  useEffect(() => {
    // console.log(autoPlayRef.current());
    function play() {
      autoPlayRef.current();
    }

    let interval = null;
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResizeRef);
    }

    interval = setInterval(play, 4500);

    function handleResizeRef() {
      resizeRef.current();
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResizeRef);
      }
      clearInterval(interval);
    };
  });

  useEffect(() => {
    if (activeIndex === 2) {
    }
  }, [activeIndex]);

  function handleResize() {
    // console.log("resized");
    setTransition({
      ...transition,
      translate: windowWidth,
      transitionDuration: 0,
    });
  }

  function nextSlide() {
    setTransition({
      ...transition,
      activeIndex: activeIndex === 2 ? 0 : activeIndex + 1,
      translate: activeIndex === 2 ? 0 : translate + windowWidth,
      transitionDuration: activeIndex === 2 ? 0 : 700,
    });
    // }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      return setWindowWidth(window.innerWidth);
    }
  }, [transition.translate]);

  // function getWidth() {
  //   // console.log(window.innerWidth());
  //   if (typeof window !== "undefined") {
  //     return window.innerWidth;
  //   }
  // }

  // function smoothTransition() {
  //   let _slides = [];

  //   // We're at the last slide.
  //   if (activeSlide === slides.length - 1)
  //     _slides = [slides[slides.length - 2], lastSlide, firstSlide];
  //   // We're back at the first slide. Just reset to how it was on initial render
  //   else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide];
  //   // Create an array of the previous last slide, and the next two slides that follow it.
  //   else _slides = slides.slice(activeSlide - 1, activeSlide + 2);

  //   setState({
  //     ...state,
  //     _slides,
  //     transition: 0,
  //     translate: getWidth(),
  //   });
  // }

  // console.log(sliderImages.allFile.edges[0]);

  //   console.log(sliderImages);

  return (
    <>
      <Sliders width={windowWidth}>
        {/* {slides.map(slide => {
          return slide;
        }} */}

        <SliderWrapper
          half_content
          width={windowWidth}
          transform={translate}
          transition={transitionDuration}
          className="slide"
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
          width={windowWidth}
          transform={translate}
          transition={transitionDuration}
          className="slide"
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
          width={windowWidth}
          transform={translate}
          transition={transitionDuration}
          className="slide"
          // ref={slide_three}
        >
          <SliderContent half_content className="bg-white">
            <SliderTitle className="black">
              <h1>it's easy to get started</h1>
              <h3 className="hidden-sm">
                start finding biggest deals on thousands of items
              </h3>
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

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

  const { activeIndex, translate, transitionDuration } = transition;

  const autoPlayRef = useRef();
  const resizeRef = useRef();
  const sliderImages = useStaticQuery(getSliderImage);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    let interval = null;
    if (typeof window !== "undefined") {
      function play() {
        autoPlayRef.current();
      }

      window.addEventListener("resize", handleResizeRef);
      interval = setInterval(play, 4500);
    }
    function handleResizeRef() {
      resizeRef.current();
      setWindowWidth(window.innerWidth);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResizeRef);
      }
      clearInterval(interval);
    };
  });

  useEffect(() => {
    var resizeTimer;
    if (typeof window !== "undefined") {
      window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          setTransition({
            ...transition,
            activeIndex: 0,
            translate: 0,
            transitionDuration: 0,
          });
        }, 500);
      });
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", function () {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(() => {
            setTransition({
              ...transition,
              activeIndex: 0,
              translate: 0,
              transitionDuration: 0,
            });
          }, 500);
        });
      }
    };
  });

  // handleResize

  function handleResize() {
    setTransition({
      ...transition,
      activeIndex: 0,
      translate: 0,
      transitionDuration: 0,
    });
  }

  // nextSlide

  function nextSlide() {
    setTransition({
      ...transition,
      activeIndex: activeIndex === 2 ? 0 : activeIndex + 1,
      translate: activeIndex === 2 ? 0 : translate + windowWidth,
      transitionDuration: activeIndex === 2 ? 0 : 700,
    });
    // }
  }

  return (
    <>
      <Sliders width={windowWidth}>
        <SliderWrapper
          half_content
          width={windowWidth}
          transform={translate}
          transition={transitionDuration}
          className="slide"
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
            ></Img>
          </SliderBanner>
        </SliderWrapper>

        <SliderWrapper
          second_slider
          width={windowWidth}
          transform={translate}
          transition={transitionDuration}
          className="slide"
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
      </WrapperSliderNavigators>
    </>
  );
}

// graphql query

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

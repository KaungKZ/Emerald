import React, { useState, useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";

import ProductList from "./Product_list";
import styled from "styled-components";
import { ShowcaseArrows } from "../../styles/ShowcaseArrows_styles";
import chevronLeftFill from "@iconify/icons-eva/chevron-left-fill";

const ShowcaseProductsWrapper = styled.div`
  position: relative;
  transform: translateZ(0);
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  cursor: pointer;
  padding: 50px 0 27px 0;
  -webkit-tap-highlight-color: transparent;
  &.swipe-active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }

  @media (max-width: 600px) {
    overflow-x: scroll;

    &::-webkit-scrollbar {
      width: 6px;
      height: 4px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(53, 53, 53, 0.1);
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(53, 53, 53, 0.4);
    }
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(53, 53, 53, 0.5);
    }
    &::-webkit-scrollbar-thumb:active {
      background: rgba(53, 53, 53, 0.9);
    }
  }
`;

export default function Product({ product }) {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [pointerNone, setPointerNone] = useState(false);
  const [left, setLeft] = useState(null);

  const [ArrowscrollLeft, setArrowscrollLeft] = useState(150);
  const [leftEnd, setLeftEnd] = useState(true);
  const [rightEnd, setRightEnd] = useState(false);

  const [smScreen, setSmScreen] = useState(false);

  const productsRef = useRef();

  useEffect(() => {
    const ref = productsRef.current;

    ref.addEventListener("mouseleave", handleOnMouseLeave);
    ref.addEventListener("mousedown", handleOnMouseDown);
    ref.addEventListener("mouseup", handleOnMouseUp);
    ref.addEventListener("mousemove", handleOnMouseMove);

    return () => {
      ref.removeEventListener("mousedown", handleOnMouseDown);
      ref.removeEventListener("mouseleave", handleOnMouseLeave);
      ref.removeEventListener("mouseup", handleOnMouseUp);
      ref.removeEventListener("mousemove", handleOnMouseMove);
    };
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleSliderResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleSliderResize);
      }
    };
  });

  function handleOnMouseDown(e) {
    setIsDown(true);
    setStartX(e.pageX - productsRef.current.offsetLeft);
    setLeft(productsRef.current.scrollLeft);
  }

  function handleOnMouseLeave() {
    setIsDown(false);
    setPointerNone(false);
  }

  function handleOnMouseUp() {
    setIsDown(false);
    setPointerNone(false);
  }

  function handleOnMouseMove(e) {
    if (!isDown) {
      return;
    }
    if (isDown) {
      handleTransitionEnd();
      setPointerNone(true);
    }
    e.preventDefault();

    const x = e.pageX - productsRef.current.offsetLeft;
    const walk = x - startX;

    productsRef.current.scrollLeft = left - walk;
  }

  // scrollLeft

  function scrollLeft(element, change, duration) {
    var start = element.scrollLeft,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  // handleLeftArrow

  function handleLeftArrow() {
    const leftFromElem = productsRef.current.childNodes[0].getBoundingClientRect()
      .left;

    const leftMargin = smScreen ? 25 : 38;

    if (leftFromElem > leftMargin) {
      setLeftEnd(true);
    } else {
      setRightEnd(false);
      setLeftEnd(false);
    }

    scrollLeft(productsRef.current, -ArrowscrollLeft, 400);
  }
  // handleRightArrow

  function handleRightArrow() {
    if (typeof window !== "undefined") {
      const rightFromElem =
        window.innerWidth -
        productsRef.current.childNodes[
          productsRef.current.childNodes.length - 1
        ].getBoundingClientRect().right;

      const leftMargin = smScreen ? 25 : 38;

      if (rightFromElem > leftMargin) {
        setRightEnd(true);
      } else {
        setRightEnd(false);
        setLeftEnd(false);
      }

      scrollLeft(productsRef.current, ArrowscrollLeft, 400);
    }
  }
  // handleSliderResize

  function handleSliderResize(e) {
    if (e.currentTarget.innerWidth < 600) {
      setArrowscrollLeft(250);

      setSmScreen(true);
    } else {
      setSmScreen(false);
      setArrowscrollLeft(150);
    }
  }
  // handleTransitionEnd

  function handleTransitionEnd() {
    const leftFromElem = productsRef.current.childNodes[0].getBoundingClientRect()
      .left;

    const rightFromElem =
      window.innerWidth -
      productsRef.current.childNodes[
        productsRef.current.childNodes.length - 1
      ].getBoundingClientRect().right;

    const leftMargin = smScreen ? 25 : 74;

    if (leftFromElem > leftMargin) {
      setLeftEnd(true);
    } else {
      setLeftEnd(false);
    }

    if (rightFromElem > leftMargin) {
      setRightEnd(true);
    } else {
      setRightEnd(false);
    }
  }

  const {
    res: { edges },
  } = useStaticQuery(getBsData);

  const products = edges.filter(one => {
    return one.node.category.includes(product);
  });

  if (!products) return null;

  return (
    <>
      <ShowcaseProductsWrapper
        ref={productsRef}
        className={`${pointerNone ? "swipe-active" : ""}`}
      >
        {products.map(one => {
          return (
            <ProductList
              key={one.node.id}
              details={one.node}
              pointerNone={pointerNone}
            ></ProductList>
          );
        })}
      </ShowcaseProductsWrapper>

      <ShowcaseArrows
        icon={chevronLeftFill}
        style={{ color: "#ffffff", fontSize: "40.999996185302734px" }}
        className={`showcase-arrow-icon left ${leftEnd ? "left-end" : ""}`}
        onClick={handleLeftArrow}
      ></ShowcaseArrows>

      <ShowcaseArrows
        icon={chevronLeftFill}
        style={{ color: "#ffffff", fontSize: "40.999996185302734px" }}
        className={`showcase-arrow-icon right ${rightEnd ? "right-end" : ""}`}
        onClick={handleRightArrow}
      ></ShowcaseArrows>
    </>
  );
}

const getBsData = graphql`
  {
    res: allContentfulAllProducts {
      edges {
        node {
          id
          title
          by
          price
          oldprice
          rating
          ratingAmount
          slug
          category
          images {
            fixed(width: 150, height: 150, quality: 100) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`;

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
  /* width: fit-content; */
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  cursor: pointer;
  padding: 7px 0;

  &::-webkit-scrollbar {
    display: none;
  }
  /* transition: transform 300ms; */
`;

// const productsWrapper = styled.div`
// `
export default function Product({ product }) {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  // const [distance, setDistance] = useState(null);
  const [pointerNone, setPointerNone] = useState(false);
  const [left, setLeft] = useState(null);

  const [ArrowscrollLeft, setArrowscrollLeft] = useState(150);
  const [leftEnd, setLeftEnd] = useState(null);

  // console.log(distance);

  // console.log(startX);

  const productsRef = useRef();

  // console.log(leftArrowRef.current);

  // console.log(leftArrowRef.current);

  useEffect(() => {
    const ref = productsRef.current;

    ref.addEventListener("mousedown", handleOnMouseDown);
    ref.addEventListener("mouseleave", handleOnMouseLeave);
    ref.addEventListener("mouseup", handleOnMouseUp);
    ref.addEventListener("mousemove", handleOnMouseMove);

    return () => {
      ref.removeEventListener("mousedown", handleOnMouseDown);
      ref.removeEventListener("mouseleave", handleOnMouseLeave);
      ref.removeEventListener("mouseup", handleOnMouseUp);
      ref.removeEventListener("mousemove", handleOnMouseMove);
    };
  });

  // useEffect(() => {
  //   if (isDown && )
  // }, [isDown])

  // useEffect(() => {});

  function handleOnMouseDown(e) {
    setIsDown(true);
    // console.log(e);
    setStartX(e.pageX - productsRef.current.offsetLeft);

    setLeft(productsRef.current.scrollLeft);

    // console.log(e.target.offsetLeft);
  }

  function handleOnMouseLeave() {
    setIsDown(false);
    setPointerNone(false);
  }

  function handleOnMouseUp() {
    // console.log("up");
    setIsDown(false);
    setPointerNone(false);
    // console.log(e.clientX);
    // setLeft(e.clientX);
  }

  function handleOnMouseMove(e) {
    if (!isDown) {
      // console.log("mouse is not down anymore");
      return;
    }
    if (isDown) {
      setPointerNone(true);
    }
    e.preventDefault();

    // console.log(isDown);

    // console.log("mouse is down");
    const x = e.pageX - productsRef.current.offsetLeft;

    // console.log(x, startX);

    // setDistance(x - startX);
    const walk = x - startX;

    productsRef.current.scrollLeft = left - walk;
  }
  function scrollLeft(element, change, duration) {
    var start = element.scrollLeft,
      currentTime = 0,
      increment = 20;

    // console.log(start);

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

  function handleLeftArrow() {
    const leftFromElem = productsRef.current.childNodes[0].getBoundingClientRect()
      .left;

    // console.log(productsRef.current.childNodes[0].getBoundingClientRect());

    if (leftFromElem > 74) {
      console.log("nop");
      // setLeftEnd(true);

      // leftArrowRef.current.classList.add("opacity-zero") = "0";
      return;
    }
    scrollLeft(productsRef.current, -ArrowscrollLeft, 200);

    // productsRef.current.scrollLeft += -150;
  }

  function handleRightArrow() {
    const rightFromElem = productsRef.current.childNodes[
      productsRef.current.childNodes.length - 1
    ].getBoundingClientRect().right;

    // console.log(
    //   productsRef.current.childNodes[
    //     productsRef.current.childNodes.length - 1
    //   ].getBoundingClientRect()
    // );

    // const windowWidth = window.innerWidth;

    if (rightFromElem < 74) {
      console.log("nop");
      // setLeftEnd(false);
      return;
    }
    scrollLeft(productsRef.current, ArrowscrollLeft, 200);

    // productsRef.current.scrollLeft += 150;
  }

  function handleScrollLeftResize(e) {
    if (e.currentTarget.innerWidth < 600) {
      setArrowscrollLeft(250);
    }
  }

  // console.log(leftEnd);

  useEffect(() => {
    window.addEventListener("resize", handleScrollLeftResize);

    return () => {
      window.removeEventListener("resize", handleScrollLeftResize);
    };
  });

  // useEffect(() => {
  //   const leftFromElem = productsRef.current.childNodes[0].getBoundingClientRect()
  //     .left;
  //   const rightFromElem = productsRef.current.childNodes[
  //     productsRef.current.childNodes.length - 1
  //   ].getBoundingClientRect().right;

  //   if (leftFromElem > 74) {
  //     setLeftEnd(true);
  //     // leftArrowRef.current.classList.add("opacity-zero") = "0";
  //   } else {
  //     setLeftEnd(false);
  //   }

  //   // const windowWidth = window.innerWidth;

  //   // if (rightFromElem < 74) {
  //   //   // console.log("nop");
  //   //   console.log("rightended");
  //   //   setLeftEnd(false);
  //   // }
  // }, [isDown]);
  // console.log(leftEnd);

  useEffect(() => {
    productsRef.current.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      productsRef.current.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    };
  });

  function handleTransitionEnd() {
    const leftFromElem = productsRef.current.childNodes[0].getBoundingClientRect()
      .left;

    if (leftFromElem > 74) {
      setLeftEnd(true);
      // leftArrowRef.current.classList.add("opacity-zero") = "0";
    } else {
      setLeftEnd(false);
    }
  }

  // const Arrow = forwardRef((props, ref) => (
  //   <ShowcaseArrows
  //     ref={ref}
  //     icon={props.icon}
  //     style={props.style}
  //     className={props.className}
  //     onClick={props.onClick}
  //   ></ShowcaseArrows>
  // ));

  // const leftArrowRef = createRef();
  // const rightArrowRef = createRef();

  const {
    res: { edges },
  } = useStaticQuery(getBsData);

  // console.log(edges);

  const products = edges.filter(one => {
    // console.log(one.node.category);
    return one.node.category.includes(product);
  });

  if (!products) return null;

  return (
    <>
      <ShowcaseProductsWrapper ref={productsRef}>
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
      {/* <ShowcaseArrows> */}
      <ShowcaseArrows
        icon={chevronLeftFill}
        style={{ color: "#ffffff", fontSize: "40.999996185302734px" }}
        className={`showcase-arrow-icon left ${leftEnd ? "left-end" : ""}`}
        // id="showcase-left-arrow"
        onClick={handleLeftArrow}
        // ref={leftArrowRef}
      ></ShowcaseArrows>
      {/* <Icon
          
        /> */}

      <ShowcaseArrows
        icon={chevronLeftFill}
        style={{ color: "#ffffff", fontSize: "40.999996185302734px" }}
        className={`showcase-arrow-icon right`}
        onClick={handleRightArrow}
        // id="showcase-right-arrow"
        // ref={rightArrowRef}
        // ref={rightArrowRef}
      ></ShowcaseArrows>
      {/* </ShowcaseArrows> */}
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

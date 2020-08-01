import styled from "styled-components";
import { Icon } from "@iconify/react";
// import React, {  useEffect  } from "react";

// function getScrollbarWidth() {

//   let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
//   if (scrollBarWidth === 0) {
//     scrollBarWidth = 16;
//   }

//   return scrollBarWidth;

// }

// function getWindowWidth() {
//   return window.innerWidth;
// }

export const ShowcaseArrows = styled(Icon)`
  /* position: absolute;
  top: calc(50% + 64px);
  height: 60px;
  transform: translateY(calc(50% - 64px));
  display: flex; */
  /* width: 100vw; */
  /* justify-content: space-between; */

  /* .showcase-arrow-icon { */
  /* position: absolute; */
  /* top: 50%; */
  /* transform: translateY(-50%); */
  background: var(--primary-color);
  width: 40px;
  height: 60px;
  position: absolute;
  cursor: pointer;
  top: calc(50% + 64px);
  transform: translateY(calc(50% - 64px));
  transition: opacity 400ms;

  &.left-end {
    opacity: 0;
    pointer-events: none;
  }

  &.right-end {
    display: none;
  }
  /* } */

  &.left {
    left: 0%;
    border-radius: 0 9px 9px 0;
  }
  &.right {
    right: 0;
    border-radius: 9px 0 0 9px;

    path {
      transform: scale(-1, 1) translateX(-100%);
    }
  }
`;

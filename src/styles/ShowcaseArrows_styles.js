import styled from "styled-components";

export const ShowcaseArrows = styled.div`
  position: absolute;
  top: 50%;
  height: 60px;
  transform: translateY(-50%);
  display: flex;
  width: 100vw;
  /* justify-content: space-between; */

  .showcase-arrow-icon {
    background: var(--primary-color);
    width: 40px;
    height: 60px;
    position: absolute;
    cursor: pointer;
  }

  .left {
    left: 0%;
    border-radius: 0 9px 9px 0;
  }
  .right {
    right: calc(0% + (${getScrollbarWidth}px));
    border-radius: 9px 0 0 9px;
  }

  /* .showcase-arrow-icon: */
`;

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

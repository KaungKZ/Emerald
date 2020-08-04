import styled from "styled-components";
import { Icon } from "@iconify/react";

export const ShowcaseArrows = styled(Icon)`
  background: var(--primary-color);
  width: 40px;
  height: 60px;
  position: absolute;
  cursor: pointer;
  top: calc(50% + 44px);
  transform: translateY(calc(50% - 44px));
  transition: opacity 200ms;

  &.left-end {
    opacity: 0;
    pointer-events: none;
  }

  &.right-end {
    opacity: 0;
    pointer-events: none;
  }

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

  @media (max-width: 600px) {
    display: none;
    pointer-events: none;
  }
`;

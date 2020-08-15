import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "@iconify/react";
import caretLeftFill from "@iconify/icons-bi/caret-left-fill";

const PagesNavigatorStyles = styled.div`
  width: 100%;
  height: 70px;
  background: var(--general-color);
`;

const PagesWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .pages-right-arrow {
    transform: rotate(180deg);
  }

  .pages-arrow {
    opacity: 0.8;
    cursor: pointer;
    &.active {
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const Pages = styled.span`
  ${props =>
    props.active
      ? css`
          opacity: 1;
          text-decoration: underline;
        `
      : css`
          opacity: 0.8;
          text-decoration: none;
        `}
  color: #fff;
  font-family: var(--secondary-font);
  cursor: pointer;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default function PagesNavigator() {
  return (
    <PagesNavigatorStyles>
      <PagesWrapper>
        <Icon
          icon={caretLeftFill}
          style={{ color: "#ffffff", fontSize: "13.999999046325684px" }}
          className="pages-left-arrow pages-arrow"
        />
        <Pages active>1</Pages>
        <Pages>2</Pages>
        <Pages>3</Pages>
        <Pages>4</Pages>
        <Pages>5</Pages>
        <Icon
          icon={caretLeftFill}
          style={{ color: "#ffffff", fontSize: "13.999999046325684px" }}
          className="pages-right-arrow pages-arrow active"
        />
      </PagesWrapper>
    </PagesNavigatorStyles>
  );
}

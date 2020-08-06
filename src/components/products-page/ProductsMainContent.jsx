import React from "react";
import AllProducts from "../Layouts/AllProducts";
import { Icon } from "@iconify/react";
import arrowRight from "@iconify/icons-bi/arrow-right";
import { Link } from "gatsby";

import styled from "styled-components";

const AllProductStyles = styled.section`
  margin: var(--section-margin) 0;
`;

export default function ProductsMainContent() {
  return (
    <>
      {/* header banner */}

      {/* all products */}
      <AllProductStyles>
        <div className="section-title">
          <h1>All Products</h1>

          <Link to="/products" className="see-all-link">
            See all{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="see-all-icon arrow-right-icon"
            />
          </Link>
        </div>
        <AllProducts product="ai"></AllProducts>
      </AllProductStyles>
    </>
  );
}

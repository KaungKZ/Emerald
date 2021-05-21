import React from "react";
import { graphql } from "gatsby";
import Global_styles from "../styles/Global_styles";
import { Helmet } from "react-helmet";
import Product_Detail from "../components/product-detail-page/Product_Detail";

export default function TemplateItem({ data: { res } }) {
  return (
    <>
      <Global_styles />
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
        <title itemProp="name" lang="en">
          {res.title}
        </title>

        <meta
          name="description"
          content={`${res.description ? res.description.description : ""}`}
        />
        <meta
          name="keywords"
          content="e-commerce, front-end development, gatsby e-commerce"
        />
        <meta property="og:site_name" content="Emerald" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Emerald" />
        <meta
          property="og:description"
          content={`${res.description ? res.description.description : ""}`}
        />
        <meta
          property="og:url"
          content={`https://emeraldos.netlify.app/product/${res.id}`}
        />
        <meta property="og:locale" content="en_US" />
        <link
          rel="canonical"
          href={`https://emeraldos.netlify.app/product/${res.id}`}
        />
      </Helmet>
      <Product_Detail data={res} />
    </>
  );
}

// graphql query

export const query = graphql`
  query MyQuery($slug: String) {
    res: contentfulAllProducts(id: { eq: $slug }) {
      id
      title
      by
      type
      price
      oldprice
      description {
        description
      }
      rating
      ratingAmount
      gender
      size
      images {
        fixed(height: 150, width: 150) {
          ...GatsbyContentfulFixed
        }
      }
      reviews {
        reviews {
          name
          rating
          comment
          date
        }
      }
    }
  }
`;

import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layouts/Layout";
import EmptyPage from "../components/Layouts/EmptyPage";
import Global_styles from "../styles/Global_styles";
import { Helmet } from "react-helmet";
import Product_Detail from "../components/Layouts/Product_Detail";

export default function TemplateItem({ data: { res } }) {
  // console.log(res);
  return (
    <>
      <Global_styles />
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          ></meta>
          <title itemProp="name" lang="en">
            {res.title}
          </title>

          <meta name="description" content={`${res.description.description}`} />
          <meta
            name="keywords"
            content="e-commerce, front-end development, gatsby e-commerce"
          />
          <meta property="og:site_name" content="Emerald" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Emerald" />
          <meta
            property="og:description"
            content={`${res.description.description}`}
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
        {/* <EmptyPage data={res}>{res.title}</EmptyPage> */}
        <Product_Detail data={res} />
      </Layout>
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
        fixed(height: 100, width: 100) {
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

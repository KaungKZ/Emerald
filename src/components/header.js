import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const recieve = graphql`
  {
    site {
      siteMetadata {
        description
        developer
        title
      }
    }
  }
`;

export default function Header() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(recieve);

  return <div>{siteMetadata.title}</div>;
}

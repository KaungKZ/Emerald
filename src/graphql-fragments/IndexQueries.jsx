// import React from "react";
// import { graphql, StaticQuery } from "gatsby";
// import CategoryList from "../components/home-page/CategoryList";

// export default function IndexQueries() {
//   <StaticQuery
//     query={graphql`
//       query Images {
//         allLocation {
//           nodes {
//             ...headerAndCategoryImages
//           }
//         }
//       }
//     `}
//     render={query => <CategoryList query={query} {...props} />}
//   />;

//   return <div></div>;
// }

// export const headerAndCategoryImages = graphql`
//   fragment headerAndCategoryImages on Query {
//     file(relativePath: { eq: "home/home header section banner.jpg" }) {
//       relativePath
//       childImageSharp {
//         fluid(maxWidth: 700, maxHeight: 600, jpegQuality: 100) {
//           src
//         }
//       }
//     }
//     allFile(filter: { relativeDirectory: { eq: "home/categories" } }) {
//       edges {
//         node {
//           relativeDirectory
//           childImageSharp {
//             fixed(width: 250, height: 300) {
//               src
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// import React from "react";
// import { Link } from "gatsby";
// // import { Button } from "../components/button";
// import { useStaticQuery, graphql } from "gatsby";
// //import styled from "styled-components";
// import Header from "../components/header";

// const files = graphql`
//   {
//     res: allHomeDataJson(filter: { id: { eq: "1" } }) {
//       edges {
//         node {
//           id
//           image
//           name
//           price
//         }
//       }
//     }
//   }
// `;

// export default function store() {
//   const {
//     res: {
//       edges: { node },
//     },
//   } = useStaticQuery(files);

//   console.log(node);

//   return (
//     <>
//       <Header></Header>

//       {/* <Button>Click me</Button> */}
//       <Link to="/product/">Click here if you wanna buy this item homie</Link>
//     </>
//   );
// }

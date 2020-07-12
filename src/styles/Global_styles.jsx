import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const Global_styles = createGlobalStyle`



html {
    --primary-color: #E0CCA7;
    --primary-light: #FFEFD0;
    --general-color: #606060;
    --text-color: #353535;
    --light-text-color: #5a5a5a;
    --body-background-color: #fdfdfd;
    --section-margin: 119px;
    --small-section-margin: 64px;
    --item-margin: 50px;
    --large-item-margin: 100px;
    --primary-font: 'Montserrat', sans-serif;
    --secondary-font: 'Poppins', sans-serif;
    --small-title-font: 'Raleway', sans-serif;

}
 * {
     margin: 0;
     padding: 0;  
     box-sizing: border-box;
 }

 body {
     background: var(--body-background-color);
     /* font-family: 'Montserrat', sans-serif, 'Poppins', sans-serif, 'Raleway', sans-serif; */
 }

 .section-title {

 }

 .btn-link {
    padding: 10px 20px;
    font-family: var(--secondary-font);
    font-size: 18px;
    color: var(--text-color);
   
    border: 1px solid rgba(96, 96, 96, 0.6);
    text-decoration: none;
    display: flex;
    align-items: center;
    width: fit-content;
    transition: padding 400ms;
    text-transform: capitalize;
    

    .arrow-right-icon {
        margin-left: 10px;
    }

    &:hover {
        padding: 10px 23px 10px 20px;
    }

    
 }


`;

export default Global_styles;

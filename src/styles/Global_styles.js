// import React from "react";
// import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import "./typography.css";

const Global_styles = createGlobalStyle`



html {
    --primary-color: #E0CCA7;
    --primary-light: #FFEFD0;
    --general-color: #606060;
    --text-color: #353535;
    --light-text-color: #5a5a5a;
    --body-background-color: #fdfdfd;
    --small-margin: 7px;
    --section-margin: 119px;
    --small-section-margin: 64px;
    --item-margin: 50px;
    --large-item-margin: 100px;
    --primary-font: 'Montserrat', sans-serif;
    --secondary-font: 'Poppins', sans-serif;
    --small-title-font: 'Raleway', sans-serif;
    --normal-text: 16px;
    --btn-text: 18px;
    --btn-padding: 10px 20px;
    
    /* --tablet-screen-font-size: 14px;
    --phone-screen-font-size: 12px; */
    --section-title-font-size: 1.8rem;
    /* scroll-behavior: smooth;
    -webkit-scroll-behavior-duration: 0.5s;
-webkit-scroll-behavior-timing-function: ease-in; */
}
 * {
     margin: 0;
     padding: 0;  
     box-sizing: border-box;
 }

 body {
     background: var(--body-background-color);

     @media (min-width: 2200px) {
        max-width: 2200px;
     margin: 0 auto;
     }
     

     

     /* font-family: 'Montserrat', sans-serif, 'Poppins', sans-serif, 'Raleway', sans-serif; */
 }

 #gatsby-focus-wrapper {
    overflow: hidden;
 }

 /* #gatsby-focus-wrapper.close {
     overflow: hidden;
 }

 #gatsby-focus-wrapper.open {
    overflow: unset;
 } */

 .section-title {
    
    font-family: var(--secondary-font);
    
    /* display: inline-block; */
    width: 80%;
    
    margin: 0 auto var(--item-margin) auto;
    display: flex;
    align-items: center;


    h1 {
        border-radius: 9px 9px 0 0;
        background: var(--primary-light);
        padding: 10px 20px;
    font-size: var(--section-title-font-size);
    font-weight: 700;
    color: var(--light-text-color);
    text-decoration: underline;
    text-transform: capitalize;
    }

    .see-all-link {
        margin-left: 15px;
        display: flex;
        color: var(--light-text-color);
        text-decoration: none;
        text-transform: capitalize;
        font-size: var(--normal-text);
        transition: opacity 300ms;
        opacity: 0.9;
        align-items: center;
        
        .see-all-icon {
            margin-left: 10px;
        }

        &:hover {
            /* text-decoration: underline; */
            opacity: 1;
        }

    }
    @media (max-width: 480px) {

        width: 85%;

        h1 {
            padding: 7px 18px;
        }
        .see-all-link {
            .see-all-icon {
                font-size: 18px !important;
                margin-left: 8px;
            }
       
    }

    /* @media (max-width: 500px) {
        h1 {

        }
    } */
 }

 @media (max-width: 360px) {
     width: 90%;
    .see-all-link {
        margin-left: 7px;
    }
 }
 }

 .btn-link {

    padding: var(--btn-padding);
    font-family: var(--secondary-font);
    font-size: var(--btn-text);
    color: var(--text-color);
    background: #fff;
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
        /* padding: 10px 23px 10px 20px; */
    }

    @media (max-width: 600px) {
        .arrow-right-icon {
            font-size: 18px !important;
        }
    }

   
    }

    
 }

 @media (max-width: 1280px) {

html {
 
   
   --btn-text: 16px;
 
}

}
 @media (max-width: 1024px) {

     html {
        --btn-padding: 7px 20px;
        --normal-text: 14px;
        --header-title: 2.3rem;
     }
  
 }

 @media (max-width: 768px) {

     html {
        --section-title-font-size: 1.5rem;
     }
     
 }

 @media (max-width: 600px) {
     html {
        --btn-text: 14px;
         --btn-padding: 5px 15px;
         
        
     }
 }

 @media (max-width: 500px) {
     html {
        --section-title-font-size: 1.4rem;
     }
 }
 @media (max-width: 480px) {
     html {
        --normal-text: 12px;
        --btn-padding: 7px 15px;
     }
 }

 @media (max-width: 400px) {
     html {
        --section-title-font-size: 1.1rem;
     }
 }


`;

export default Global_styles;

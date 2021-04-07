import { createGlobalStyle } from "styled-components";
import "./typography.css";
// import "./test.css";

const Global_styles = createGlobalStyle`

html {
    --primary-color: #E0CCA7;
    --primary-light: #FFEFD0;
    --general-color: #606060;
    --text-color: #353535;
    --light-text-color: #5a5a5a;
    --body-background-color: #fdfdfd;
    --grey-color: #e5e5e5;
    --light-grey-color: #eeeeee;
    --small-margin: 7px;
    --section-margin: 119px;
    --small-section-margin: 64px;
    --item-margin: 50px;
    --large-item-margin: 100px;
    --primary-font: 'Montserrat', sans-serif;
    --secondary-font: 'Poppins', sans-serif;
    --small-title-font: 'Raleway', sans-serif;
    --content-font:  'Work Sans', sans-serif;
    --normal-text: 16px;
    --btn-text: 18px;
    --btn-padding: 10px 20px;
    --small-btn-padding: 5px 15px;
    --section-title-font-size: 1.8rem;
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
 }

 #gatsby-focus-wrapper {
    overflow: hidden;
 }

 /* .section-title {
    
    font-family: var(--secondary-font);
    width: 80%;
    margin: 0 auto var(--item-margin) auto;
    display: flex;
    align-items: center;

    &.showcase-title {
        margin: 0 auto;
    }


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


    @media (max-width: 480px) {

        width: 85%;

        h1 {
            padding: 7px 18px;
        }

 }



 @media (max-width: 330px) {
    h1 {
            padding: 7px 10px;
        }
    }
 } */



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
    --section-margin: 90px;

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

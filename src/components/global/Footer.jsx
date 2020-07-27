import React from "react";
import { Link } from "gatsby";
import twitter from "../../images/home/social medias/twitter.svg";
import facebook from "../../images/home/social medias/facebook.svg";
import youtube from "../../images/home/social medias/youtube.svg";
import instagram from "../../images/home/social medias/instagram.svg";
import styled, { css } from "styled-components";

const FooterMain = styled.footer`
  padding: 50px 0;
  /* background:  */
  position: relative;
  background: rgba(255, 239, 208, 0.5);
`;

const FooterWrapperLinks = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;

const FooterHeaderTitle = styled.div`
  font-family: var(--primary-font);
  margin-bottom: 25px;

  h1 {
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--text-color);
  }
`;

const FooterLinkList = styled.ul`
  li:not(:last-child) {
    margin-bottom: var(--small-margin);
  }
  li {
    list-style-type: none;
    font-family: var(--secondary-font);

    a {
      text-decoration: none;
      color: var(--light-text-color);
      opacity: 0.8;
      font-size: 14px;
      text-transform: capitalize;
    }
  }

  ${props =>
    props.social &&
    css`
      li:not(:last-child) {
        margin-bottom: calc(var(--small-margin) * 2);
      }
      li a {
        display: flex;
        align-items: center;
      }
      img {
        width: 23px;
        height: 23px;
        margin-right: var(--small-margin);
      }
    `}
`;

const FooterSection = styled.div``;

const FooterCopyright = styled.div`
  font-family: var(--secondary-font);
  font-size: 14px;
  position: absolute;
  top: 85%;
  right: 30%;
  transform: translate(30%, -85%);
  color: var(--light-text-color);
  opacity: 0.8;
`;

// const FooterHelpCenter = styled.div``;

// const FooterSell = styled.div``;

// const FooterSocial = styled.div``;

export default function Footer() {
  return (
    <FooterMain>
      <FooterWrapperLinks>
        <FooterSection>
          <FooterHeaderTitle>
            <h1>About</h1>
          </FooterHeaderTitle>
          <FooterLinkList>
            <li className="about-li">
              <Link to="/" className="about-a a">
                About
              </Link>
            </li>
            <li className="about-li">
              <Link to="/" className="about-a">
                Blog
              </Link>
            </li>
            <li className="about-li">
              <Link to="/" className="about-a">
                Login
              </Link>
            </li>
            <li className="about-li">
              <Link to="/" className="about-a">
                Signup
              </Link>
            </li>
            <li className="about-li">
              <Link to="/" className="about-a">
                Student Discount
              </Link>
            </li>
            <li className="about-li">
              <Link to="/" className="about-a">
                Copyright
              </Link>
            </li>
            <li className="about-li">
              <Link to="/" className="about-a a">
                Advertise with us
              </Link>
            </li>
          </FooterLinkList>
        </FooterSection>
        <FooterSection>
          <FooterHeaderTitle>
            <h1>Help center</h1>
          </FooterHeaderTitle>
          <FooterLinkList>
            <li className="about-li">
              <Link to="/" className="about-a">
                Guidelines
              </Link>
            </li>
            <li className="about-li">
              <Link to="/" className="about-a">
                Orders
              </Link>
            </li>
            <li className="about-li">
              <Link to="/" className="about-a">
                Account
              </Link>
            </li>
            <li className="about-li">
              <Link to="/" className="about-a">
                Shipping rates and policy
              </Link>
            </li>
            <li className="about-li">
              <Link to="/" className="about-a">
                Return and replacement
              </Link>
            </li>
          </FooterLinkList>
        </FooterSection>
        <FooterSection>
          <FooterHeaderTitle>
            <h1>Sell</h1>
          </FooterHeaderTitle>
          <FooterLinkList>
            <li className="about-li">
              <Link to="/" className="about-a">
                Start selling
              </Link>
            </li>
            <li className="about-li">
              <Link to="/" className="about-a">
                How to sell
              </Link>
            </li>
            <li className="about-li">
              <Link to="/" className="about-a">
                Business sellers
              </Link>
            </li>
            <li className="about-li">
              <Link to="/" className="about-a">
                Guides
              </Link>
            </li>
          </FooterLinkList>
        </FooterSection>
        <FooterSection>
          <FooterHeaderTitle>
            <h1>Social</h1>
          </FooterHeaderTitle>
          <FooterLinkList social>
            <li className="about-li">
              <Link to="/" className="about-a">
                <img src={twitter} alt="" />
                Twitter
              </Link>
            </li>
            <li className="about-li">
              <Link to="/" className="about-a">
                <img src={facebook} alt="" />
                facebook
              </Link>
            </li>
            <li className="about-li">
              <Link to="/" className="about-a">
                <img src={youtube} alt="" />
                youtube
              </Link>
            </li>
            <li className="about-li">
              <Link to="/" className="about-a">
                <img src={instagram} alt="" />
                instagram
              </Link>
            </li>
          </FooterLinkList>
        </FooterSection>
      </FooterWrapperLinks>
      <FooterCopyright>
        Copyright &#169; {new Date().getFullYear()} Emerald Inc. All rights
        reserved
      </FooterCopyright>
    </FooterMain>
  );
}

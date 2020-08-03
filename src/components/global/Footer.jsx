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

  @media (max-width: 500px) {
    padding: 50px 0 75px 0;
  }
`;

const FooterWrapperLinks = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }
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

  @media (max-width: 768px) {
    h1 {
      font-size: 1.3rem;
      font-weight: 700;
      text-align: center;
    }
  }

  /* @media (max-width: 600px) {
    h1 {
      font-size: 1rem
    }
  } */
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

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    row-gap: 10px;

    li:nth-child(3n) {
      text-align: right;
    }

    li:nth-child(3n - 1) {
      text-align: center;
    }

    li:not(:last-child) {
      margin-bottom: 0;
    }
    ${props =>
      props.social &&
      css`
        li:nth-child(3n) a {
          justify-content: flex-end;
        }

        li:nth-child(3n - 1) a {
          justify-content: center;
        }
      `}
  }
  @media (max-width: 600px) {
    li a {
      font-size: 12px;
    }
    ${props =>
      props.social &&
      css`
        img {
          width: 18px;
          height: 18px;
          margin-right: var(--small-margin);
        }
      `}
  }
`;

const FooterSection = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const FooterDeveloper = styled.div`
  font-family: var(--secondary-font);
  font-size: 14px;
  width: fit-content;

  position: absolute;
  top: 95%;
  left: 30%;
  transform: translate(-30%, -95%);
  color: var(--light-text-color);
  opacity: 0.8;

  .github-link {
    color: var(--light-text-color);
  }

  @media (max-width: 1024px) {
    left: 15%;
    transform: translate(-15%, -95%);
  }

  @media (max-width: 768px) {
    left: 5%;
    transform: translate(-5%, -95%);
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }

  @media (max-width: 500px) {
    /* width: 100%; */
    top: 97%;
    left: 50%;
    transform: translate(-50%, -96%);
  }
`;

const FooterCopyright = styled.div`
  width: fit-content;
  text-align: right;
  font-family: var(--secondary-font);
  font-size: 14px;
  position: absolute;
  top: 95%;
  right: 30%;
  transform: translate(30%, -95%);
  color: var(--light-text-color);
  opacity: 0.8;

  @media (max-width: 1024px) {
    right: 15%;
    transform: translate(15%, -95%);
  }

  @media (max-width: 768px) {
    right: 20%;
    transform: translate(20%, -95%);
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }

  @media (max-width: 500px) {
    width: 100%;
    text-align: center;
    top: 92%;
    right: 0;
    left: 50%;
    transform: translate(-50%, -90%);
  }
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
      <FooterDeveloper>
        Made by{" "}
        {
          <a
            href="https://github.com/KaungKZ"
            target="_blank"
            className="github-link"
            rel="noreferrer"
          >
            KaungKZ
          </a>
        }
      </FooterDeveloper>
      <FooterCopyright>
        Copyright &#169; {new Date().getFullYear()} Emerald Inc. All rights
        reserved
      </FooterCopyright>
    </FooterMain>
  );
}

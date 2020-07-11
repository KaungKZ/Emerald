import React from "react";
import { Link } from "gatsby";
import twitter from "../../images/home/social medias/twitter.svg";
import facebook from "../../images/home/social medias/facebook.svg";
import youtube from "../../images/home/social medias/youtube.svg";
import instagram from "../../images/home/social medias/instagram.svg";

export default function Footer() {
  return (
    <footer>
      <div className="warpper-footer-links">
        <div className="about">
          <div className="about-title footer-title">
            <h1>About</h1>
          </div>
          <ul className="about-ul ul">
            <li className="about-li li">
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
            <li className="about-li li">
              <Link to="/" className="about-a a">
                Advertise with us
              </Link>
            </li>
          </ul>
        </div>
        <div className="help-center">
          <div className="help-center-title footer-title">
            <h1>Help center</h1>
          </div>
          <ul className="about-ul">
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
          </ul>
        </div>
        <div className="sell">
          <div className="sell-title footer-title">
            <h1>Sell</h1>
          </div>
          <ul className="about-ul">
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
          </ul>
        </div>
        <div className="social">
          <div className="social-title footer-title">
            <h1>Social</h1>
          </div>
          <ul className="about-ul">
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
          </ul>
        </div>
      </div>
      <div className="copyright">
        Copyright &#169; {new Date().getFullYear()} Emerald Inc. All rights
        reserved
      </div>
    </footer>
  );
}

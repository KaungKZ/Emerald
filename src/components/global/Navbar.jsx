import React, { useState, useEffect, useRef } from "react";
import { Icon, InlineIcon } from "@iconify/react";
import heartOutlined from "@iconify/icons-ant-design/heart-outlined";
import cart2Icon from "@iconify/icons-bi/cart2";
import { Link } from "gatsby";
import menuAlt3 from "@iconify/icons-heroicons-outline/menu-alt-3";
import windowCloseLine from "@iconify/icons-clarity/window-close-line";
import styled from "styled-components";

const Header = styled.header`
  @media (max-width: 600px) {
    position: relative;
    &.open {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.25);
        z-index: 2;
        /* transition-delay: 400ms; */
      }
    }
  }
`;

const WrapperHeaderContent = styled.div`
  @media (max-width: 600px) {
    position: relative;
  }
`;

const NavMain = styled.nav`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  .logo {
    /* flex: 1; */
    text-decoration: none;
    color: var(--general-color);
    font-family: var(--primary-font);
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .wishlist {
    /* margin-right: 35px; */
    display: flex;
    align-items: center;
  }

  @media (max-width: 600px) {
    position: relative;
    width: 100%;
    /* overflow: hidden; */

    .logo {
      margin-left: 10%;
      font-size: 1.6rem;
    }

    /* .wishlist {
      margin-right: 10%;
    } */
  }
`;

const NavWrapperCarts = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100px;

  .hidden-lg {
    display: none;
  }

  @media (max-width: 600px) {
    padding: 4rem 1rem 1rem 1rem;
    position: absolute;
    flex-direction: column;
    justify-content: space-evenly;
    top: 0;
    right: 0;
    /* transform: translateY(-50%); */
    min-width: auto;
    width: 50%;
    height: calc(30vh + 11px);
    background: #fff;
    z-index: 1;
    box-shadow: -4px 0px 4px -4px rgba(0, 0, 0, 0.25);
    transform: translateX(100%);
    transition: transform 0ms ease-out;

    a svg {
      margin-right: var(--small-margin);
      font-size: 20px !important;
    }

    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hidden-lg {
      font-family: var(--small-title-font);
      display: inline;
      color: var(--light-text-color);
      font-size: 14px;
      letter-spacing: 1px;
    }

    .hidden-closed-nav {
      position: absolute;
      top: 1.5rem;
      left: 80%;
      transform: translateX(-80%);
      cursor: pointer;
    }

    &::after {
      content: "";
      position: absolute;
      top: calc(100% - 13px);
      left: 0;
      width: 100%;
      height: 2px;
      background: rgba(90, 90, 90, 0.2);
    }

    &.open {
      transform: translateX(0);
      z-index: 4;
      transition: transform 400ms ease-in;
    }
  }

  @media (max-width: 425px) {
    width: 70%;
  }
`;

const NavUl = styled.ul`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  border-top: 1px solid rgba(96, 96, 96, 0.4);
  border-bottom: 1px solid rgba(96, 96, 96, 0.4);

  @media (max-width: 600px) {
    margin-top: 30vh;
    position: absolute;
    flex-direction: column;
    border-top: none;
    border-bottom: none;
    top: 0;
    height: 70vh;
    right: 0;
    width: 50%;
    box-shadow: -4px 4px 4px -4px rgba(0, 0, 0, 0.25);
    /* height: auto; */
    /* transform: translateY(-100%); */
    background: #fff;
    z-index: 2;
    justify-content: space-around;
    align-items: flex-start;
    padding: 0.8rem 0 4rem 0;
    transform: translateX(100%);
    transition: transform 0ms ease-out;

    &.open {
      transform: translateX(0);
      z-index: 4;
      transition: transform 400ms ease-in;
    }
  }

  @media (max-width: 425px) {
    width: 70%;
  }
`;

const NavLi = styled.li`
  list-style-type: none;
  a {
    text-decoration: none;
    color: var(--light-text-color);
    font-family: var(--secondary-font);
    font-size: 14px;
    opacity: 0.9;
    transition: opacity 300ms;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 12px;
    }
  }

  @media (max-width: 600px) {
    /* width: 90%;
    margin: 0 auto; */

    flex: 1;
    width: 100%;

    a {
      padding: 0 5%;
      font-family: var(--small-title-font);
      /* width: 100%; */
      display: flex;
      align-items: center;
      width: 100%;
      /* font-size: 14px; */
      /* font-weight: 700; */
      letter-spacing: 3px;
      /* display: block; */
      height: 100%;
      opacity: 1;
    }
  }
`;

const NavMobile = styled.div`
  display: none;

  @media (max-width: 600px) {
    cursor: pointer;
    display: block;
    margin-right: 10%;
    z-index: 99;

    &.open {
      display: none;
    }
  }
`;

// const BodyScrollbarHide = styled.css`
//   &::webkit-scrollbar {
//     display: none;
//   }
// `

// const BodyScrollbarHide = styled.css`
//   &::webkit-scrollbar {
//     display: none;
//   }
// `

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  const navRef = useRef(null);
  // handleClickOutsideNav(navRef);

  // const gatsby_focus_wrapper = document.querySelector("#gatsby-focus-wrapper");

  useEffect(() => {
    // console.log(toggleNav);
    if (toggleNav) {
      // document.body.classList.add("fixed-for-nav");
      document.body.style.overflow = "hidden";
      // .example::-webkit-scrollbar {
      //   display: none;
      // }
    } else {
      // document.body.classList.remove("fixed-for-nav");
      document.body.style.overflow = "unset";
    }
  }, [toggleNav]);

  useEffect(() => {
    // if (!toggleNav) {
    //   return;
    // }

    document.addEventListener("click", handleClickOutsideNav);

    return () => {
      document.removeEventListener("click", handleClickOutsideNav);
    };
  });

  function handleClickOutsideNav(e) {
    // console.log(navRef.current);
    if (navRef.current && !navRef.current.contains(e.target)) {
      setToggleNav(false);
    }
  }

  return (
    <Header className={`${toggleNav ? "open" : ""}`}>
      <WrapperHeaderContent
        ref={navRef}
        // className={`${toggleNav ? "overlay-open" : ""}`}
      >
        <NavMain>
          <Link to="/" className="logo">
            Emerald
          </Link>
          <NavWrapperCarts className={`${toggleNav && "open"}`}>
            <Link to="/wishlist" className="wishlist">
              <Icon
                icon={heartOutlined}
                style={{ color: "#606060", fontSize: "30px" }}
              />
              <span className="hidden-lg">Wishlist</span>
            </Link>
            <Link to="/cart" className="cart">
              <Icon
                icon={cart2Icon}
                style={{ color: "#606060", fontSize: "30px" }}
              />
              <span className="hidden-lg">Shopping cart</span>
            </Link>
            <Icon
              icon={windowCloseLine}
              style={{ color: "#606060", fontSize: "30px" }}
              className="hidden-lg hidden-closed-nav"
              onClick={() => setToggleNav(!toggleNav)}
            />
          </NavWrapperCarts>
          <NavMobile
            className={`hidden-lg ${toggleNav && "open"}`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <Icon icon={menuAlt3} style={{ fontSize: "30px" }} />
          </NavMobile>
        </NavMain>

        {/* <div className="header-categories"> */}
        <NavUl className={`${toggleNav && "open"}`}>
          <NavLi>
            <Link to="/products">Fashion</Link>
          </NavLi>
          <NavLi>
            <Link to="/products">Electronics</Link>
          </NavLi>
          <NavLi>
            <Link to="/products">Kids and Babies</Link>
          </NavLi>
          <NavLi>
            <Link to="/products">Home appliances</Link>
          </NavLi>
          <NavLi>
            <Link to="/products">Sport</Link>
          </NavLi>
          <NavLi>
            <Link to="/products">Gaming</Link>
          </NavLi>
          <NavLi>
            <Link to="/products">Security</Link>
          </NavLi>
          <NavLi>
            <Link to="/products">Accessories</Link>
          </NavLi>
        </NavUl>
      </WrapperHeaderContent>
      {/* </div> */}
    </Header>
  );
}

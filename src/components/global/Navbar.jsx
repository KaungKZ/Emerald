import React, { useState, useEffect, useRef, useContext } from "react";
import { Icon } from "@iconify/react";
import heartOutlined from "@iconify/icons-ant-design/heart-outlined";
import cart2Icon from "@iconify/icons-bi/cart2";
import { Link } from "gatsby";
import menuAlt3 from "@iconify/icons-heroicons-outline/menu-alt-3";
import windowCloseLine from "@iconify/icons-clarity/window-close-line";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

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
        z-index: 4;
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
    text-decoration: none;
    color: var(--general-color);
    font-family: var(--primary-font);
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .wishlist {
    display: flex;
    align-items: center;
  }

  @media (max-width: 600px) {
    position: relative;
    width: 100%;

    .logo {
      margin-left: 10%;
      font-size: 1.6rem;
    }
  }
`;

const NavWrapperCarts = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100px;

  .hidden-lg {
    display: none;
  }

  .cart {
    position: relative;

    .active-cart-items-length {
      position: absolute;
      top: -5px;
      right: -5px;
      width: 17px;
      height: 17px;
      background: rgba(202, 11, 0, 0.85);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;

      .length {
        font-family: var(--content-font);
        color: #fff;
        font-size: 14px;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 4rem 1rem 1rem 1rem;
    position: absolute;
    flex-direction: column;
    justify-content: space-evenly;
    top: 0;
    right: 0;
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
  height: 100%;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 600px) {
    flex: 1;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--light-text-color);
  font-family: var(--secondary-font);
  font-size: 14px;
  opacity: 0.9;
  transition: opacity 300ms;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    color: var(--text-color);
    padding: 0 5%;
    font-family: var(--small-title-font);
    display: flex;
    align-items: center;
    width: 100%;
    letter-spacing: 3px;
    height: 100%;
    opacity: 1;
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

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [isBetween600n1024, setIsBetween600n1024] = useState(false);
  const [activeItemsLength, setActiveItemsLength] = useState(0);
  const { isStorageChanged, setIsStorageChanged } = useContext(ThemeContext);

  const navRef = useRef(null);

  useEffect(() => {
    if (toggleNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [toggleNav]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("selectedProduct"));
    if (storedProducts) {
      // console.log(storedProducts);
      setActiveItemsLength(storedProducts.length);
    } else {
      setActiveItemsLength(0);
    }
    // function handleLocalStorageChange() {
    //   console.log("xi");
    //   const storedProducts = JSON.parse(
    //     localStorage.getItem("selectedProduct")
    //   );
    //   console.log(storedProducts);
    //   if (storedProducts) {
    //     setActiveItemsLength(storedProducts.length);
    //   } else {
    //     setActiveItemsLength(0);
    //   }
    // }
    // document.addEventListener("itemInserted", handleLocalStorageChange, false);
    // return () => {
    //   document.removeEventListener(
    //     "itemInserted",
    //     handleLocalStorageChange,
    //     false
    //   );
    // };
  }, [isStorageChanged]);

  // console.log(activeItemsLength);

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideNav);
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResizeNav);
    }

    return () => {
      document.removeEventListener("click", handleClickOutsideNav);
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResizeNav);
      }
    };
  });

  // console.log(isBetween600n1024);

  function handleResizeNav(e) {
    if (e.currentTarget.innerWidth < 1024 && e.currentTarget.innerWidth > 600) {
      setIsBetween600n1024(true);
    } else {
      setIsBetween600n1024(false);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1024 && window.innerWidth > 600) {
        setIsBetween600n1024(true);
      } else {
        setIsBetween600n1024(false);
      }
    }
  }, []);

  function handleClickOutsideNav(e) {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setToggleNav(false);
    }
  }

  return (
    <Header className={`${toggleNav ? "open" : ""}`}>
      <WrapperHeaderContent ref={navRef}>
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
              {activeItemsLength === 0 || !activeItemsLength ? null : (
                <span className="active-cart-items-length">
                  <span className="length">{activeItemsLength}</span>
                </span>
              )}
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
        <NavUl className={`${toggleNav && "open"}`}>
          <NavLi>
            <NavLink to="/products">Fashion</NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/products">Electronics</NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/products">
              {isBetween600n1024 ? "Kids and .." : "Kids and Babies"}
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/products">
              {isBetween600n1024 ? "Home app .." : "Home appliances"}
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/products">Sport</NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/products">Gaming</NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/products">Security</NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/products">Accessories</NavLink>
          </NavLi>
        </NavUl>
      </WrapperHeaderContent>
    </Header>
  );
}

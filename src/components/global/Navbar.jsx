import React, { useState, useEffect, useRef, useContext } from "react";
import { Icon } from "@iconify/react";
import heartOutlined from "@iconify/icons-ant-design/heart-outlined";
import cart2Icon from "@iconify/icons-bi/cart2";
import { Link } from "gatsby";
import menuAlt3 from "@iconify/icons-heroicons-outline/menu-alt-3";
import windowCloseLine from "@iconify/icons-clarity/window-close-line";
import styled from "styled-components";
import { ContextValues } from "../context/ContextSetup";
import { useInView } from "react-intersection-observer";

const Header = styled.header`
  @media (max-width: 600px) {
    position: relative;

    &.sticky {
      z-index: 99;
      position: fixed;
      top: 0;
      left: 0%;
      height: 65px;
      box-shadow: rgb(0 0 0 / 5%) 0px 6px 24px 0px,
        rgb(0 0 0 / 8%) 0px 0px 0px 1px;
      width: 100%;
    }
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
    height: 100%;
  }
`;

const WrapperNavMain = styled.div`
  width: 100%;
  background: #fdfdfd;
  height: 100px;
  &.sticky {
    /* background: #fff; */
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0%;
    height: 80px;
    box-shadow: rgb(0 0 0 / 5%) 0px 6px 24px 0px,
      rgb(0 0 0 / 8%) 0px 0px 0px 1px;
  }

  @media (max-width: 600px) {
    &.sticky {
      z-index: 1;
      position: initial;
      /* height: 100px; */
      height: 100%;
    }
  }
`;

const NavMain = styled.nav`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
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

  .cart,
  .wishlist {
    position: relative;

    .active-cart-items-length,
    .active-cart-items-length-hidden-lg {
      position: absolute;
      top: -4px;
      right: -10px;
      width: 21px;
      height: 21px;
      background: rgba(202, 11, 0, 0.95);
      display: flex;
      justify-content: center;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
        rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
      align-items: center;
      border-radius: 50px;

      &.wishlist-inner {
        background: var(--general-color);
      }

      .length {
        font-family: var(--content-font);
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        padding: 4px;

        &.over-9 {
          font-size: 12px;
        }
      }
    }

    &.active-length::before {
      content: "";
      position: absolute;
      top: -7px;
      right: -13px;
      width: 27px;
      height: 27px;
      background: #fff;
      border-radius: 25px;
      z-index: 0;
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
    transform: translateX(105%);
    transition: transform 0ms ease-out;

    .cart,
    .wishlist {
      .active-cart-items-length {
        display: none;
      }
      .active-cart-items-length-hidden-lg {
        top: 50%;
        right: -25px;
        transform: translateY(-50%);

        .length {
          font-size: 12px;
          &.over-9 {
            font-size: 11px;
          }
        }
      }
    }

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
      position: relative;
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

  @media (max-width: 320px) {
    width: 80%;
  }

  @media (max-width: 300px) {
    .cart,
    .wishlist {
      .active-cart-items-length-hidden-lg {
        right: -20px;
      }
    }
  }
`;

const NavUl = styled.ul`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  /* background: rgba(255, 239, 208, 0.5); */
  background: #fff;
  border-top: 1px solid rgba(96, 96, 96, 0.2);
  border-bottom: 1px solid rgba(96, 96, 96, 0.2);

  &.sticky {
    margin-top: 100px;
  }

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
    transform: translateX(105%);
    transition: transform 0ms ease-out;

    &.sticky {
      margin-top: 30vh;
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

  @media (max-width: 320px) {
    width: 80%;
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
    margin-top: 5px;

    &.open {
      display: none;
    }
  }
`;

const IntersectionDiv = styled.div`
  @media (max-width: 600px) {
    &.sticky {
      margin-top: 100px;
    }
  }
`;

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [isBetween600n1024, setIsBetween600n1024] = useState();
  const [cartItemsLength, setCartItemsLength] = useState(0);
  const [wishlistItemsLength, setWishlistItemsLength] = useState(0);
  const { isStorageChanged } = useContext(ContextValues);

  const navRef = useRef(null);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (toggleNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [toggleNav]);

  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem("selectedProduct"));
    const wishlistProducts = JSON.parse(
      localStorage.getItem("wishlistProducts")
    );

    if (cartProducts) {
      // console.log("yes");
      setCartItemsLength(cartProducts.length);
    } else {
      setCartItemsLength(0);
    }
    if (wishlistProducts) {
      // console.log("yes");
      setWishlistItemsLength(wishlistProducts.length);
    } else {
      setWishlistItemsLength(0);
    }
  }, [isStorageChanged]);

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
    <>
      <Header
        className={`${toggleNav ? "open" : ""} ${!inView ? "sticky" : ""}`}
      >
        <WrapperHeaderContent
          ref={navRef}
          // className={`${!inView ? "sticky" : ""}`}
        >
          <WrapperNavMain className={`${!inView ? "sticky" : ""}`}>
            <NavMain>
              <Link to="/" className="logo">
                Emerald
              </Link>
              <NavWrapperCarts className={`${toggleNav && "open"}`}>
                <Link
                  to="/wishlist"
                  className={`wishlist ${
                    wishlistItemsLength !== 0 && wishlistItemsLength
                      ? "active-length"
                      : ""
                  }`}
                >
                  <Icon
                    icon={heartOutlined}
                    style={{ color: "#606060", fontSize: "30px" }}
                  />
                  <span className="hidden-lg">
                    Wishlist
                    {wishlistItemsLength === 0 ||
                    !wishlistItemsLength ? null : (
                      <span className="active-cart-items-length-hidden-lg wishlist-inner">
                        <span
                          className={`length ${
                            wishlistItemsLength <= 9 ? "" : "over-9"
                          }`}
                        >
                          {wishlistItemsLength <= 9
                            ? wishlistItemsLength
                            : "9+"}
                        </span>
                      </span>
                    )}
                  </span>
                  {wishlistItemsLength === 0 || !wishlistItemsLength ? null : (
                    <span className="active-cart-items-length wishlist-inner">
                      <span
                        className={`length ${
                          wishlistItemsLength <= 9 ? "" : "over-9"
                        }`}
                      >
                        {wishlistItemsLength <= 9 ? wishlistItemsLength : "9+"}
                      </span>
                    </span>
                  )}
                </Link>
                <Link
                  to="/cart"
                  className={`cart ${
                    cartItemsLength !== 0 && cartItemsLength
                      ? "active-length"
                      : ""
                  }`}
                >
                  <Icon
                    icon={cart2Icon}
                    style={{ color: "#606060", fontSize: "30px" }}
                  />
                  <span className="hidden-lg">
                    Shopping cart{" "}
                    {cartItemsLength === 0 || !cartItemsLength ? null : (
                      <span className="active-cart-items-length-hidden-lg">
                        <span
                          className={`length ${
                            cartItemsLength <= 9 ? "" : "over-9"
                          }`}
                        >
                          {cartItemsLength <= 9 ? cartItemsLength : "9+"}
                        </span>
                      </span>
                    )}
                  </span>
                  {cartItemsLength === 0 || !cartItemsLength ? null : (
                    <span className="active-cart-items-length">
                      <span
                        className={`length ${
                          cartItemsLength <= 9 ? "" : "over-9"
                        }`}
                      >
                        {cartItemsLength <= 9 ? cartItemsLength : "9+"}
                      </span>
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
                <Icon
                  icon={menuAlt3}
                  style={{ fontSize: "30px", color: "606060" }}
                />
              </NavMobile>
            </NavMain>
          </WrapperNavMain>
          <NavUl
            className={`${toggleNav && "open"} ${!inView ? "sticky" : ""}`}
          >
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
      <IntersectionDiv
        className={`${!inView ? "sticky" : ""}`}
        ref={ref}
      ></IntersectionDiv>
    </>
  );
}

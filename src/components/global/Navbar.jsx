import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import heartOutlined from "@iconify/icons-ant-design/heart-outlined";
import cart2Icon from "@iconify/icons-bi/cart2";
import { Link } from "gatsby";
import styled from "styled-components";

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
`;

const NavWrapperCarts = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100px;
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
`;

export default function Navbar() {
  return (
    <header>
      <NavMain>
        <Link to="/" className="logo">
          Emerald
        </Link>
        <NavWrapperCarts>
          <Link to="/wishlist" className="wishlist">
            <Icon
              icon={heartOutlined}
              style={{ color: "#606060", fontSize: "30px" }}
            />
          </Link>
          <Link to="/cart" className="cart">
            <Icon
              icon={cart2Icon}
              style={{ color: "#606060", fontSize: "30px" }}
            />
          </Link>
        </NavWrapperCarts>
      </NavMain>

      {/* <div className="header-categories"> */}
      <NavUl>
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
      {/* </div> */}
    </header>
  );
}

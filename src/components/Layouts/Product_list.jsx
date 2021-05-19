import React, { useState, useEffect, useContext } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { Icon } from "@iconify/react";
import heartOutlined from "@iconify/icons-ant-design/heart-outlined";
import styled, { css } from "styled-components";
import starFilled from "@iconify/icons-ant-design/star-filled";
import ProductWishlistDialog from "../Dialogs/ProductWishlistDialog";
import Snackbar from "./Snackbar";
import { ContextValues } from "../context/ContextSetup";

const ShowcaseProductImage = styled.div`
  padding: 10px 7px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  .gatsby-image-wrapper {
    transform: scale(0.9);
    transition: transform 400ms;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f9f9f9;
    z-index: -1;
  }

  @media (max-width: 1024px) {
    padding: 5px 4px;
  }

  @media (max-width: 768px) {
    .gatsby-image-wrapper {
      height: 100px !important;
      width: 100px !important;
    }
  }

  @media (max-width: 440px) {
    border-radius: 9px 9px 0 0;
    &::after {
      background: ${props => props.all_items && "#f4f4f4"};
    }
  }

  @media (max-width: 320px) {
    .gatsby-image-wrapper {
      height: 80px !important;
      width: 80px !important;
    }
  }
`;

const ShowcaseProduct = styled.div`
  min-width: 250px;
  min-height: 350px;
  border: 1px solid rgba(90, 90, 90, 0.4);
  border-radius: 9px;
  position: relative;
  transition: box-shadow 400ms;

  &.swipe-active {
    pointer-events: none;
  }

  ${props =>
    !props.all_items &&
    css`
      &:not(:last-child) {
        margin-right: var(--large-item-margin);
      }

      &:first-child {
        margin-left: 75px;
      }

      &:last-child {
        position: relative;

        &::after {
          content: "";
          clear: both;
          position: absolute;
          display: block;
          top: 0;
          left: 100%;
          width: 75px;
          height: 1px;
        }
      }
    `}

  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    ${ShowcaseProductImage} {
      .gatsby-image-wrapper {
        transform: scale(0.95);
      }
    }
  }

  @media (max-width: 768px) {
    min-width: 200px;
    min-height: 270px;

    &:hover {
      box-shadow: none;
    }

    ${props =>
      !props.all_items &&
      css`
        &:not(:last-child) {
          margin-right: 70px;
        }
        &:first-child {
          margin-left: 50px;
        }
      `}
  }

  @media (max-width: 600px) {
    ${props =>
      !props.all_items &&
      css`
        &:not(:last-child) {
          margin-right: 75px;
        }
        &:first-child {
          margin-left: 50px;
        }
        &:last-child::after {
          width: 50px;
        }
      `}
  }

  @media (max-width: 440px) {
    ${props =>
      props.all_items &&
      css`
        min-width: 150px;
        border: 1px solid rgba(224, 204, 167, 0.5);
      `}
  }

  @media (max-width: 360px) {
    min-width: 180px;
    ${props =>
      !props.all_items &&
      css`
        &:not(:last-child) {
          margin-right: 35px;
        }
        &:first-child {
          margin-left: 30px;
        }
        &:last-child::after {
          width: 35px;
        }
      `}
  }

  @media (max-width: 320px) {
    min-width: 165px;
  }
`;

const ShowcaseProductLink = styled(Link)`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
`;

const ShowcaseProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  padding: 10px 15px 40px 15px;

  .item-title {
    font-family: var(--small-title-font);
    font-size: var(--normal-text);
    color: var(--text-color);
    text-transform: capitalize;
    text-align: center;
  }

  .item-by,
  .item-rating,
  .item-price {
    font-family: var(--secondary-font);
  }

  .item-by {
    color: var(--primary-color);
    font-size: 12px;

    span {
      color: var(--light-text-color);
      text-decoration: underline;
      text-transform: uppercase;
      margin-left: var(--small-margin);
      font-weight: 700;
    }
  }

  .item-rating {
    font-size: 12px;
    color: var(--light-text-color);
    display: flex;
    align-items: center;

    .rating-icon {
      margin-right: var(--small-margin);
    }
  }

  .item-price {
    font-size: var(--normal-text);
    color: var(--text-color);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    padding: 10px 15px 20px 15px;
    .item-title,
    .item-price {
      font-size: 14px !important;
    }
    .item-by,
    .item-rating {
      font-size: 10px;
    }
  }

  @media (max-width: 320px) {
    .item-by {
      font-size: 8px;
    }
  }
`;

const ShowcaseATW = styled.div`
  position: absolute;
  top: 87%;
  right: 10%;

  @media (max-width: 768px) {
    top: 83%;
    width: 28px;
    height: 28px;
  }
`;

const AddtoWishlistIcon = styled.button`
  outline: none;
  background: transparent;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 239, 208, 0.8);
  border-radius: 25px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 300ms, transform 400ms;

  &:hover {
    background: rgba(255, 239, 208, 1);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: 83%;
    width: 28px;
    height: 28px;
    &:hover {
      background: rgba(255, 239, 208, 0.8);
      transform: scale(1);
    }
  }
`;

export default function ProductList({ details, pointerNone, all_items }) {
  const [showAlreadyExisted, setShowAlreadyExisted] = useState();
  const [wishlishDialogOpen, setWishlistDialogOpen] = useState();
  const { isStorageChanged, setIsStorageChanged } = useContext(ContextValues);

  // console.log(all_items);

  useEffect(() => {
    let timer;
    if (wishlishDialogOpen) {
      timer = setTimeout(() => {
        setWishlistDialogOpen(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [wishlishDialogOpen]);

  // console.log(wishlishDialogOpen);

  function handleAddtoWishlist() {
    if (localStorage.getItem("wishlistProducts")) {
      const storedProducts = JSON.parse(
        localStorage.getItem("wishlistProducts")
      );
      if (storedProducts.some(v => v.id === details.id)) {
        console.log("exist");
        setShowAlreadyExisted(true);
        setTimeout(() => {
          setShowAlreadyExisted(false);
        }, 2000);

        setWishlistDialogOpen(false);

        return;
      }
      setWishlistDialogOpen(true);

      let _data = {
        ...all_items,
        ...details,
      };

      console.log(_data);

      localStorage.setItem(
        "wishlistProducts",
        JSON.stringify([...storedProducts, _data])
      );

      setIsStorageChanged(() => !isStorageChanged);
    } else {
      setWishlistDialogOpen(true);

      let _data = {
        ...all_items,
        ...details,
      };

      localStorage.setItem("wishlistProducts", JSON.stringify([_data]));

      setIsStorageChanged(() => !isStorageChanged);
    }
  }

  // console.log(wishlishDialogOpen);
  return (
    <>
      <ShowcaseProduct
        className={`${pointerNone ? "swipe-active" : ""}`}
        all_items={all_items}
      >
        <ShowcaseProductLink
          to={`/product/${details.id}`}
          state={{ item: details }}
        >
          {details.images.length > 0 ? (
            <ShowcaseProductImage all_items={all_items}>
              <Img
                fixed={details.images[0].fixed}
                style={{ maxHeight: "150px" }}
              />
            </ShowcaseProductImage>
          ) : (
            <div className="no-image-for-item">
              there is not image for this item
            </div>
          )}

          <ShowcaseProductDetails>
            <h3 className="item-title">
              {details.title.length > 20
                ? details.title.substring(0, 20).concat(" ...")
                : details.title}
            </h3>
            <span className="item-by">
              By<span>{details.by}</span>
            </span>
            <span className="item-rating">
              <Icon
                icon={starFilled}
                className="rating-icon"
                style={{ color: "#e0cca7", fontSize: "17px" }}
              />
              <span>
                {details.rating} (
                {details.ratingAmount.toString().substring(0, 3) +
                  " " +
                  details.ratingAmount.toString().substring(3)}
                )
              </span>
            </span>
            <span className="item-price">${details.price}</span>
          </ShowcaseProductDetails>
        </ShowcaseProductLink>

        <ShowcaseATW>
          <AddtoWishlistIcon onClick={handleAddtoWishlist}>
            <Icon
              icon={heartOutlined}
              style={{ color: "#606060", fontSize: "15px" }}
              className="add-to-wishlist-icon"
            />
          </AddtoWishlistIcon>
        </ShowcaseATW>
      </ShowcaseProduct>

      <ProductWishlistDialog
        wishlishDialogOpen={wishlishDialogOpen}
        setWishlistDialogOpen={setWishlistDialogOpen}
        title={details.title}
        price={details.price}
      ></ProductWishlistDialog>
      <Snackbar
        title="This item is already existed in your wishlist !"
        dialogOpen={showAlreadyExisted}
      ></Snackbar>
    </>
  );
}

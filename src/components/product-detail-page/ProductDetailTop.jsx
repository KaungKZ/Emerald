import React, { useRef, useEffect, useState, useContext } from "react";
import {
  TopSection,
  ProductImages,
  ProductBody,
  ProductContent,
  ProductOption,
  ProductHeader,
  OptionPopupStyles,
  ProductOptionWrapper,
  SeemoreBtn,
} from "../../styles/ProductDetail_Styles";
import Img from "gatsby-image";
import arrowRight from "@iconify/icons-bi/arrow-right";
import { Icon } from "@iconify/react";
import { Arrow_Button } from "../../styles/Button";
import threeDotsVertical from "@iconify/icons-bi/three-dots-vertical";
import ProductAddDialog from "../Dialogs/ProductAddDialog";
import ProductWishlistDialog from "../Dialogs/ProductWishlistDialog";
// import WarningDialog from "../Dialogs/WarningDialog";
import { ContextValues } from "../context/ContextSetup";
import Snackbar from "../Layouts/Snackbar";

export default function ProductDetailTop({
  productValues,
  setProductValues,
  data,
}) {
  // console.log(data)
  const [openOptionPopup, setOpenOptionPopup] = useState(false);
  const [isSmallSize, setIsSmallSize] = useState(false);

  const [readmoreClicked, setReadmoreClicked] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState({
    cart: false,
    wishlist: false,
  });
  // const [isOverlapped, setIsOverlapped] = useState({
  //   cart: false,
  //   wishlist: false,
  // });

  // const [productAddDialogOpen, setProductAddDialogOpen] = useState(false);
  // const [productWishlistDialogOpen,setProductWishlistDialogOpen ] = useState(false);

  const [showAlreadyExisted, setShowAlreadyExisted] = useState({
    cart: false,
    wishlist: false,
  });
  const { isStorageChanged, setIsStorageChanged } = useContext(ContextValues);

  const optionPopupRef = useRef();
  const optionWrapperRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1025) {
        setIsSmallSize(true);
      } else {
        setIsSmallSize(false);
      }
      window.addEventListener("resize", handleWindowResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleWindowResize);
      }
    };
  }, []);

  useEffect(() => {
    let timer;
    if (addDialogOpen.cart) {
      timer = setTimeout(() => {
        setAddDialogOpen({ ...addDialogOpen, cart: false });
      }, 3000);
    } else if (addDialogOpen.wishlist) {
      timer = setTimeout(() => {
        setAddDialogOpen({ ...addDialogOpen, wishlist: false });
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [addDialogOpen]);

  useEffect(() => {
    let timer;
    if (showAlreadyExisted.cart) {
      timer = setTimeout(() => {
        setShowAlreadyExisted({ ...showAlreadyExisted, cart: false });
      }, 2000);
    } else if (showAlreadyExisted.wishlist) {
      timer = setTimeout(() => {
        setShowAlreadyExisted({ ...showAlreadyExisted, wishlist: false });
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [showAlreadyExisted]);

  function handleWindowResize() {
    if (window.innerWidth < 1025) {
      setIsSmallSize(true);
    } else {
      setIsSmallSize(false);
    }
  }

  const handleClickOutside = e => {
    if (
      optionPopupRef.current.contains(e.target) &&
      optionWrapperRef.current.contains(e.target)
    ) {
      setOpenOptionPopup(true);

      return;
    }
    if (
      !optionPopupRef.current.contains(e.target) &&
      !optionWrapperRef.current.contains(e.target)
    ) {
      setOpenOptionPopup(false);

      return;
    }
  };
  function handleChangeProductGenderMale() {
    setProductValues({
      ...productValues,
      gender: "male",
    });
  }

  function handleChangeProductGenderFemale() {
    setProductValues({
      ...productValues,
      gender: "female",
    });
  }

  function handleProductSizeDown(e) {
    const elementName = e.target.parentNode.parentNode.getAttribute("name");

    const input = e.target.parentNode.parentNode.querySelector("input");

    let minValue = input.min;
    var oldValue = parseFloat(input.value);
    if (oldValue <= minValue) {
      var newVal = oldValue;
    } else {
      newVal = oldValue - 1;
    }

    setProductValues({ ...productValues, [elementName]: newVal });
  }

  function handleProductSizeUp(e) {
    const elementName = e.target.parentNode.parentNode.getAttribute("name");

    const input = e.target.parentNode.parentNode.querySelector("input");

    let maxValue = input.max;
    var oldValue = parseFloat(input.value);
    if (oldValue >= maxValue) {
      var newVal = oldValue;
    } else {
      newVal = oldValue + 1;
    }

    // console.log(newVal);

    setProductValues({ ...productValues, [elementName]: newVal });
  }

  function handleOnChange(e) {
    setProductValues({ ...productValues, size: e.target.value });
  }

  function handleAddProduct(e) {
    if (localStorage.getItem("selectedProduct")) {
      const storedProducts = JSON.parse(
        localStorage.getItem("selectedProduct")
      );
      if (storedProducts.some(v => v.id === data.id)) {
        console.log("EXISTED");
        setShowAlreadyExisted({ ...showAlreadyExisted, cart: true });
        setAddDialogOpen({ ...addDialogOpen, cart: false });

        return;
      }

      // if (addDialogOpen.wishlist) {
      //   // fix overlap ui bug
      //   setIsOverlapped({
      //     ...isOverlapped,
      //     cart: true,
      //   });
      // }
      setAddDialogOpen({ ...addDialogOpen, cart: true });
      // setProductAddDialogOpen(true);

      let _data = {
        ...data,
        ...productValues,
      };

      // console.log([...storedProducts, _data]);

      localStorage.setItem(
        "selectedProduct",
        JSON.stringify([...storedProducts, _data])
      );

      setIsStorageChanged(() => !isStorageChanged);
    } else {
      setAddDialogOpen({ ...addDialogOpen, cart: true });

      let _data = {
        ...data,
        ...productValues,
      };

      localStorage.setItem("selectedProduct", JSON.stringify([_data]));

      setIsStorageChanged(() => !isStorageChanged);
    }
  }

  function handleAddWishlist() {
    if (localStorage.getItem("wishlistProducts")) {
      const storedProducts = JSON.parse(
        localStorage.getItem("wishlistProducts")
      );
      if (storedProducts.some(v => v.id === data.id)) {
        console.log("exist");
        setShowAlreadyExisted({ ...showAlreadyExisted, wishlist: true });

        setAddDialogOpen({ ...addDialogOpen, wishlist: false });

        // setWishlistDialogOpen(false);

        return;
      }
      setAddDialogOpen({ ...addDialogOpen, wishlist: true });
      // setWishlistDialogOpen(true);

      let _data = {
        ...data,
      };
      // console.log(data);

      localStorage.setItem(
        "wishlistProducts",
        JSON.stringify([...storedProducts, _data])
      );

      setIsStorageChanged(() => !isStorageChanged);
    } else {
      setAddDialogOpen({ ...addDialogOpen, wishlist: true });

      let _data = {
        ...data,
      };

      // console.log(data);

      localStorage.setItem("wishlistProducts", JSON.stringify([_data]));

      setIsStorageChanged(() => !isStorageChanged);
    }
  }

  // console.log(showAlreadyExisted);

  return (
    <>
      <TopSection>
        <ProductImages>
          {data.images.map(v => {
            return (
              <div className="product-image" key={v.fixed.src}>
                <Img
                  fixed={v.fixed}
                  style={{ maxHeight: "150px" }}
                  className="product-image"
                />
              </div>
            );
          })}
        </ProductImages>
        <ProductBody>
          <ProductHeader>
            <h1 className="product-title">
              {data.title
                .toLowerCase()
                .split(" ")
                .map(v => v.charAt(0).toUpperCase() + v.slice(1))
                .join(" ")}
            </h1>

            {/* <ProductTitle>hello fri</ProductTitle> */}
            <p className="product-by">
              By :{" "}
              <span className="product-seller">
                {data.by
                  .toLowerCase()
                  .split(" ")
                  .map(v => v.charAt(0).toUpperCase() + v.slice(1))
                  .join(" ")}
              </span>
            </p>
          </ProductHeader>
          <ProductContent>
            <span className="product-price">${data.price}</span>
            <div className="product-size" name="size">
              <span className="detail-title">Size:</span>
              {/^\d+$/.test(productValues.size) === false ? (
                <span className="product-size-description">
                  {productValues.size}
                </span>
              ) : (
                <>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    step="1"
                    // value="1
                    value={parseInt(productValues.size)}
                    onChange={handleOnChange}
                    // ref={numberRef}
                  />
                  <div className="quantity-nav">
                    <div
                      className="quantity-button quantity-up"
                      onClick={handleProductSizeUp}
                      onKeyDown={handleProductSizeUp}
                      role="button"
                      tabIndex="0"
                    >
                      +
                    </div>
                    <div
                      className="quantity-button quantity-down"
                      role="button"
                      onClick={handleProductSizeDown}
                      onKeyDown={handleProductSizeDown}
                      tabIndex="0"
                    >
                      -
                    </div>
                  </div>
                </>
              )}
              {/* <Input onChange={handleOnChange} /> */}
            </div>
            {productValues.gender && (
              <div className="product-gender">
                <span
                  className={`male ${
                    productValues.gender === "male" ? "active" : ""
                  }`}
                  onClick={handleChangeProductGenderMale}
                  onKeyDown={handleChangeProductGenderMale}
                  role="button"
                  tabIndex="0"
                >
                  Male
                </span>
                <span
                  className={`female ${
                    productValues.gender === "female" ? "active" : ""
                  }`}
                  onClick={handleChangeProductGenderFemale}
                  onKeyDown={handleChangeProductGenderFemale}
                  role="button"
                  tabIndex="0"
                >
                  Female
                </span>
              </div>
            )}

            <div className="product-quantity" name="productQty">
              <span className="product-quantity-title detail-title">
                Quantity:
              </span>
              <input
                type="number"
                min="1"
                max="99"
                step="1"
                // value="1
                value={productValues.productQty}
                onChange={handleOnChange}
                // ref={QtyRef}
              />
              <div className="quantity-nav">
                <div
                  className="quantity-button quantity-up"
                  onClick={handleProductSizeUp}
                  onKeyDown={handleProductSizeUp}
                  role="button"
                  tabIndex="0"
                >
                  +
                </div>
                <div
                  className="quantity-button quantity-down"
                  onClick={handleProductSizeDown}
                  onKeyDown={handleProductSizeDown}
                  role="button"
                  tabIndex="0"
                >
                  -
                </div>
              </div>
            </div>
            <div className="product-description">
              <span className="detail-title">Description</span>
              <p>
                {isSmallSize
                  ? data.description
                    ? data.description.description.length > 200 &&
                      !readmoreClicked
                      ? data.description.description
                          .substring(0, 200)
                          .concat(" ...")
                      : data.description.description
                    : "There is no description for this product"
                  : data.description
                  ? data.description.description
                  : "There is no description for this product"}
                {isSmallSize && data.description?.description.length > 200 && (
                  <SeemoreBtn
                    onClick={() => setReadmoreClicked(() => !readmoreClicked)}
                  >
                    {readmoreClicked ? "Read less" : "Read more"}
                  </SeemoreBtn>
                )}
              </p>
            </div>
            <div className="product-buttons">
              <Arrow_Button
                dark
                className={`product-add-to-cart ${
                  addDialogOpen.cart ? "disabled" : ""
                }`}
                onClick={handleAddProduct}
                disabled={addDialogOpen.cart ? true : false}
              >
                Add To Cart{" "}
                <Icon
                  icon={arrowRight}
                  style={{ color: "#606060", fontSize: "25px" }}
                  className="arrow-right-icon"
                />
              </Arrow_Button>
              <Arrow_Button
                className={`product-add-to-wishlist ${
                  addDialogOpen.wishlist ? "disabled" : ""
                }`}
                onClick={handleAddWishlist}
                disabled={addDialogOpen.wishlist ? true : false}
              >
                Add To Wishlist{" "}
                <Icon
                  icon={arrowRight}
                  style={{ color: "#606060", fontSize: "25px" }}
                  className="arrow-right-icon"
                />
              </Arrow_Button>
            </div>
          </ProductContent>
          <ProductOptionWrapper>
            <ProductOption
              title="Options"
              onClick={() => setOpenOptionPopup(() => !openOptionPopup)}
              className={`${openOptionPopup ? "active" : ""}`}
              ref={optionWrapperRef}
            >
              <Icon
                icon={threeDotsVertical}
                style={{ color: "#606060", fontSize: "25px" }}
              />
            </ProductOption>
            <OptionPopupStyles
              className={`${openOptionPopup ? "active" : ""}`}
              ref={optionPopupRef}
            >
              <ul>
                <li>Report this product</li>
              </ul>
            </OptionPopupStyles>
          </ProductOptionWrapper>
        </ProductBody>
      </TopSection>
      <ProductAddDialog
        title={data.title}
        quantity={productValues.productQty}
        price={data.price}
        addDialogOpen={addDialogOpen.cart}
      ></ProductAddDialog>
      <ProductWishlistDialog
        wishlishDialogOpen={addDialogOpen.wishlist}
        title={data.title}
        price={data.price}
      ></ProductWishlistDialog>
      <Snackbar
        title="You have already added this item !"
        dialogOpen={
          showAlreadyExisted.cart
            ? showAlreadyExisted.cart
            : showAlreadyExisted.wishlist
            ? showAlreadyExisted.wishlist
            : null
        }
      ></Snackbar>
    </>
  );
}

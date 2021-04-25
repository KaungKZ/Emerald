import React, { useRef, useEffect, useState } from "react";
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
} from "../../styles/Product_Detail_Styles";
import Img from "gatsby-image";
import arrowRight from "@iconify/icons-bi/arrow-right";
import { Icon } from "@iconify/react";
import { Arrow_Button } from "../../styles/Button";
import threeDotsVertical from "@iconify/icons-bi/three-dots-vertical";
import ProductAddDialog from "./ProductAddDialog";
import WarningDialog from "../Layouts/WarningDialog";

export default function ProductDetailTop({
  productValues,
  setProductValues,
  data,
}) {
  const [openOptionPopup, setOpenOptionPopup] = useState(false);
  const [isSmallSize, setIsSmallSize] = useState(false);
  const [readmoreClicked, setReadmoreClicked] = useState(false);
  const [productAddDialogOpen, setProductAddDialogOpen] = useState(false);

  const [showAlreadyExisted, setShowAlreadyExisted] = useState();
  // const [selectedProducts, setSelectedProducts] = useState(data);
  // const [hoverActive, setHoverActive] = useState();
  // const addDialogRef = React.useRef(null);
  // const [productAddDialogRef, setProductAddDialogRef] = useState();
  // const [selectedProduct, setSelectedProduct] = useState();

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

  // console.log(data);

  useEffect(() => {
    let timer;
    if (productAddDialogOpen) {
      timer = setTimeout(() => {
        setProductAddDialogOpen(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };

    // return () => null;
  }, [productAddDialogOpen]);

  function handleWindowResize() {
    if (window.innerWidth < 1025) {
      setIsSmallSize(true);
    } else {
      setIsSmallSize(false);
    }
  }

  // let isnum = /^\d+$/.test(productValues.productSize);

  // console.log(isnum);

  // console.log(openOptionPopup);

  const handleClickOutside = e => {
    if (
      optionPopupRef.current.contains(e.target) &&
      optionWrapperRef.current.contains(e.target)
    ) {
      // console.log(e.target);
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
      productGender: "male",
    });
  }

  function handleChangeProductGenderFemale() {
    setProductValues({
      ...productValues,
      productGender: "female",
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
      var newVal = oldValue - 1;
    }

    setProductValues({ ...productValues, [elementName]: newVal });
  }

  // console.log(hoverActive);
  function handleProductSizeUp(e) {
    // console.log(numberRef.current.min);

    const elementName = e.target.parentNode.parentNode.getAttribute("name");

    const input = e.target.parentNode.parentNode.querySelector("input");

    // console.log(e.target.parentNode.parentNode.querySelector("input").value);
    let maxValue = input.max;
    var oldValue = parseFloat(input.value);
    if (oldValue >= maxValue) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }

    setProductValues({ ...productValues, [elementName]: newVal });
  }

  function handleOnChange(e) {
    // console.log(e.target.value);

    setProductValues({ ...productValues, productSize: e.target.value });
    // console.log("yes");
  }

  function handleAddProduct(e) {
    // setSelectedProduct(data);
    // setHoverActive(undefined);
    if (localStorage.getItem("selectedProduct")) {
      const storedProducts = JSON.parse(
        localStorage.getItem("selectedProduct")
      );
      if (storedProducts.some(v => v.id === data.id)) {
        setShowAlreadyExisted(true);
        setTimeout(() => {
          setShowAlreadyExisted(false);
        }, 2000);
        // alert("This item is already exist in cart");
        setProductAddDialogOpen(false);

        return;
      }
      setProductAddDialogOpen(true);
      let _data = {
        ...data,
        ...productValues,
      };

      localStorage.setItem(
        "selectedProduct",
        JSON.stringify([...storedProducts, _data])
      );
    } else {
      setProductAddDialogOpen(true);

      let _data = {
        ...data,
        ...productValues,
      };
      localStorage.setItem("selectedProduct", JSON.stringify([_data]));
    }
  }

  return (
    <>
      <TopSection
      // ref={current => {
      //   addDialogRef.current = current;
      //   setProductAddDialogRef(addDialogRef.current);
      // }}
      >
        <ProductImages>
          {data.images.map(v => {
            // console.log(v);
            // console.log(v);
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
              <span>
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
            <div className="product-size" name="productSize">
              <span className="detail-title">Size:</span>
              {/^\d+$/.test(productValues.productSize) === false ? (
                <span className="product-size-description">
                  {productValues.productSize}
                </span>
              ) : (
                <>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    step="1"
                    // value="1
                    value={productValues.productSize}
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
            {productValues.productGender && (
              <div className="product-gender">
                <span
                  className={`male ${
                    productValues.productGender === "male" ? "active" : ""
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
                    productValues.productGender === "female" ? "active" : ""
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
                  productAddDialogOpen ? "disabled" : ""
                }`}
                onClick={handleAddProduct}
                disabled={productAddDialogOpen ? true : false}
              >
                Add To Cart{" "}
                <Icon
                  icon={arrowRight}
                  style={{ color: "#606060", fontSize: "25px" }}
                  className="arrow-right-icon"
                />
              </Arrow_Button>
              <Arrow_Button className="product-add-to-wishlist">
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
                // className="arrow-right-icon"
              />

              {/* </> */}
              {/* )} */}
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

        {/* {openOptionDialog && (
    <ProductOptionDialog
      open={openOptionDialog}
      onClose={() => setOpenOptionDialog(false)}
    >
      This is test
    </ProductOptionDialog>
  )} */}
      </TopSection>
      {/* {productAddDialogOpen && ( */}
      <ProductAddDialog
        title={data.title}
        quantity={productValues.productQty}
        price={data.price}
        productAddDialogOpen={productAddDialogOpen}
        // setHoverActive={setHoverActive}
      ></ProductAddDialog>
      <WarningDialog
        showAlreadyExisted={showAlreadyExisted}
        title="This item is already existed in your cart !"
      ></WarningDialog>
      {/* )} */}
    </>
  );
}

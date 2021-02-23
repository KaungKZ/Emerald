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
} from "../product-detail-page/Product_Detail_Styles";
import Img from "gatsby-image";
import arrowRight from "@iconify/icons-bi/arrow-right";
import { Icon } from "@iconify/react";
import { Arrow_Button } from "../../styles/Button";
import threeDotsVertical from "@iconify/icons-bi/three-dots-vertical";

export default function ProductDetailTop({
  productValues,
  setProductValues,
  data,
}) {
  const [openOptionPopup, setOpenOptionPopup] = useState(false);

  const optionPopupRef = useRef();
  const optionWrapperRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  // console.log(openOptionPopup);

  const handleClickOutside = e => {
    if (
      optionPopupRef.current.contains(e.target) &&
      optionWrapperRef.current.contains(e.target)
    ) {
      console.log(e.target);
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

    // console.log(newVal);
    // spinner.find("input").val(newVal);
    setProductValues({ ...productValues, [elementName]: newVal });

    // setProductSize(newVal);
    // numberRef.current.value = newVal;

    // numberRef.current.onChange();
    // spinner.find("input").trigger("change");
  }

  function handleOnChange(e) {
    // console.log(e.target.value);

    setProductValues({ ...productValues, productSize: e.target.value });
    // console.log("yes");
  }
  return (
    <TopSection>
      <ProductImages>
        {data.images.map(v => {
          // console.log(v);
          return (
            <div className="product-image" key={v.fixed.base64}>
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
            {productValues.productSize.length > 3 ? (
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

          <div className="product-quality" name="productQty">
            <span className="product-quality-title detail-title">Quality:</span>
            <input
              type="number"
              min="1"
              max="100"
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
          {/* <div className="product-quality"></div> */}
          <div className="product-description">
            <span className="detail-title">Description</span>
            <p>
              {data.description
                ? data.description.description
                : "There is no descriptio for this product"}
            </p>
          </div>
          <div className="product-buttons">
            <Arrow_Button dark className="product-add-to-cart">
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
      </ProductBody>
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

      {/* {openOptionDialog && (
    <ProductOptionDialog
      open={openOptionDialog}
      onClose={() => setOpenOptionDialog(false)}
    >
      This is test
    </ProductOptionDialog>
  )} */}
    </TopSection>
  );
}

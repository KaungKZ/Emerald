import React, { useRef, useState } from "react";
import styled from "styled-components";
// import { Button } from "../../styles/Button";
import Img from "gatsby-image";
import arrowRight from "@iconify/icons-bi/arrow-right";
import { Icon } from "@iconify/react";
import { Arrow_Button } from "../../styles/Button";
// import Input from "../../styles/Input";

const Product_Detail_Wrapper = styled.section`
  width: 90%;
  margin: var(--large-item-margin) auto 25px auto;
`;
const TopSection = styled.div`
  width: 100%;
  display: flex;
`;

const ProductImages = styled.div`
  /* width: 100%; */
  margin-right: 7%;

  display: flex;
  flex-direction: column;

  .product-image {
    background: #f2f2f2;
    margin-bottom: 15px;
    padding: 7px;
    /* box-sizing: unset; */
  }
  /* .product-image {
  } */
`;

const ProductBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -35px;
`;
const ProductContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > :not(:last-child) {
    margin-bottom: 30px;
  }
  /* justify-content: space-between; */
  /* > * {
  } */

  .product-price {
    font-weight: 700;
    color: var(--light-text-color);
    font-size: 1.5rem;
    font-family: var(--secondary-font);
  }

  .product-size,
  .product-quality {
    position: relative;
    display: flex;
    font-family: var(--secondary-font);
    display: flex;
    align-items: center;

    span {
      margin-right: 10px;
      color: var(--text-color);
      font-size: 14px;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type="number"] {
      color: var(--text-color);
      -moz-appearance: textfield;
      font-family: var(--secondary-font);
    }

    input {
      width: 90px;
      height: 25px;
      line-height: 1.65;
      padding: 0;
      margin: 0;
      padding-left: 40px;
      border: 1px solid #eee;
    }

    input:focus {
      outline: 0;
    }

    .quantity-nav {
      float: left;
      position: relative;
      height: 42px;
    }

    .quantity-button {
      position: relative;
      cursor: pointer;
      border-left: 1px solid #eee;
      width: 20px;
      text-align: center;
      color: #333;
      font-size: 13px;
      font-family: "Trebuchet MS", Helvetica, sans-serif !important;
      line-height: 1.7;
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -o-user-select: none;
      user-select: none;
    }

    .quantity-button.quantity-up {
      position: absolute;
      height: 25px;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      border-bottom: 1px solid #eee;
    }

    .quantity-button.quantity-down {
      border-right: 1px solid #eee;
      height: 25px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border-bottom: 1px solid #eee;
      right: 70px;
    }
  }

  .product-gender {
    font-family: var(--secondary-font);
    display: flex;
    font-size: 12px;

    span {
      height: 35px;
      width: 65px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      border: 1px solid var(--grey-color);
      /* border: 1px solid #eee; */
      transition: all 300ms;
      color: var(--text-color);
      cursor: pointer;

      &:hover {
        background: var(--general-color);
        color: #fff;
      }
    }

    .male {
    }
  }

  .product-description {
    max-width: 800px;
    font-family: var(--primary-font);
    font-size: 16px;
    line-height: 25px;
  }

  .product-buttons {
    display: flex;

    .product-add-to-cart {
      margin-right: 20px;
    }
  }
`;

const ProductOption = styled.div``;

const ProductHeader = styled.div`
  font-family: var(--small-title-font);
  color: var(--light-text-color);
  margin-bottom: 20px;

  .product-title {
    font-size: 1.9rem;
  }

  .product-by {
    font-size: 14px;
    color: var(--primary-color);
    margin: 15px 0 25px 0;

    span {
      font-weight: 700;
      color: var(--light-text-color);
      text-decoration: underline;
    }
  }
`;
const BottomSection = styled.div``;

// const ProductBy = styled.div``;

export default function Product_Detail({ data }) {
  // const numberRef = useRef();
  // const QtyRef = useRef();
  // const [productSize, setProductSize] = useState("1");
  // const [productQty, setProductQty] = useState("1");

  const [productValues, setProductValues] = useState({
    productSize: 1,
    productQty: 1,
    productGender: null,
  });

  function handleOnChange(e) {
    // console.log(e.target.value);

    setProductValues({ ...productValues, productSize: e.target.value });
    // console.log("yes");
  }

  // console.log(productValues);

  // console.log(data.title.toLowerCase().split(" "));

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

  // function InputNumber() {
  //   return (
  //     <>
  //       <input
  //         type="number"
  //         min="1"
  //         max="9"
  //         step="1"
  //         // value="1
  //         value={productValues.productSize}
  //         onChange={handleOnChange}
  //         ref={numberRef}
  //       />
  //       <div class="quantity-nav">
  //         <div
  //           className="quantity-button quantity-up"
  //           onClick={handleProductSizeUp}
  //         >
  //           +
  //         </div>
  //         <div
  //           className="quantity-button quantity-down"
  //           onClick={handleProductSizeDown}
  //         >
  //           -
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  function handleProductSizeDown(e) {
    // console.log(e.target.parentNode.parentNode.getAttribute("name"));

    const elementName = e.target.parentNode.parentNode.getAttribute("name");

    const input = e.target.parentNode.parentNode.querySelector("input");

    // console.log(e.target.parentNode.parentNode);
    // console.log(e.target.name);
    let minValue = input.min;
    var oldValue = parseFloat(input.value);
    if (oldValue <= minValue) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }

    // console.log(newVal);
    // spinner.find("input").val(newVal);
    // numberRef.current.value = newVal;

    // setProductSize(newVal);

    setProductValues({ ...productValues, [elementName]: newVal });

    // this.setState({value: 'another random text'})
    // var event = new Event("input", { bubbles: true });
    // numberRef.current.dispatchEvent(event);
  }

  // function handleOnchange ( ) {

  // }

  return (
    <Product_Detail_Wrapper>
      <TopSection>
        <ProductImages>
          {data.images.map(v => {
            // console.log(v);
            return (
              <div className="product-image">
                <Img
                  fixed={v.fixed}
                  key={v.fixed.src}
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
              <span>Size:</span>
              {/* <Input onChange={handleOnChange} /> */}
              <input
                type="number"
                min="1"
                max="9"
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
                >
                  +
                </div>
                <div
                  className="quantity-button quantity-down"
                  onClick={handleProductSizeDown}
                >
                  -
                </div>
              </div>
            </div>
            <div className="product-gender">
              <span className="male">Male</span>
              <span className="female">Female</span>
            </div>
            <div className="product-quality" name="productQty">
              <span>Quality:</span>
              <input
                type="number"
                min="1"
                max="9"
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
                >
                  +
                </div>
                <div
                  className="quantity-button quantity-down"
                  onClick={handleProductSizeDown}
                >
                  -
                </div>
              </div>
            </div>
            {/* <div className="product-quality"></div> */}
            <p className="product-description">
              {data.description.description}
            </p>
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
        {/* <ProductOption></ProductOption> */}
      </TopSection>
      <BottomSection></BottomSection>
    </Product_Detail_Wrapper>
  );
}

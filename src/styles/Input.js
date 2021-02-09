// import React, { useRef, useState } from "react";
// import styled from "styled-components";

// export const InputNumber = styled.input`
//   /* input  {}  */
//   position: relative;
//   display: flex;
//   font-family: var(--secondary-font);
//   display: flex;
//   /* justify-content: center; */
//   align-items: center;

//   span {
//     margin-right: 10px;
//     color: var(--text-color);
//     font-size: 14px;
//   }

//   input[type="number"]::-webkit-inner-spin-button,
//   input[type="number"]::-webkit-outer-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }

//   input[type="number"] {
//     color: var(--text-color);
//     -moz-appearance: textfield;
//     font-family: var(--secondary-font);
//   }

//   input {
//     width: 90px;
//     height: 25px;
//     line-height: 1.65;
//     /* float: left; */
//     /* display: block; */
//     padding: 0;
//     margin: 0;
//     padding-left: 40px;
//     border: 1px solid #eee;
//   }

//   input:focus {
//     outline: 0;
//   }
// `;

// const QuantityNav = styled.div`
//   float: left;
//   position: relative;
//   height: 42px;

//   .quantity-button.quantity-up {
//     position: absolute;
//     height: 25px;
//     /* top: 25%; */
//     top: 50%;
//     right: 0;
//     transform: translateY(-50%);
//     border-bottom: 1px solid #eee;
//   }

//   .quantity-button.quantity-down {
//     border-right: 1px solid #eee;
//     height: 25px;
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     border-bottom: 1px solid #eee;
//     right: 70px;
//   }

//   .quantity-button {
//     position: relative;
//     cursor: pointer;
//     border-left: 1px solid #eee;
//     width: 20px;
//     text-align: center;
//     color: #333;
//     font-size: 13px;
//     font-family: "Trebuchet MS", Helvetica, sans-serif !important;
//     line-height: 1.7;
//     -webkit-transform: translateX(-100%);
//     transform: translateX(-100%);
//     -webkit-user-select: none;
//     -moz-user-select: none;
//     -ms-user-select: none;
//     -o-user-select: none;
//     user-select: none;
//   }
// `;

// export default function Input({ value, onChange }) {
//   const numberRef = useRef();
//   //   const [val, setVal] = useState("1");

//   function handleProductSizeUp(e) {
//     // console.log(numberRef.current.min);
//     let maxValue = numberRef.current.max;
//     var oldValue = parseFloat(numberRef.current.value);
//     if (oldValue >= maxValue) {
//       var newVal = oldValue;
//     } else {
//       var newVal = oldValue + 1;
//     }

//     // setVal(newVal);

//     // console.log(newVal);
//     // spinner.find("input").val(newVal);
//     // numberRef.current.value = newVal;
//     // numberRef.current.change();

//     // numberRef.current.onChange();
//     // spinner.find("input").trigger("change");
//   }

//   function handleProductSizeDown(e) {
//     let minValue = numberRef.current.min;
//     var oldValue = parseFloat(numberRef.current.value);
//     if (oldValue <= minValue) {
//       var newVal = oldValue;
//     } else {
//       var newVal = oldValue - 1;
//     }

//     // console.log(newVal);
//     // spinner.find("input").val(newVal);
//     // setVal(newVal);
//     // numberRef.current.value = newVal;

//     var event = new Event("change", { bubbles: true });
//     numberRef.current.dispatchEvent(event); // ref to the select control
//     // numberRef.current.change();
//     // console.log(numberRef);
//   }

//   //   function test () {
//   //       return numberRef.current.value;
//   //   }
//   return (
//     <>
//       {/* <> */}
//       <InputNumber
//         type="number"
//         min="1"
//         max="9"
//         // step="1"
//         // value={1}
//         value={value}
//         ref={numberRef}
//         // onChange={onChange}
//       />
//       <QuantityNav>
//         <div class="quantity-button quantity-up" onClick={handleProductSizeUp}>
//           +
//         </div>
//         <div
//           class="quantity-button quantity-down"
//           onClick={handleProductSizeDown}
//         >
//           -
//         </div>
//       </QuantityNav>
//       {/* </> */}
//     </>
//   );
// }

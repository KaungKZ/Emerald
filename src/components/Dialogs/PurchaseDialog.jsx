import React, { useEffect, useRef } from "react";

import styled from "styled-components";
import purchaseIcon from "../../images/shopping cart/check.svg";
import purchaseIcon2 from "../../images/shopping cart/shopping-bag.svg";
// import { TextButton } from "../../styles/Button";

import ActionsDialog from "./ActionsDialog";

const DialogTitle = styled.div`
  /* width: 80%; */
  /* margin: auto; */
  border-radius: 7px 7px 0 0;
  width: 100%;
  /* background: var(--primary-light); */
  padding: 10px 0 10px 0;
  margin-top: 50px;
  /* margin-top: 20px; */

  .title {
    width: 80%;
    margin: 0 auto;
    font-family: var(--small-title-font);
    font-size: 1.25rem;
    color: var(--light-text-color);
    text-align: center;
  }
`;
const DialogContent = styled.div``;

const DialogCloseBtn = styled.button`
  /* cursor: pointer; */
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  /* .icon {
    transform: rotate(0deg);
    transition: transform 250ms ease-in-out;
  }

  &:hover {
    .icon {
      transform: rotate(90deg);
    }
  } */
`;

const WrapperIcon = styled.div`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
`;

const PurchaseIconSvg = styled.svg``;

function PurchaseIconComponent() {
  return (
    <PurchaseIconSvg
      id="Layer_1"
      enable-background="new 0 0 511.375 511.375"
      height="120"
      viewBox="0 0 511.375 511.375"
      width="120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <path
            d="m511.375 255.688-57.89-64.273 9.064-86.046-84.651-17.92-43.18-75.012-79.03 35.321-10.667 207.93 10.667 207.929 79.031 35.321 43.179-75.011 84.651-17.921-9.064-86.046z"
            fill="#0ed678"
          />
          <path
            d="m176.656 12.437-43.179 75.012-84.651 17.921 9.064 86.045-57.89 64.273 57.89 64.272-9.064 86.046 84.651 17.921 43.18 75.011 79.031-35.321v-415.859z"
            fill="#04eb84"
          />
        </g>
        <g>
          <path
            d="m362.878 199.702-22.381-19.977-84.809 95.016-10.667 23.613 10.667 21.439z"
            fill="#f7f0eb"
          />
          <path
            d="m166.56 233.095-21.212 21.213 89.185 89.186 21.155-23.701v-45.052l-22.393 25.088z"
            fill="#fffbf5"
          />
        </g>
      </g>
    </PurchaseIconSvg>
  );
}

export default function PurchaseDialog(props) {
  const {
    setCartItems,
    setIsStorageChanged,
    isStorageChanged,
    purchaseDialogOpen,
    setPurchaseDialogOpen,
  } = props;

  //   console.log("xi");
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideNav);

    return () => {
      document.removeEventListener("click", handleClickOutsideNav);
    };
  });

  useEffect(() => {
    if (purchaseDialogOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [purchaseDialogOpen]);

  function handleClickOutsideNav(e) {
    if (
      purchaseDialogOpen &&
      wrapperRef.current &&
      !wrapperRef.current.contains(e.target)
    ) {
      setPurchaseDialogOpen(false);
    }
  }

  //   function handleClickCloseBtn() {
  //     setDeleteAllDialogOpen(false);
  //   }

  //   function handleClickCancel() {
  //     setDeleteAllDialogOpen(false);
  //   }

  //   function handleClickConfirm() {
  //     setCartItems([]);
  //     localStorage.setItem("selectedProduct", JSON.stringify([]));
  //     setIsStorageChanged(() => !isStorageChanged);
  //     setDeleteAllDialogOpen(false);
  //   }

  //   function handleClickCloseBtn() {
  //     setDeleteAllDialogOpen(false);
  //   }

  // console.log(deleteAllDialogOpen);
  return (
    <>
      <ActionsDialog
        dialogOpen={purchaseDialogOpen}
        setDialogOpen={setPurchaseDialogOpen}
      >
        <WrapperIcon>
          <PurchaseIconComponent></PurchaseIconComponent>
        </WrapperIcon>
        <DialogTitle>
          {/* <img src={purchaseIcon} /> */}
          <h2 className="title">Thank you for purchasing !</h2>
        </DialogTitle>
        <DialogContent></DialogContent>
        {/* <WrapperDialogCloseBtn>
          <DialogCloseBtn onClick={handleClickCloseBtn}>
            <Icon
              icon={closeFill}
              className="icon"
              style={{ color: "#fff", fontSize: "28px" }}
            />
          </DialogCloseBtn>
        </WrapperDialogCloseBtn> */}
      </ActionsDialog>
      {/* <Portal>
      <WrapperOverlay className={deleteAllDialogOpen ? "active" : ""}>
        <WrapperDialog ref={wrapperRef}>

        </WrapperDialog>
      </WrapperOverlay>
    </Portal> */}
    </>
  );
}

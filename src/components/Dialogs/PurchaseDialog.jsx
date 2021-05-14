import React, { useEffect, useRef } from "react";

import styled from "styled-components";
import purchaseIcon from "../../images/shopping cart/check.svg";
import purchaseIcon2 from "../../images/shopping cart/shopping-bag.svg";
import { uniqueNamesGenerator, Config, names } from "unique-names-generator";
import { TextButton } from "../../styles/Button";
import { Arrow_Button } from "../../styles/Link_Button";
import arrowRight from "@iconify/icons-bi/arrow-right";
import { Icon } from "@iconify/react";

// import { Arrow_Button } from "../../styles/Button";

// import { TextButton } from "../../styles/Button";

import ActionsDialog from "./ActionsDialog";

const TestD = styled(ActionsDialog)`
  @media (max-width: 600px) {
    width: 80%;
  }
`;

const Line = styled.div`
  position: absolute;

  width: 100%;
  background: #ffefd0;
  height: 10px;
  z-index: -1;

  &.top {
    top: 0;
    border-radius: 8px 8px 0 0;
    left: 0;
  }

  &.bottom {
    border-radius: 0 0 8px 8px;
    bottom: 0;
    left: 0;
  }
`;

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
    color: var(--text-color);
    text-transform: capitalize;
    text-align: center;
  }
`;
const DialogContent = styled.div`
  min-width: 400px;

  @media (max-width: 600px) {
    min-width: 80%;
  }
`;

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
`;

const WrapperIcon = styled.div`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
`;

const PurchaseIconSvg = styled.svg``;

const InformationTitle = styled.div`
  margin: 20px 0 20px 0;
  .title {
    font-family: var(--small-title-font);
    color: var(--text-color);
    text-decoration: underline;
    font-size: 14px;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  .title {
    font-family: var(--content-font);
    color: var(--light-text-color);

    &:last-child {
      margin-top: 10px;
    }

    .buyer {
      color: var(--text-color);
      font-weight: 700;
    }

    .tracking-number {
      color: var(--text-color);
      font-weight: 700;
      text-decoration: underline;
    }
  }
`;

const ActionButtons = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
`;

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
  const { purchaseDialogOpen, setPurchaseDialogOpen } = props;

  //   console.log("xi");
  // const wrapperRef = useRef(null);

  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutsideNav);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutsideNav);
  //   };
  // });

  useEffect(() => {
    if (purchaseDialogOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [purchaseDialogOpen]);

  // console.log(purchaseDialogOpen);

  // function handleClickOutsideNav(e) {
  //   console.log(e);
  //   if (
  //     purchaseDialogOpen &&
  //     wrapperRef.current &&
  //     !wrapperRef.current.contains(e.target)
  //   ) {
  //     console.log("yes");

  //   }
  // }

  function handleCloseDialog() {
    // setCartItems([]);

    // localStorage.setItem("selectedProduct", JSON.stringify([]));
    // setIsStorageChanged(() => !isStorageChanged);
    setPurchaseDialogOpen(false);
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
      <TestD
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
        <DialogContent>
          <InformationTitle>
            <h3 className="title">Information</h3>
          </InformationTitle>
          <Information>
            <span className="title">
              Buyer Name : {""}
              <span className="buyer">
                {uniqueNamesGenerator({ dictionaries: [names] })}
              </span>
            </span>
            <span className="title">
              Tracking Number : <span className="tracking-number">Tester</span>
            </span>
          </Information>
          <ActionButtons>
            <div className="close-btn">
              <TextButton onClick={handleCloseDialog}>Close</TextButton>
            </div>
            <div className="keep-shopping-btn">
              <Arrow_Button to="/products" main underline>
                Keep Shopping{" "}
                <Icon
                  icon={arrowRight}
                  style={{ color: "#606060", fontSize: "25px" }}
                  className="arrow-right-icon"
                />
              </Arrow_Button>
            </div>
          </ActionButtons>
        </DialogContent>
        <Line className="top"></Line>
        <Line className="bottom"></Line>
      </TestD>
      {/* <Portal>
      <WrapperOverlay className={deleteAllDialogOpen ? "active" : ""}>
        <WrapperDialog ref={wrapperRef}>

        </WrapperDialog>
      </WrapperOverlay>
    </Portal> */}
    </>
  );
}

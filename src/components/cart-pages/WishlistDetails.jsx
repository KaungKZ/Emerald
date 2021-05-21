import React, { useState, useEffect, useContext } from "react";

import { Icon } from "@iconify/react";
import Img from "gatsby-image";
import removeIcon from "@iconify/icons-dashicons/remove";
import { ContextValues } from "../context/ContextSetup";
import DeleteAllDialog from "../Dialogs/DeleteAllDialog";

import {
  Table,
  ItemLink,
  TableHeader,
  TableBody,
  RemoveAllWrapper,
  RemoveAllBtn,
  TableCell,
  IconWrapper,
  CancelIcon,
  ItemDetailsWrapper,
  TableRow,
} from "../../styles/CartDetail_Styles";

export default function WishlistDetails({ selectedProducts }) {
  const [wishlistItems, setWishlistItems] = useState(
    selectedProducts.reduce((acc, cur) => {
      const obj = {};
      for (const value of ["id", "title", "price", "images"]) {
        if (cur.hasOwnProperty(value)) {
          obj[value] = cur[value];
        }
      }
      return Object.keys(obj).length > 0 ? acc.concat(obj) : acc;
    }, [])
  );
  const { isStorageChanged, setIsStorageChanged } = useContext(ContextValues);
  const [deleteAllDialogOpen, setDeleteAllDialogOpen] = useState();

  const [isSmallSize, setIsSmallSize] = useState("");
  // const [deleteAllDialogOpen, setDeleteAllDialogOpen] = useState();
  // const { isStorageChanged, setIsStorageChanged } = useContext(ContextValues);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 601) {
        setIsSmallSize("s");
      } else if (window.innerWidth < 1025) {
        setIsSmallSize("m");
      } else {
        setIsSmallSize("l");
      }
      window.addEventListener("resize", handleWindowResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleWindowResize);
      }
    };
  }, []);

  function handleRemoveItem(v) {
    const _wishlistItems = wishlistItems.filter(item => item.id !== v.id);
    setWishlistItems(_wishlistItems);
    localStorage.setItem("wishlistProducts", JSON.stringify(_wishlistItems));
    setIsStorageChanged(() => !isStorageChanged);
  }

  function handleWindowResize() {
    if (window.innerWidth < 601) {
      setIsSmallSize("s");
    } else if (window.innerWidth < 1025) {
      setIsSmallSize("m");
    } else {
      setIsSmallSize("l");
    }
  }

  function handleRemoveAllItems() {
    setDeleteAllDialogOpen(true);
  }
  return (
    <>
      <Table>
        <TableHeader $wishlist>
          <div className="table-header-cell">Items</div>
          <div className="table-header-cell">Price</div>
          <div className="table-header-cell">
            {isSmallSize === "s" ? "" : "Remove"}
          </div>
        </TableHeader>
        <TableBody>
          {wishlistItems.map(item => {
            return (
              <TableRow key={item.id} $wishlist>
                <TableCell $wishlist>
                  <ItemDetailsWrapper>
                    <div className="item-image">
                      <Img
                        fixed={item.images[0].fixed}
                        style={{ maxHeight: "90px" }}
                        className="product-image"
                      />
                    </div>
                    <div className="item-details">
                      <ItemLink to={`/product/${item.id}`}>
                        <div className="item-name">
                          {isSmallSize === "s"
                            ? item.title.length > 30
                              ? item.title.substring(0, 30).concat(" ...")
                              : item.title
                            : isSmallSize === "m"
                            ? item.title.length > 40
                              ? item.title.substring(0, 40).concat(" ...")
                              : item.title
                            : item.title.length > 60
                            ? item.title.substring(0, 60).concat(" ...")
                            : item.title}
                        </div>
                      </ItemLink>
                    </div>
                  </ItemDetailsWrapper>
                </TableCell>
                <TableCell $wishlist>
                  <div className="item-price">${item.price}</div>
                </TableCell>
                <TableCell $wishlist>
                  <IconWrapper>
                    <CancelIcon onClick={() => handleRemoveItem(item)}>
                      <Icon icon={removeIcon} style={{ fontSize: "16px" }} />
                    </CancelIcon>
                  </IconWrapper>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <RemoveAllWrapper className="remove-btn">
        <RemoveAllBtn onClick={handleRemoveAllItems}>
          Remove all items
        </RemoveAllBtn>
      </RemoveAllWrapper>

      <DeleteAllDialog
        setItems={setWishlistItems}
        setIsStorageChanged={setIsStorageChanged}
        isStorageChanged={isStorageChanged}
        deleteAllDialogOpen={deleteAllDialogOpen}
        setDeleteAllDialogOpen={setDeleteAllDialogOpen}
        navigator="wishlist"
      ></DeleteAllDialog>
    </>
  );
}

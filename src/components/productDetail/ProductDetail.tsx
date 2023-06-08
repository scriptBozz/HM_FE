import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Alert, Button, Snackbar } from "@mui/material";

import { Product } from "../../types/type";
import { cartActions } from "../../redux/slices/cart";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const productDetail = useSelector(
    (state: RootState) => state.productDetail.productDetail
  );

  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function onClickHandler(item: Product) {
    dispatch(cartActions.getCartList(item));
    setOpen(true);
  }
  if (!productDetail) {
    return <p>No product ... </p>;
  }

  return (
    <div>
      <div>
        <img src={productDetail.image} alt={productDetail.title} />
        <div>
          <p>{productDetail.title}</p>
          <p> {productDetail.price}</p>
          <p> {productDetail.description}</p>
          <Button onClick={() => onClickHandler(productDetail)}>
            Add to cart
          </Button>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}

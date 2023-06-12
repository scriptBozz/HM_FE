import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Alert, Button, Snackbar } from "@mui/material";

import { RootState } from "../../redux/store";
import CartItem from "./CartItem";

export default function CartList() {
  const cartList = useSelector((state: RootState) => state.cartList.cartList);

  const total = cartList.reduce<number>((accumulator, current) => {
    const productTotal = current.price * current.quantity;
    return accumulator + productTotal;
  }, 0);
  // successful
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

  function onSuccessHandler() {
    setOpen(true);
  }

  // cancel
  const [openCancel, setOpenCancel] = useState(false);

  const handleCloseCancel = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenCancel(false);
  };

  function onCancelHandler() {
    setOpenCancel(true);
  }

  if (cartList.length === 0) {
    return <div> Your cart is empty now</div>;
  }

  return (
    <div>
      <h1> Your Cart List</h1>
      <div className="cartList">
        {cartList.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
      <h3> Total:{total} </h3>
      <div>
        <Button onClick={onSuccessHandler}>Check out</Button>
        <Button onClick={onCancelHandler}> Cancel</Button>
      </div>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          You've successfully placed order. Thank you !
        </Alert>
      </Snackbar>
      <Snackbar open={openCancel} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleCloseCancel}
          severity="error"
          sx={{ width: "100%" }}
        >
          The order has been canceled. Please try again !
        </Alert>
      </Snackbar>
    </div>
  );
}

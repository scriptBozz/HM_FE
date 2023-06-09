import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

import { RootState } from "../../redux/store";
import CartItem from "./CartItem";

export default function CartList() {
  const cartList = useSelector((state: RootState) => state.cartList.cartList);

  const total = cartList.reduce<number>((accumulator, current) => {
    const productTotal = current.price * current.quantity;
    return accumulator + productTotal;
  }, 0);

  if (cartList.length === 0) {
    return <div> Your cart is empty now</div>;
  }
  return (
    <div>
      <h1> Your Cart List</h1>
      {cartList.map((item) => (
        <CartItem item={item} />
      ))}
      <h3> Total:{total} </h3>
      <div>
        <Button>Check out</Button>
        <Button> Cancel</Button>
      </div>
    </div>
  );
}

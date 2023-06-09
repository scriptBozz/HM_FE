import React from "react";
import { Button } from "@mui/material";

import { Product, ProductCart } from "../../types/type";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart";

type Prop = {
  item: ProductCart;
};

export default function CartItem({ item }: Prop) {
  const dispatch = useDispatch();
  function increaseQuantityHandler() {
    dispatch(cartActions.increaseQuantity(item));
  }

  function decreaseQuantityHandler() {
    dispatch(cartActions.decreaseQuantity(item));
  }
  return (
    <div className="cartItem">
      <p> {item.title}</p>
      <p>{item.price}</p>
      <Button onClick={increaseQuantityHandler}> +</Button>
      <p>{item.quantity}</p>
      <Button onClick={decreaseQuantityHandler}> -</Button>
    </div>
  );
}

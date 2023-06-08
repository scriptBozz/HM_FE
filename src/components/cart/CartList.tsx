import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CartItem from "./CartItem";

export default function CartList() {
  const cartList = useSelector((state: RootState) => state.cartList.cartList);

  return (
    <div>
      <h1> Your Cart List</h1>
      {cartList.map((item) => (
        <CartItem item={item} />
      ))}
    </div>
  );
}

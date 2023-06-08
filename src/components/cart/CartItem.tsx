import React from "react";
import { Button } from "@mui/material";

import { Product } from "../../types/type";

type Prop = {
  item: Product;
};

export default function CartItem({ item }: Prop) {
  return (
    <div className="cartItem">
      <p> {item.title}</p>
      <p>{item.price}</p>
      <Button> +</Button>
      <p>1</p>
      <Button> -</Button>
    </div>
  );
}

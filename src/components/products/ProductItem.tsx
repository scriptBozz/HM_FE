import React from "react";
import { Product } from "../../types/type";
import FavoriteIcon from "@mui/icons-material/Favorite";

type Prop = {
  item: Product;
};

export default function ProductItem({ item }: Prop) {
  return (
    <div>
      <img src={item.image} alt={item.title} />
      <div>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <FavoriteIcon />
      </div>
    </div>
  );
}

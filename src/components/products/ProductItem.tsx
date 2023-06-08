import React from "react";
import { Product } from "../../types/type";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

type Prop = {
  item: Product;
};

export default function ProductItem({ item }: Prop) {
  return (
    <div>
      <Link to={`/products/${item.id}`}>
        <img src={item.image} alt={item.title} height="50px" />
      </Link>
      <div>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <FavoriteIcon />
      </div>
    </div>
  );
}

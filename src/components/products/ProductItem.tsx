import React from "react";
import { Product } from "../../types/type";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

type Prop = {
  item: Product;
};

export default function ProductItem({ item }: Prop) {
  return (
    <div>
      <Link to={`/products/${item.id}`}>
        <div className="productImg">
          <img src={item.image} alt={item.title} height="450px" width="400px" />
        </div>
      </Link>
      <div>
        <Typography className="productTitle">{item.title}</Typography>
        <p>{item.price}</p>
        <FavoriteIcon />
      </div>
    </div>
  );
}

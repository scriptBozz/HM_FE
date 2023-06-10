import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Product } from "../../types/type";
import { productActions } from "../../redux/slices/products";

type Prop = {
  item: Product;
};

export default function ProductItem({ item }: Prop) {
  const dispatch = useDispatch();

  function addFavoriteHandler(item: Product) {
    dispatch(productActions.addToWishList(item));
  }

  return (
    <div>
      <Link to={`/products/${item.id}`}>
        <div className="productImg">
          <img src={item.image} alt={item.title} height="450px" width="400px" />
        </div>
      </Link>
      <div>
        <Typography className="productTitle">{item.title}</Typography>
        <div className="productInfor">
          <p>{item.price} €</p>
          <IconButton
            onClick={() => {
              addFavoriteHandler(item);
            }}
          >
            <FavoriteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

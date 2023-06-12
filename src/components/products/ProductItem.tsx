import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red, green } from "@mui/material/colors";

import { Product } from "../../types/type";
import { productActions } from "../../redux/slices/products";
import { RootState } from "../../redux/store";

type Prop = {
  item: Product;
};

export default function ProductItem({ item }: Prop) {
  const dispatch = useDispatch();

  const wishList = useSelector((state: RootState) => state.products.wishList);
  const isFavorite = wishList.some((product) => item.title === product.title);

  function addToFavorite(product: Product) {
    dispatch(productActions.addToWishList(product));
  }

  function removeFavorite(product: Product) {
    dispatch(productActions.removeFromWishList(product));
  }

  function onClickHandler(product: Product) {
    if (!isFavorite) {
      addToFavorite(product);
      return;
    }
    removeFavorite(product);
  }

  // theme
  // theme
  const theme = useSelector((state: RootState) => state.theme.theme);

  let textColor;
  if (theme === "dark") {
    textColor = "white";
  }
  return (
    <div>
      <Link to={`/products/${item.id}`}>
        <div className="productImg">
          <img
            src={item.images[0]}
            alt={item.title}
            height="450px"
            width="400px"
          />
        </div>
      </Link>
      <div>
        <Typography className="productTitle" sx={{ color: textColor }}>
          {item.title}
        </Typography>
        <div className="productInfor">
          <Typography sx={{ color: textColor }}>{item.price} €</Typography>
          <IconButton
            onClick={() => {
              onClickHandler(item);
            }}
          >
            <FavoriteIcon sx={{ color: isFavorite ? red[500] : green[400] }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

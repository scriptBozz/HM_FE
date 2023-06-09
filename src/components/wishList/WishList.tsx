import React from "react";
import { Link } from "react-router-dom";
import { Divider, List, ListItem } from "@mui/material";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function WishList() {
  const wishList = useSelector((state: RootState) => state.products.wishList);

  if (wishList.length === 0) {
    return (
      <div>
        <p> Your wish list is empty</p>
      </div>
    );
  }
  return (
    <List sx={{ width: "20rem" }}>
      <h1>wish list</h1>
      {wishList.map((item) => (
        <ListItem key={item.id} disablePadding>
          wishList
          {item.title}
          <Divider />
        </ListItem>
      ))}
    </List>
  );
}

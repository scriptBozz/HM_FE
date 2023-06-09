import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Divider, List, ListItem } from "@mui/material";

export default function WishList() {
  const wishList = useSelector((state: RootState) => state.products.wishList);

  return (
    <List>
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

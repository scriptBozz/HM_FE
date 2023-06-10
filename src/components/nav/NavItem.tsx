import { Badge, Box, Button, Drawer } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import WishList from "../wishList/WishList";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function NavItem() {
  const wishList = useSelector((state: RootState) => state.products.wishList);
  const cartList = useSelector((state: RootState) => state.cartList.cartList);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Box>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/products">
        <Button>Products</Button>
      </Link>
      <Button onClick={() => toggleDrawer(true)}>Wish list</Button>
      <Link to="/carts">
        <Badge badgeContent={cartList.length} color="primary">
          <Button> Cart</Button>
        </Badge>
      </Link>
      <Drawer anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
        <Badge badgeContent={wishList.length} color="primary">
          <WishList />
        </Badge>
      </Drawer>
      <Link to="/">
        <Button>Brand</Button>
      </Link>
      <Link to="/">
        <Button>Sustainability</Button>
      </Link>
      <Link to="/">
        <Button>About us</Button>
      </Link>
    </Box>
  );
}

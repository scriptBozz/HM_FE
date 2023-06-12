import { Box, Button, Drawer } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import WishList from "../wishList/WishList";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Badge, { BadgeProps } from "@mui/material/Badge";

import { RootState } from "../../redux/store";
import SwitchButton from "../switchTheme/SwitchButton";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 3,
    top: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function NavItem() {
  const wishList = useSelector((state: RootState) => state.products.wishList);
  const cartList = useSelector((state: RootState) => state.cartList.cartList);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Box sx={{ m: "12px" }}>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/products">
        <Button>Products</Button>
      </Link>
      <StyledBadge badgeContent={wishList.length} color="primary">
        <Button onClick={() => toggleDrawer(true)}>Wish list</Button>
      </StyledBadge>

      <Link to="/carts">
        <Badge badgeContent={cartList.length} color="primary">
          <Button> Cart</Button>
        </Badge>
      </Link>
      <Drawer anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
        <WishList />
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
      <SwitchButton />
    </Box>
  );
}

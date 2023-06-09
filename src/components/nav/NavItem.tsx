import { Box, Drawer } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import WishList from "../wishList/WishList";

export default function NavItem() {
  type Anchor = "right";

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsOpen(true);
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <WishList />
    </Box>
  );
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <button onClick={toggleDrawer("right", isOpen)}>Wish list</button>
      <Link to="/carts">Cart</Link>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}

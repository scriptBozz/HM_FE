import { Link } from "@mui/material";
import React from "react";

export default function NavItem() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/fav">Wish list</Link>
      <Link href="/carts">Cart</Link>
    </div>
  );
}

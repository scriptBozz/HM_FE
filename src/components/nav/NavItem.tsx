import React from "react";
import { Link } from "react-router-dom";

export default function NavItem() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/fav">Wish list</Link>
      <Link to="/carts">Cart</Link>
    </div>
  );
}

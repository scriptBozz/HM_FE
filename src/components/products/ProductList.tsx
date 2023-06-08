import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Loading from "../loading/Loading";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const products = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.loading);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      {products.map((item) => (
        <ProductItem item={item} />
      ))}
    </div>
  );
}

import React from "react";
import SearchForm from "../components/form/SearchForm";
import ProductList from "../components/products/ProductList";

export default function ProductsPage() {
  return (
    <div>
      <SearchForm />
      <ProductList />
    </div>
  );
}

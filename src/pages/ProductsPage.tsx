import React from "react";
import SearchForm from "../components/form/SearchForm";
import ProductList from "../components/products/ProductList";
import SortForm from "../components/form/SortForm";

export default function ProductsPage() {
  return (
    <div>
      <SearchForm />
      <br></br>
      <SortForm />
      <ProductList />
    </div>
  );
}

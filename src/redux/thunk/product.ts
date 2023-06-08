import { AppDispatch } from "./store";

const productUrl = "https://fakestoreapi.com/products";

export function fetchProductData() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productUrl);
    const productData = await response.json();
    dispatch(productActions.getProductData(productData));
  };
}

export function fetchProductDetail() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const productDetailData = await response.json();
    dispatch(productActions.getProductDetail(productData));
  };
}

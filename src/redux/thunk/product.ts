import { AppDispatch } from "../store";
import { productActions } from "../slices/products";
import { productDetailActions } from "../slices/productDetail";

export function fetchProductData() {
  const productUrl = "https://fakestoreapi.com/products";
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productUrl);
    const productData = await response.json();
    dispatch(productActions.getProductData(productData));
  };
}

export function fetchProductDetail(productId: string) {
  const productDetailUrl = `https://fakestoreapi.com/products/${productId}`;
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productDetailUrl);
    const productDetailData = await response.json();
    dispatch(productDetailActions.getProductDetail(productDetailData));
  };
}

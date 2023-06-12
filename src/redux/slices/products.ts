import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/type";

type InitialState = {
  loading: boolean;
  products: Product[];
  wishList: Product[];
};

const initialState: InitialState = {
  loading: true,
  products: [],
  wishList: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductData: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.loading = false;
    },
    searchProduct: (state, action: PayloadAction<string>) => {
      const result = state.products.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.products = result;
    },
    addToWishList: (state, action: PayloadAction<Product>) => {
      state.wishList.push(action.payload);
    },
    removeFromWishList: (state, action: PayloadAction<Product>) => {
      const result = state.wishList.filter(
        (item) => (item.title = action.payload.title)
      );
      state.wishList = result;
    },
    sortProductLowestPrice: (state) => {
      const result = state.products.sort((a, b) => a.price - b.price);
      state.products = result;
    },
    sortProductHighestPrice: (state) => {
      const result = state.products.sort((a, b) => b.price - a.price);
      state.products = result;
    },
  },
});

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;

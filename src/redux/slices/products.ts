import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/type";

type InitialState = { loading: boolean; products: Product[] };

const initialState: InitialState = {
  loading: true,
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductData: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    searchProduct: (state, action) => {
      const result = state.products.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.products = result;
    },
  },
});

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;

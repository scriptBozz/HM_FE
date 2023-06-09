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
  },
});

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;

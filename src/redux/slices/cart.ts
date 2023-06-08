import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/type";

// quantity

type InitialState = {
  cartList: Product[];
};

const initialState: InitialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartList: (state, action: PayloadAction<Product>) => {
      state.cartList.push(action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;

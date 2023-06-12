import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  theme: string;
};

const initialState: InitialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state, action: PayloadAction<string>) => {
      if (action.payload === "dark") {
        state.theme = "light";
      }
      if (action.payload === "light") {
        state.theme = "dark";
      }
    },
  },
});

export const themeActions = themeSlice.actions;
const themeReducer = themeSlice.reducer;
export default themeReducer;

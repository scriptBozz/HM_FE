import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../redux/slices/products";
import { RootState } from "../../redux/store";

export default function SearchForm() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

  function searchHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
    dispatch(productActions.searchProduct(userInput));
  }

  // theme
  const theme = useSelector((state: RootState) => state.theme.theme);

  let textColor;
  if (theme === "dark") {
    textColor = "white";
  }
  return (
    <TextField
      id="standard-basic"
      label="Search"
      variant="standard"
      onChange={searchHandler}
      helperText="Search product by name"
    />
  );
}

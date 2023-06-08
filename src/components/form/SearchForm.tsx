import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { productActions } from "../../redux/slices/products";

export default function SearchForm() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

  function searchHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
    dispatch(productActions.searchProduct(userInput));
  }

  return (
    <TextField
      id="standard-basic"
      label="Standard"
      variant="standard"
      onChange={searchHandler}
    />
  );
}

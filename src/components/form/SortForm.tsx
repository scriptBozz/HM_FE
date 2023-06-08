import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export default function SortForm() {
  // const [age, setAge] = useState("");
  const [sortField, setSortField] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSortField(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">Sort by</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={sortField}
        onChange={handleChange}
        label="sortField"
      >
        <MenuItem value={sortField}>Lowest price</MenuItem>
        <MenuItem value={sortField}>Highest price</MenuItem>
        <MenuItem value={sortField}>A-Z</MenuItem>
        <MenuItem value={sortField}>Z-A</MenuItem>
      </Select>
    </FormControl>
  );
}

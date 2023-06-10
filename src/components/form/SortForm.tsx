import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export default function SortForm() {
  const [sortField, setSortField] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSortField(event.target.value);
  };

  return (
    <FormControl
      variant="standard"
      sx={{ m: 1, width: 120, marginLeft: 120, marginBottom: 10 }}
    >
      <InputLabel id="demo-simple-select-standard-label">Sort by</InputLabel>
      <Select
        sx={{}}
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

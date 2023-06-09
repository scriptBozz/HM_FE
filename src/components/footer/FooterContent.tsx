import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";

export default function FooterContent() {
  const [country, setCountry] = useState("Finland");

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };
  return (
    <div>
      <p>
        The content of this website is copyright protected and belongs to H & M
        Hennes & Mauritz AB. READ MORE
      </p>
      <Box>
        <InputLabel id="demo-simple-select-label">
          Choose your country
        </InputLabel>
        <Select
          sx={{ minWidth: 150 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Choose your country"
          value={country}
          onChange={handleChange}
        >
          <MenuItem>Finland</MenuItem>
          <MenuItem>Germany</MenuItem>
          <MenuItem> Sweden</MenuItem>
        </Select>
      </Box>
    </div>
  );
}

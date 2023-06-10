import React from "react";

import footerLogo from "../../assets/footerlogo.png";
import { Box, Typography } from "@mui/material";

export default function FooterContent() {
  return (
    <Box>
      <Typography>
        The content of this website is copyright protected and belongs to H & M
        Hennes & Mauritz AB. READ MORE
      </Typography>
      <img src={footerLogo} alt="hm logo" height="90rem" />
      <Typography>Finland | €</Typography>
    </Box>
  );
}

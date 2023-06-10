import React from "react";
import { Box } from "@mui/material";

import FooterContent from "./FooterContent";
import FooterIcons from "./FooterIcons";

export default function Footer() {
  return (
    <Box className="footer">
      <FooterIcons />
      <FooterContent />
    </Box>
  );
}

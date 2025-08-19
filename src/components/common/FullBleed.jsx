import React from "react";
import { Box } from "@mui/material";

export default function FullBleed({ children, sx }) {
  return (
    <Box
      sx={{
        position: "relative",
        left: "50%",
        right: "50%",
        ml: "-50vw",
        mr: "-50vw",
        width: "99.5vw",
        mt: { xs: -6 },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

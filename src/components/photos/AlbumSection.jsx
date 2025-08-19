import React from "react";
import { Box } from "@mui/material";
import MasonryColumns from "./MasonryColumns";

export default function AlbumSection({ images }) {
  if (!images?.length) return null;
  return (
    <Box
      sx={{
        position: "relative",
        p: { xs: 1.5, sm: 2 },
        borderRadius: 3,
        bgcolor: "rgba(255,255,255,0.03)", // koyu temada yumuşak panel
        overflow: "hidden",
      }}
    >
      {/* Üstte ince bir vurgu çizgisi */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          bgcolor: "divider",
        }}
      />
      <MasonryColumns images={images} />
    </Box>
  );
}

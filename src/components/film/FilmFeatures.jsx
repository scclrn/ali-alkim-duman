import React from "react";
import { Stack, Typography } from "@mui/material";

export default function FilmFeatures({ features = [] }) {
  if (!features.length)
    return (
      <Typography variant="body2" color="text.secondary">
        Özellik bilgisi eklenmemiş.
      </Typography>
    );
  return (
    <Stack component="ul" spacing={1} sx={{ m: 0, pl: 2 }}>
      {features.map((f, i) => (
        <Typography key={i} component="li" variant="body2">
          {f}
        </Typography>
      ))}
    </Stack>
  );
}

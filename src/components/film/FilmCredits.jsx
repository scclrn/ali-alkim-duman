import React from "react";
import { Stack, Typography } from "@mui/material";

export default function FilmCredits({ credits = [] }) {
  if (!credits.length)
    return (
      <Typography variant="body2" color="text.secondary">
        Kredi bilgisi eklenmemiş.
      </Typography>
    );
  return (
    <Stack spacing={1}>
      {credits.map((c, i) => (
        <Typography key={i} variant="body2">
          <b>{c.role}:</b> {c.name}
        </Typography>
      ))}
    </Stack>
  );
}

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function FilmOverview({ poster, overview }) {
  const { i18n } = useTranslation();
  const text =
    typeof overview === "string"
      ? overview
      : overview?.[i18n.language] || overview?.tr || overview?.en || "";

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={3}
      alignItems={{ xs: "stretch", md: "flex-start" }}
    >
      {/* Poster (2:3 oran) */}
      <Box sx={{ width: { xs: "100%", md: 320 }, flexShrink: 0 }}>
        <Box
          sx={{
            width: "100%",
            pt: "150%",
            backgroundImage: `url(${poster})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 2,
            boxShadow: (t) => t.shadows[6],
          }}
        />
      </Box>
      {/* Açıklama */}
      <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
        {text}
      </Typography>
    </Stack>
  );
}

import React from "react";
import { Stack, Typography, Chip } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function FilmHeader({ title, englishTitle, year }) {
  const { i18n } = useTranslation();
  const displayTitle = i18n.language === "en" ? englishTitle || title : title;
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <Typography variant="h4" fontWeight={800}>
        {displayTitle}
      </Typography>
      <Chip label={year} size="small" />
    </Stack>
  );
}

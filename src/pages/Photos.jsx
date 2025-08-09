import React from "react";
import { Typography, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Photos() {
  const { t } = useTranslation();
  return (
    <Stack spacing={2}>
      <title>
        Ali Alkım Duman — {t("photos.heading", { defaultValue: "Fotoğraflar" })}
      </title>
      <meta name="description" content="Fotoğraf galerisi" />
      <Typography variant="h4" fontWeight={700}>
        {t("photos.heading", { defaultValue: "Fotoğraflar" })}
      </Typography>
      {/* İçeriği sonra dolduracağız */}
    </Stack>
  );
}

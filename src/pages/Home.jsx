import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        {t("home.heading")}
      </Typography>
      <Typography variant="body1">{t("home.subtitle")}</Typography>
      {/* Sonraki adımda: scroll-trigger animasyonlar ve zengin görseller eklenecek */}
    </Box>
  );
}

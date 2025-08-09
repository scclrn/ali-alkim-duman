import React from "react";
import { Typography, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Biography() {
  const { t } = useTranslation();
  return (
    <Stack spacing={2}>
      <Typography variant="h4">{t("bio.heading")}</Typography>
      <Typography variant="body1">
        {/* Biyografi içeriğini burada düzenleyeceğiz. İleride statik veri/markdown bağlayabiliriz. */}
        ...
      </Typography>
    </Stack>
  );
}

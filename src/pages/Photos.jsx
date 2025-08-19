import React from "react";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { albums, albumOrder } from "../data/albums";
import AlbumSection from "../components/photos/AlbumSection";

export default function Photos() {
  const { t } = useTranslation();

  return (
    <>
      <title>
        {t("photos.heading")} — {t("siteTitle")}
      </title>
      <Stack spacing={{ xs: 3, md: 5 }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {t("photos.heading")}
        </Typography>

        {albumOrder.map((key, idx) => (
          <Stack key={key} spacing={2}>
            {/* Bölümler arası nefes: üst boşluk */}
            <div style={{ height: idx === 0 ? 0 : 8 }} />
            <AlbumSection images={albums[key]} />
          </Stack>
        ))}
      </Stack>
    </>
  );
}

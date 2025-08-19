import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function BioHeader() {
  const { t } = useTranslation();
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      sx={{
        position: "relative",
        p: { xs: 3, md: 6 },
        borderRadius: 3,
        overflow: "hidden",
        // yumuşak arka plan vurgusu
        background:
          "radial-gradient(1200px 400px at 10% -10%, rgba(255,255,255,0.06), transparent 60%)",
      }}
    >
      {/* üst çizgi */}
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

      <Stack spacing={1.5}>
        <Typography variant="overline" letterSpacing={2} sx={{ opacity: 0.7 }}>
          {t("siteTitle")}
        </Typography>
        <Typography variant="h3" fontWeight={800}>
          {t("bio.heading")}
        </Typography>
        {/* Ana sayfadaki mottoyu burada ince bir alt başlık olarak kullanalım */}
        <Typography variant="subtitle1" color="text.secondary">
          {t("home.subtitle")}
        </Typography>
      </Stack>
    </Box>
  );
}

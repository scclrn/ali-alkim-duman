import React, { useMemo } from "react";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { films } from "../data/films";
import YearSection from "../components/films/YearSection";

export default function Films() {
  const { t } = useTranslation();

  const grouped = useMemo(() => {
    const acc = {};
    for (const f of films) {
      const y = Number(f.year);
      (acc[y] ||= []).push(f);
    }
    return acc;
  }, []);
  const yearsDesc = useMemo(
    () =>
      Object.keys(grouped)
        .map(Number)
        .sort((a, b) => b - a),
    [grouped]
  );

  return (
    <>
      <title>
        {t("films.heading")} — {t("siteTitle")}
      </title>
      <Stack spacing={4}>
        <Typography variant="h4">{t("films.heading")}</Typography>
        {yearsDesc.map((y) => (
          <YearSection key={y} year={y} films={grouped[y]} />
        ))}
      </Stack>
    </>
  );
}

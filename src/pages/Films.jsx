import React from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Films() {
  const { t } = useTranslation();
  const sample = [
    { id: 1, title: "Film One", year: 2021 },
    { id: 2, title: "Film Two", year: 2023 },
  ];

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {t("films.heading")}
      </Typography>
      <Grid container spacing={2}>
        {sample.map((f) => (
          <Grid key={f.id} item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">{f.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {f.year}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

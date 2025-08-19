import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export default function FilmCard({ film }) {
  const { i18n } = useTranslation();
  const title =
    i18n.language === "en" ? film.englishTitle || film.title : film.title;

  return (
    <Card
      component={motion.div}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <CardActionArea
        component={RouterLink}
        to={`/films/${film.id}`}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          height: "100%",
        }}
      >
        {/* 2:3 sabit oran (padding-top tekniği) */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            pt: "150%",
            overflow: "hidden",
            borderTopLeftRadius: 1.5,
            borderTopRightRadius: 1.5,
          }}
        >
          <Box
            component="img"
            src={film.poster}
            alt={title}
            loading="lazy"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>

        <CardContent sx={{ width: "100%", flexGrow: 1, minHeight: 72 }}>
          <Typography variant="subtitle1" fontWeight={600} noWrap title={title}>
            {title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {film.year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

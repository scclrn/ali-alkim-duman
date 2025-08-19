import React from "react";
import { Stack, Typography, Divider, Box } from "@mui/material";
import { motion } from "motion/react";
import FilmCard from "./FilmCard";

export default function YearSection({ year, films }) {
  const sorted = [...films].sort((a, b) =>
    (a.title || "").localeCompare(b.title || "")
  );

  return (
    <Stack
      component={motion.section}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      spacing={2}
    >
      <Stack direction="row" alignItems="baseline" gap={2}>
        <Typography variant="h5" fontWeight={700}>
          {year}
        </Typography>
        <Divider sx={{ flex: 1 }} />
      </Stack>

      {/* Sabit kart genişliği (tek kartta bile aynı): */}
      <Box
        sx={{
          "--card-w": { xs: "160px", sm: "200px", md: "220px" },
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {sorted.map((f) => (
          <Box key={f.id} sx={{ width: "var(--card-w)" }}>
            <FilmCard film={f} />
          </Box>
        ))}
      </Box>
    </Stack>
  );
}

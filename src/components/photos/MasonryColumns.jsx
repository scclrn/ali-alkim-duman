import React from "react";
import { Box } from "@mui/material";
import { motion } from "motion/react";

export default function MasonryColumns({ images = [], gap = 12 }) {
  return (
    <Box
      sx={{
        columnCount: { xs: 1, sm: 2, md: 3, lg: 4 },
        columnGap: gap,
      }}
    >
      {images.map((src, i) => (
        <Box
          key={i}
          component={motion.img}
          src={src}
          alt=""
          loading="lazy"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          sx={{
            width: "100%",
            display: "block",
            mb: `${gap}px`,
            borderRadius: 2,
            breakInside: "avoid",
            boxShadow: (t) => t.shadows[3],
          }}
        />
      ))}
    </Box>
  );
}

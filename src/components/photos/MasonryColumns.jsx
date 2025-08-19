import React from "react";
import { Box, Grid } from "@mui/material";
import { motion } from "motion/react";

export default function MasonryColumns({ images = [], gap = 12 }) {
  return (
    <Grid container spacing={2} sx={{ width: "100%" }}>
      {images.map((src, i) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
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
              maxWidth: { xs: '100%', sm: '300px', md: '200px', lg: '200px' },
              height: "auto",
              display: "block",
              mb: `${gap}px`,
              borderRadius: 2,
              breakInside: "avoid",
              boxShadow: (t) => t.shadows[3],
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
}

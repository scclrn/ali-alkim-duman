import React from "react";
import { Box } from "@mui/material";
import { motion } from "motion/react";

export default function FadeInOnView({ children, delay = 0 }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </Box>
  );
}

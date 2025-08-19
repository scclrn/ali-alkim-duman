import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import { motion } from "motion/react";

export default function BioProse({ text }) {
  const paragraphs = String(text || "").split(/\n\s*\n/);
  return (
    <Stack spacing={3} sx={{ maxWidth: 900, mx: "auto" }}>
      {paragraphs.map((p, i) => (
        <Typography
          key={i}
          component={motion.p}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
          transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
          variant="body1"
          sx={{
            lineHeight: 1.85,
            fontSize: { xs: "1.05rem", md: "1.1rem" },
            color: "text.primary",
            // ilk paragrafta drop-cap efekti
            ...(i === 0
              ? {
                  "&::first-letter": {
                    float: "left",
                    fontSize: { xs: "3rem", md: "3.6rem" },
                    lineHeight: 1,
                    fontWeight: 700,
                    paddingRight: 1,
                    color: "text.primary",
                  },
                }
              : {}),
          }}
        >
          {p}
        </Typography>
      ))}

      {/* altta yumuşak degrade ayraç */}
      <Box
        sx={{
          height: 32,
          background:
            "linear-gradient(180deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />
    </Stack>
  );
}

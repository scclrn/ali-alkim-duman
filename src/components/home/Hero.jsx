import React from "react";
import { Box, Stack, Typography } from "@mui/material";

export default function Hero({ imageSrc, title, subtitle }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "70vh", md: "82vh" },
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "translateZ(0)",
        }}
      />

      {/* Edge fades: top readability + bottom blend into site background */}
      <Box
        sx={(t) => ({
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(to bottom, rgba(0,0,0,0) 58%, ${t.palette.background.default} 98%),
            linear-gradient(to top, rgba(0,0,0,.55) 0%, rgba(0,0,0,.10) 45%, rgba(0,0,0,0) 70%)
          `,
          boxShadow: "inset 0 0 120px rgba(0,0,0,.45)",
        })}
      />

      {/* Text block — bottom-left */}
      <Stack
        spacing={2}
        sx={{
          position: "absolute",
          bottom: { xs: 20, md: 56 },
          left: { xs: 16, md: 64 },
          right: { xs: 16, md: 64 },
          maxWidth: { xs: "100%", md: 900 },
          color: "common.white",
          textShadow: "0 2px 8px rgba(0,0,0,.55)",
        }}
      >
        <Typography variant="h2" fontWeight={800} sx={{ letterSpacing: 0.2 }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            {subtitle}
          </Typography>
        )}
      </Stack>
    </Box>
  );
}

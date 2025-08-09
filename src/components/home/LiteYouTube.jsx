import React, { useState } from "react";
import { Box } from "@mui/material";

export default function LiteYouTube({
  videoId,
  coverSrc,
  title = "YouTube video",
}) {
  const [play, setPlay] = useState(false);
  if (play) {
    return (
      <Box
        sx={{
          position: "relative",
          width: "100%",
          pt: "56.25%",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: (t) => t.shadows[6],
        }}
      >
        <Box
          component="iframe"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          sx={{
            position: "absolute",
            inset: 0,
            border: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
    );
  }
  const fallbackThumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  return (
    <Box
      role="button"
      aria-label={`${title} — play`}
      tabIndex={0}
      onClick={() => setPlay(true)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setPlay(true)}
      sx={{
        position: "relative",
        width: "100%",
        pt: "56.25%",
        borderRadius: 2,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: (t) => t.shadows[6],
        backgroundImage: `url(${coverSrc || fallbackThumb})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,.25)" }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            backdropFilter: "blur(2px)",
            bgcolor: "rgba(255,255,255,.85)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
          </svg>
        </Box>
      </Box>
    </Box>
  );
}

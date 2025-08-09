import React from "react";
import { Stack, Typography } from "@mui/material";
import FadeInOnView from "../common/FadeInOnView";
import LiteYouTube from "./LiteYouTube";

export default function VideoSection({ heading, videoId, coverSrc }) {
  return (
    <FadeInOnView>
      <Stack spacing={2} mb={{ xs: 6, md: 10 }}>
        <Typography variant="h4" fontWeight={700}>
          {heading}
        </Typography>
        <LiteYouTube videoId={videoId} coverSrc={coverSrc} />
      </Stack>
    </FadeInOnView>
  );
}

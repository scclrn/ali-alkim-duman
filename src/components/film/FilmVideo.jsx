import React from "react";
import LiteYouTube from "../home/LiteYouTube";

export default function FilmVideo({ videoId, coverSrc, title }) {
  return <LiteYouTube videoId={videoId} coverSrc={coverSrc} title={title} />;
}

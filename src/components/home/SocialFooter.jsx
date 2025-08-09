import React from "react";
import { Stack, IconButton, Divider } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FadeInOnView from "../common/FadeInOnView";

export default function SocialFooter({ links }) {
  return (
    <FadeInOnView>
      <Divider sx={{ my: { xs: 4, md: 6 } }} />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        mb={{ xs: 2, md: 4 }}
      >
        {links.instagram && (
          <IconButton
            aria-label="Instagram"
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </IconButton>
        )}
        {links.twitter && (
          <IconButton
            aria-label="X / Twitter"
            href={links.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </IconButton>
        )}
        {links.youtube && (
          <IconButton
            aria-label="YouTube"
            href={links.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon />
          </IconButton>
        )}
      </Stack>
    </FadeInOnView>
  );
}

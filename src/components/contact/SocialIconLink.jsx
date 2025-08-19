import React from "react";
import { IconButton, Tooltip } from "@mui/material";

export default function SocialIconLink({ href, label, children }) {
  return (
    <Tooltip title={label}>
      <IconButton
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        size="large"
        sx={{
          width: 88,
          height: 88,
          borderRadius: "999px",
          bgcolor: "action.hover",
          "&:hover": { bgcolor: "action.selected" },
        }}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
}

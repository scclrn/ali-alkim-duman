import React from "react";
import { Stack, Typography, Button, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";
import FadeInOnView from "../common/FadeInOnView";

export default function BioTeaser({ title, body, cta }) {
  return (
    <FadeInOnView>
      <Stack spacing={2} mb={{ xs: 6, md: 10 }}>
        <Typography variant="h4" fontWeight={700}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 900 }}>
          {body}
        </Typography>
        <Box>
          <Button
            component={RouterLink}
            to="/biography"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
          >
            {cta}
          </Button>
        </Box>
      </Stack>
    </FadeInOnView>
  );
}

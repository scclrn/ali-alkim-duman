import React from "react";
import {
  Stack,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Box,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";
import FadeInOnView from "../common/FadeInOnView";
import { motion } from "motion/react";

export default function FilmsPreview({ films, heading }) {
  return (
    <FadeInOnView>
      <Stack spacing={2} mb={{ xs: 6, md: 10 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h4" fontWeight={700}>
            {heading}
          </Typography>
          <Button
            component={RouterLink}
            to="/films"
            endIcon={<ArrowForwardIcon />}
          >
            See all
          </Button>
        </Stack>

        {/* CSS Grid → phone:1, tablet:2, desktop:4 */}
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(4, minmax(0, 1fr))",
            },
          }}
        >
          {films.slice(0, 4).map((f) => (
            <Card
              key={f.id}
              sx={{ height: "100%" }}
              component={motion.div}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <CardActionArea
                component={RouterLink}
                to={`/films#${f.id}`}
                sx={{ display: "block" }}
              >
                <Box
                  sx={{
                    width: "100%",
                    pt: "150%",
                    backgroundImage: `url(${f.poster})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                />
                <CardContent>
                  <Typography variant="subtitle1" fontWeight={600} noWrap>
                    {f.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {f.year}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Stack>
    </FadeInOnView>
  );
}

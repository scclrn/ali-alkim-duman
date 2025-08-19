import React from "react";
import { Stack, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SocialIconLink from "../components/contact/SocialIconLink";
import EmailCopyButton from "../components/contact/EmailCopyButton";

export default function Contact() {
  const { t } = useTranslation();

  const EMAIL = ""; // eklediğinde kopyalanır
  const INSTAGRAM = "https://www.instagram.com/alialkimdmn/";
  const YOUTUBE = "https://www.youtube.com/@alialkmduman2075";

  return (
    <>
      <title>
        {t("contact.heading")} — {t("siteTitle")}
      </title>

      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "70vh" }}
      >
        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          <Box
            component={motion.div}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            <EmailCopyButton email={EMAIL} />
          </Box>

          <Box
            component={motion.div}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            <SocialIconLink href={INSTAGRAM} label="Instagram">
              <InstagramIcon sx={{ fontSize: 36 }} />
            </SocialIconLink>
          </Box>

          <Box
            component={motion.div}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            <SocialIconLink href={YOUTUBE} label="YouTube">
              <YouTubeIcon sx={{ fontSize: 36 }} />
            </SocialIconLink>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

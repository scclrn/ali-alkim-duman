import React from "react";
import { Typography, Stack, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <Stack spacing={2}>
      <Typography variant="h4">{t("contact.heading")}</Typography>
      <TextField label="Email" type="email" fullWidth />
      <TextField label="Message / Mesaj" multiline rows={4} fullWidth />
      <Button variant="contained">Gönder / Send</Button>
    </Stack>
  );
}

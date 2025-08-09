import React from "react";
import { Outlet, Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Box,
  Typography,
} from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Layout() {
  const { t } = useTranslation();
  const location = useLocation();

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/biography", label: t("nav.bio") },
    { to: "/films", label: t("nav.films") },
    { to: "/photos", label: t("nav.photos") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: "saturate(180%) blur(8px)",
          bgcolor: "rgba(0,0,0,.35)",
        }}
      >
        <Toolbar sx={{ gap: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {t("siteTitle")}
          </Typography>
          {nav.map((item) => (
            <Button
              key={item.to}
              component={RouterLink}
              to={item.to}
              variant={location.pathname === item.to ? "contained" : "text"}
            >
              {item.label}
            </Button>
          ))}
          <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
            <TranslateIcon sx={{ mr: 1 }} />
            <LanguageSwitcher />
          </Box>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Outlet />
      </Container>
    </>
  );
}

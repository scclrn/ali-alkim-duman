import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { trTR, enUS } from "@mui/material/locale";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Films from "./pages/Films";
import Photos from "./pages/Photos";
import Contact from "./pages/Contact";
import FilmDetail from "./pages/FilmDetail";

export default function App() {
  const { i18n } = useTranslation();
  const theme = useMemo(() => {
    return createTheme(
      {
        palette: {
          mode: "dark",
          primary: { main: "#90caf9" },
          background: { default: "#0b0b0b", paper: "#111214" },
          text: { primary: "#eaeaea", secondary: "#b3b3b3" },
        },
        shape: { borderRadius: 12 },
        typography: { fontFamily: "Inter, Roboto, Arial, sans-serif" },
      },
      i18n.language === "tr" ? trTR : enUS
    );
  }, [i18n.language]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/films" element={<Films />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/films/:id" element={<FilmDetail />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

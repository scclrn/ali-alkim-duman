import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { trTR, enUS } from "@mui/material/locale";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Films from "./pages/Films";
import Contact from "./pages/Contact";

export default function App() {
  const { i18n } = useTranslation();
  const theme = useMemo(() => {
    return createTheme(
      {
        palette: { mode: "light" }, // isterseniz dark mod ekleriz
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
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

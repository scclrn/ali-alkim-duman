import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = React.useState(
    i18n.language.startsWith("tr") ? "tr" : "en"
  );

  const handle = (_e, next) => {
    if (!next) return;
    setLang(next);
    i18n.changeLanguage(next);
    try {
      localStorage.setItem("i18nextLng", next);
    } catch {}
  };

  return (
    <ToggleButtonGroup
      size="small"
      value={lang}
      exclusive
      onChange={handle}
      aria-label={t("lang.label")}
    >
      <ToggleButton value="tr">TR</ToggleButton>
      <ToggleButton value="en">EN</ToggleButton>
    </ToggleButtonGroup>
  );
}

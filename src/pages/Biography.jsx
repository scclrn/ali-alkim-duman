import React from "react";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import BioHeader from "../components/bio/BioHeader";
import BioProse from "../components/bio/BioProse";

export default function Biography() {
  const { t } = useTranslation();
  const text = t("bio.content");

  return (
    <>
      <title>
        {t("bio.heading")} — {t("siteTitle")}
      </title>
      <Stack spacing={{ xs: 3, md: 5 }}>
        <BioHeader />
        <BioProse text={text} />
      </Stack>
    </>
  );
}

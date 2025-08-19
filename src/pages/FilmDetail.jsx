import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Stack, Typography, Tabs, Tab, Divider } from "@mui/material";
import FilmVideo from "../components/film/FilmVideo";
import FilmHeader from "../components/film/FilmHeader";
import FilmOverview from "../components/film/FilmOverview";
import FilmCredits from "../components/film/FilmCredits";
import FilmFeatures from "../components/film/FilmFeatures";
import { getFilmById } from "../data/films";

export default function FilmDetail() {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const film = getFilmById(id);
  const [tab, setTab] = useState(0);

  if (!film) {
    return (
      <Stack spacing={2}>
        <title>
          {t("films.heading", { defaultValue: "Filmler" })} — {t("siteTitle")}
        </title>
        <Typography variant="h5">Film bulunamadı.</Typography>
      </Stack>
    );
  }

  const displayTitle =
    i18n.language === "en" ? film.englishTitle || film.title : film.title;

  return (
    <Stack spacing={3}>
      <title>
        {displayTitle} — {t("siteTitle")}
      </title>
      <meta name="description" content={`${displayTitle} (${film.year})`} />

      <FilmVideo
        videoId={film.videoId}
        coverSrc={film.poster}
        title={displayTitle}
      />

      <FilmHeader
        title={film.title}
        englishTitle={film.englishTitle}
        year={film.year}
      />

      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        variant="scrollable"
        allowScrollButtonsMobile
      >
        <Tab label={t("film.tabs.overview", { defaultValue: "Genel Bakış" })} />
        <Tab label={t("film.tabs.credits", { defaultValue: "Krediler" })} />
        <Tab label={t("film.tabs.features", { defaultValue: "Özellikler" })} />
      </Tabs>
      <Divider />

      {tab === 0 && (
        <FilmOverview poster={film.poster} overview={film.overview} />
      )}
      {tab === 1 && <FilmCredits credits={film.credits} />}
      {tab === 2 && <FilmFeatures features={film.features} />}
    </Stack>
  );
}

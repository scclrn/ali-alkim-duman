import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import FullBleed from "../components/common/FullBleed";
import Hero from "../components/home/Hero";
import BioTeaser from "../components/home/BioTeaser";
import FilmsPreview from "../components/home/FilmsPreview";
import VideoSection from "../components/home/VideoSection";
import SocialFooter from "../components/home/SocialFooter";

// Hero görseli assets'ten import (Vite build ile doğru URL'e dönüştürülür)
import heroPoster from "../assets/alkim/poster.jpg";

// Filmler artık merkezi kaynaktan (id'ler FilmDetail ile uyumlu)
import { films as allFilms } from "../data/films";

export default function Home() {
  const { t } = useTranslation();

  // En yeni 4 filmi seç (yıla göre azalan)
  const latest = useMemo(
    () =>
      [...allFilms].sort((a, b) => Number(b.year) - Number(a.year)).slice(0, 4),
    []
  );

  const social = {
    instagram: "https://www.instagram.com/alialkimdmn/",
    twitter: undefined,
    youtube: undefined,
  };

  return (
    <>
      {/* React 19 Document Metadata */}
      <title>
        {t("home.heading")} — {t("siteTitle")}
      </title>
      <meta name="description" content={t("home.subtitle")} />

      <FullBleed>
        <Hero
          imageSrc={heroPoster}
          title={t("home.heading")}
          subtitle={t("home.subtitle")}
        />
      </FullBleed>

      <BioTeaser
        title={t("home.bioHeading")}
        body={t("home.bioTeaser")}
        cta={t("home.readBio", { defaultValue: "Biyografiyi Gör" })}
      />

      {/* Ana sayfadaki grid artık data/films'ten gelen id/poster'ları kullanır */}
      <FilmsPreview films={latest} heading={t("home.latestFilmsHeading")} />

      <VideoSection
        heading={t("home.videoHeading")}
        videoId={"lUg68A4LNk4"}
        coverSrc={latest[0]?.poster}
      />

      <SocialFooter links={social} />
    </>
  );
}

import React from "react";
import { useTranslation } from "react-i18next";
import FullBleed from "../components/common/FullBleed";
import Hero from "../components/home/Hero";
import BioTeaser from "../components/home/BioTeaser";
import FilmsPreview from "../components/home/FilmsPreview";
import VideoSection from "../components/home/VideoSection";
import SocialFooter from "../components/home/SocialFooter";

// Resimler
import heroPoster from "../assets/poster.jpg";
import film1 from "../assets/film-posters/tiksinti.png";
import film2 from "../assets/i2.jpg";
import film3 from "../assets/kd2.jpg";
import film4 from "../assets/ki2.jpg";

export default function Home() {
  const { t } = useTranslation();

  const films = [
    { id: 1, title: "Tiksinti", year: 2024, poster: film1 },
    { id: 2, title: "Film Two", year: 2022, poster: film2 },
    { id: 3, title: "Film Three", year: 2023, poster: film3 },
    { id: 4, title: "Film Four", year: 2024, poster: film4 },
  ];

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

      <FilmsPreview films={films} heading={t("home.latestFilmsHeading")} />

      <VideoSection
        heading={t("home.videoHeading")}
        videoId={"dQw4w9WgXcQ"}
        coverSrc={film1}
      />

      <SocialFooter links={social} />
    </>
  );
}

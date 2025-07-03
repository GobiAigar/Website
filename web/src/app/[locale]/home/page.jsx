"use client";

import React from "react";
import { Box, Container, Typography, Skeleton } from "@mui/material";

import { useLocale, useTranslations } from "next-intl";
import { useAppData } from "../../../context/AppDataProvider";

import VideoSection from "../../components/Sections/VideoSection";
import MainSection from "../../components/Sections/MainSection";
import ProductImageList from "../../components/ImageList";
import ImageSection from "../../components/Sections/ImageSection";
import Hero from "./Hero";
import StatisticsSection from "../../components/Sections/StatisticsSection";
import EndSection from "../../components/Sections/EndSection";
import BrandSection from "../../components/Sections/BrandSection";
import Title from "../../components/keyComponents/Title";

const Home = () => {
  const { website, loadingWebsite } = useAppData();
  const lang = useLocale();
  const t = useTranslations("home");

  const rawData = website?.data || {};
  const websiteData = rawData?.response || [];
  const statisticsList = rawData.statistics || [];
  const faqs = rawData.faq || [];

  const getSingleById = (id) => websiteData?.find((item) => item.id === id);
  const getMultibyId = (ids) => {
    return websiteData?.filter((item) => ids.includes(item.id)) || [];
  };

  const hero = rawData?.hero?.[0];

  const section1 = getSingleById(1);
  const section2 = getSingleById(2);
  const valueGoalVision = [3, 4, 5]
    .map((title) => getSingleById(title))
    .filter(Boolean);
  const section3 = getSingleById(6);
  const goatsHeader = getSingleById(7);
  const fourGoats = getMultibyId([8, 9, 10, 11]);
  const section4 = getSingleById(12);
  const section5 = getSingleById(13);
  const fqaSection = getSingleById(14);
  const endSection = getSingleById(15);

  if (loadingWebsite) {
    return (
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <Container
          sx={{
            position: "relative",
            textAlign: "center",
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Skeleton variant="rectangular" color="#333" />
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url(${hero?.image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
        />
        <Hero data={hero} />
      </Box>

      <VideoSection datas={section1} />
      <Box sx={{ backgroundColor: "#E8DFD9" }}>
        <MainSection datas={section2} reverse={true} />
      </Box>
      <BrandSection datas={valueGoalVision} />
      {/* 4 ymaatai */}

      <Box mx={2} paddingY={{ sx: 3, sm: 4, md: 5 }}>
        <Title entitle={goatsHeader?.entitle} mntitle={goatsHeader?.mntitle} />
        <Typography
          sx={{
            fontSize: {
              xs: "0.875rem",
              sm: "1rem",
              md: "1.125rem",
              lg: "1.25rem",
            },
          }}
          mb="1rem"
          textAlign="start"
        >
          {lang === "mn"
            ? goatsHeader?.mndescription
            : goatsHeader?.endescription}
        </Typography>
        <ProductImageList sections={fourGoats} lang={lang} />
      </Box>
      <Box sx={{ backgroundColor: "#E8DFD9" }}>
        <MainSection datas={section3} reverse={false} />
      </Box>

      <ImageSection datas={section4} />

      {/* <StatisticsSection datas={section5} statisticsList={statisticsList} /> */}
      <EndSection datas={endSection} faqs={faqs} fqaSection={fqaSection} />
    </Box>
  );
};

export default Home;

"use client";

import { Box, Container, Typography, Skeleton, Divider } from "@mui/material";

import { useLocale, useTranslations } from "next-intl";
import { useAppData } from "../../../context/AppDataProvider";

import VideoSection from "../../components/Sections/VideoSection";
import MainSection from "../../components/Sections/MainSection";
import ProductImageList from "../../components/ProductImageList";

import Hero from "./Hero";
import EndSection from "../../components/Sections/EndSection";
import BrandSection from "../../components/Sections/BrandSection";
import NewMainSection from "../../components/newComponents/NewMainSection";
import Title from "../../components/keyComponents/Title";

const Home = () => {
  const { website, loadingWebsite } = useAppData();

  const lang = useLocale();
  const t = useTranslations("home");

  const rawData = website?.data || {};
  const websiteData = rawData?.response || [];

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

  const endSection = getSingleById(14);

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
      <Box>
        <Hero data={hero} />
      </Box>

      <Box id="history">
        <VideoSection datas={section1} />
      </Box>

      <NewMainSection data={section2} />
      <Divider />

      <BrandSection datas={valueGoalVision} />
      <Divider />

      <MainSection datas={section3} />

      <Divider />

      <Box padding={{ xs: 2, sm: 4, md: 6 }} width="100%">
        <Box marginBottom={{ xs: 1.25, sm: 1.875, md: 2.5 }}>
          <Title
            mntitle={goatsHeader?.mntitle}
            entitle={goatsHeader?.entitle}
            textAlign={true}
          />
        </Box>
        <ProductImageList sections={fourGoats} />
      </Box>
      <Divider />
      {/* <ImageSection datas={section4} /> */}

      <EndSection datas={endSection} />
    </Box>
  );
};

export default Home;

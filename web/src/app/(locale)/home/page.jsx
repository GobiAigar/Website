"use client";

import { Box, Container, Typography, Skeleton } from "@mui/material";
import { gsap } from "gsap";
import { useLocale, useTranslations } from "next-intl";
import { useAppData } from "../../../context/AppDataProvider";

import VideoSection from "../../components/Sections/VideoSection";
import ProductImageList from "../../components/ProductImageList";
import NewHero from "./_NewHero";
import EndSection from "../../components/Sections/EndSection";
import Title from "../../components/keyComponents/Title";
import Loading from "../../components/keyComponents/Loading";
import { ScrollTrigger } from "gsap/all";
import GoldenDivider from "../../components/keyComponents/GoldenDivider";
import Mvg from "./_Mvg.jsx";
import MainSection from "./_MainSection";

gsap.registerPlugin(ScrollTrigger);

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

  const endSection = getSingleById(14);

  if (loadingWebsite) {
    return <Loading />;
  }

  return (
    <Box
      sx={{
        position: "relative",
        top: 64,
        width: "100%",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NewHero data={hero} />

      <Box
        sx={{
          backgroundImage: "url('/background.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <VideoSection datas={section1} />

        <Box
          paddingTop={{ xs: 6, sm: 8, md: 6 }}
          paddingBottom={{ xs: 4, sm: 6, md: 8 }}
        >
          <Container>
            <Title
              mntitle={goatsHeader?.mntitle}
              entitle={goatsHeader?.entitle}
              textAlign={true}
            />
            <GoldenDivider />
            <ProductImageList sections={fourGoats} />
          </Container>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: "url('/background.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <Mvg datas={valueGoalVision} />
        <MainSection data={section2} />
        <MainSection data={section3} />
        <EndSection datas={endSection} />
      </Box>
    </Box>
  );
};

export default Home;

"use client";

import { Box, Container, Typography, Skeleton, Divider } from "@mui/material";
import { gsap } from "gsap";
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
import Loading from "../../components/keyComponents/Loading";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

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
  const section4 = getSingleById(12);

  const endSection = getSingleById(14);

  const sectionsRefs = useRef([]);

  useEffect(() => {
    if (loadingWebsite) return;

    sectionsRefs.current.forEach((section, i) => {
      if (!section) return;

      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 20 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: i * 0.3, // stagger each by 0.3s delay
        }
      );
    });
  }, [loadingWebsite]);

  if (loadingWebsite) {
    return <Loading />;
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
      <Hero data={hero} />

      <Box id="history" ref={(el) => (sectionsRefs.current[1] = el)}>
        <VideoSection datas={section1} />
      </Box>

      <Box ref={(el) => (sectionsRefs.current[2] = el)}>
        <NewMainSection data={section2} />
      </Box>
      <Divider />

      <Box ref={(el) => (sectionsRefs.current[3] = el)}>
        <BrandSection datas={valueGoalVision} />
      </Box>
      <Divider />

      <Box ref={(el) => (sectionsRefs.current[4] = el)}>
        <MainSection datas={section3} />
      </Box>

      <Divider />
      <Box ref={(el) => (sectionsRefs.current[5] = el)}>
        <Container>
          <Box marginBottom={{ xs: 1.25, sm: 1.875, md: 2.5 }}>
            <Title
              mntitle={goatsHeader?.mntitle}
              entitle={goatsHeader?.entitle}
              textAlign={true}
            />
          </Box>
          <ProductImageList sections={fourGoats} />
        </Container>
      </Box>

      <EndSection datas={endSection} />
    </Box>
  );
};

export default Home;

"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
  CircularProgress,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductImageList from "../../components/ImageList";
import SplitSection from "../../components/SplitSection";
import InfoCard from "../../components/InforCard";
import Video from "../../components/Video";
import FAQSection from "../../components/FAQSection";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";

const Home = () => {
  const [homeData, setHomeData] = useState([]);
  const lang = useLocale();
  const [loading, setLoading] = useState(true);
  const t = useTranslations("HomePage");

  useEffect(() => {
    fetch("https://website-z9b7.onrender.com/api/website")
      .then((res) => res.json())
      .then((data) => {
        setHomeData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch home data", err);
        setLoading(false);
      });
  }, []);

  const getItemsByTitle = (title) =>
    homeData.filter((item) => item.title === title);

  const getSingleByTitle = (title) =>
    homeData.find((item) => item.title === title);

  const infoCards = ["sloganA", "sloganB", "sloganC"]
    .map((title) => getSingleByTitle(title))
    .filter(Boolean);

  const splitSections = ["HomeSectionc", "HomeSectiond"]
    .map((title) => {
      const sec = getSingleByTitle(title);
      return sec
        ? {
            img: [
              sec.image_url1,
              sec.image_url2,
              sec.image_url3,
              sec.image_url4,
            ].filter(Boolean),
            title: lang === "mn" ? sec.mntitle : sec.entitle,
            text: lang === "mn" ? sec.mnsubtitle : sec.ensubtitle,
          }
        : null;
    })
    .filter(Boolean);

  const herderSection = getSingleByTitle("Herder");
  const endSection = getSingleByTitle("HomeEndsection");
  const homeSectionA = getSingleByTitle("HomeSectionA");
  const faqs = homeData.filter((d) => d.title?.includes("FAQ"));

  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          backgroundImage: "url('/Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.6)" }}
        ></Box>
        <Header />
        <Container
          sx={{
            position: "relative",
            py: 20,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
              <Typography
                variant="h3"
                fontWeight="bold"
                color="common.white"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: "28px",
                    sm: "36px",
                    md: "48px",
                    lg: "56px",
                  },
                }}
              >
                {lang === "mn" ? homeSectionA?.mntitle : homeSectionA?.entitle}
              </Typography>
              <Typography
                variant="h5"
                color="common.white"
                mb={4}
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "16px",
                    md: "20px",
                    lg: "28px",
                  },
                }}
              >
                {lang === "mn"
                  ? homeSectionA?.mnsubtitle
                  : homeSectionA?.ensubtitle}
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                <Grid>
                  <Link href="/product" passHref>
                    <Button
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        pt: 1,
                        borderRadius: 3,
                        background: "white",
                        color: "black",
                      }}
                    >
                      {t("seeProduct")}
                    </Button>
                  </Link>
                </Grid>
                <Grid>
                  <Link href="/sustainability" passHref>
                    <Button
                      variant="outlined"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        textTransform: "none",
                        pt: 1,
                        color: "white",
                        borderColor: "white",
                        borderRadius: 3,
                      }}
                    >
                      {t("ourHistory")}
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </>
          )}
        </Container>
      </Box>

      {!loading && (
        <>
          <Container sx={{ py: 8 }}>
            <SplitSection sections={splitSections} />
          </Container>

          <Container maxWidth="lg" sx={{ py: 8 }}>
            <Grid container alignItems="stretch" spacing={2}>
              {infoCards.map((item, index) => (
                <React.Fragment key={item.id}>
                  <Grid size={{ xs: 12, sm: 3.7, md: 3.84 }}>
                    <InfoCard
                      imageSrc={item.image_url1}
                      title={lang === "mn" ? item.mntitle : item.entitle}
                      description={
                        lang === "mn" ? item.mnsubtitle : item.ensubtitle
                      }
                    />
                  </Grid>
                  {(index + 1) % 3 !== 0 && index < infoCards.length - 1 && (
                    <Grid
                      sx={{
                        display: { xs: "none", sm: "flex" },
                        alignItems: "stretch",
                        justifyContent: "center",
                      }}
                    >
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ borderColor: "#8B4513", borderRightWidth: 1 }}
                      />
                    </Grid>
                  )}
                </React.Fragment>
              ))}
            </Grid>
          </Container>

          {herderSection && (
            <Container sx={{ py: 8 }}>
              <Typography variant="h4" fontWeight={700} mb={4}>
                {lang === "mn" ? herderSection.mntitle : herderSection.entitle}
              </Typography>
              <Box
                component="img"
                src={herderSection.image_url1}
                alt="supply image"
                sx={{ width: "100%", borderRadius: 2 }}
              />
            </Container>
          )}

          {endSection && (
            <Container sx={{ py: 8 }}>
              <Grid container spacing={6}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="h4" fontWeight={700} mb={2}>
                    {lang === "mn" ? endSection.mntitle : endSection.entitle}
                  </Typography>
                  <Box
                    component="img"
                    src={endSection.image_url1}
                    alt="end-section"
                    sx={{ width: "100%", borderRadius: 2 }}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <FAQSection faqItems={faqs} lang={lang} />
                </Grid>
              </Grid>
            </Container>
          )}
        </>
      )}

      <Footer />
    </Box>
  );
};

export default Home;

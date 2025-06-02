"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
  Skeleton,
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
import { useAppData } from "../../../context/AppDataProvider";

const Home = () => {
  const { website, loadingWebsite } = useAppData();
  const lang = useLocale();
  const t = useTranslations("home");

  const rawData = website || {};
  const websiteData = rawData.website || [];
  const statisticsList = rawData.statistics || [];
  const faqs = rawData.faq || [];

  const getSingleByTitle = (title) =>
    websiteData.find((item) => item.title === title);

  const homeSectionA = getSingleByTitle("HomeSectionA");
  const homeSectionB = getSingleByTitle("HomeSectionb");
  const endSection = getSingleByTitle("HomeEndsection");
  const herderSection = getSingleByTitle("Herder");
  const statisticsSection = getSingleByTitle("Statistics");

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

  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          backgroundImage: loadingWebsite
            ? "none"
            : `url(${homeSectionA?.image_url1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.6)" }}
        />
        <Header />
        <Container
          sx={{
            position: "relative",
            textAlign: "center",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {loadingWebsite ? (
            <>
              <Skeleton width="80%" height={60} sx={{ bgcolor: "grey.700" }} />
              <Skeleton width="60%" height={40} sx={{ mt: 2 }} />
            </>
          ) : (
            <>
              <Typography
                variant="h3"
                fontWeight="bold"
                color="common.white"
                gutterBottom
                sx={{
                  fontSize: { xs: "28px", sm: "36px", md: "48px", lg: "56px" },
                }}
              >
                {lang === "mn" ? homeSectionA?.mntitle : homeSectionA?.entitle}
              </Typography>
              <Typography
                variant="h5"
                color="common.white"
                mb={4}
                sx={{
                  fontSize: { xs: "12px", sm: "16px", md: "20px", lg: "28px" },
                }}
              >
                {lang === "mn"
                  ? homeSectionA?.mnsubtitle
                  : homeSectionA?.ensubtitle}
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                <Grid size="auto">
                  <Button
                    component={Link}
                    href="/product"
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
                </Grid>
                <Grid size="auto">
                  <Button
                    component={Link}
                    href="/sustainability"
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
                </Grid>
              </Grid>
            </>
          )}
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        {loadingWebsite ? (
          <Skeleton variant="rectangular" width="100%" height={300} />
        ) : (
          <ProductImageList sections={homeSectionB} lang={lang} />
        )}
      </Container>

      <Container sx={{ py: 8 }}>
        {loadingWebsite ? (
          <Skeleton variant="rectangular" width="100%" height={400} />
        ) : (
          <SplitSection sections={splitSections} />
        )}
      </Container>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {loadingWebsite ? (
          <Grid container spacing={2}>
            {Array.from(new Array(3)).map((_, index) => (
              <Grid size={{ xs: 12, sm: 4 }} key={index}>
                <Skeleton variant="rectangular" width="100%" height={200} />
                <Skeleton width="80%" sx={{ mt: 2 }} />
                <Skeleton width="60%" />
              </Grid>
            ))}
          </Grid>
        ) : (
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
                    size="auto"
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
        )}
      </Container>

      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          mb={4}
          sx={{
            fontSize: { xs: "24px", sm: "28px", md: "32px" },
          }}
        >
          {loadingWebsite
            ? "..."
            : lang === "mn"
            ? statisticsSection?.mntitle
            : statisticsSection?.entitle}
        </Typography>

        {loadingWebsite ? (
          <Skeleton variant="rectangular" width="100%" height={300} />
        ) : (
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="ul"
                sx={{
                  pl: 3,
                  fontSize: "1rem",
                  lineHeight: 2,
                  color: "text.secondary",
                  listStyleType: "disc",
                  m: 0,
                }}
              >
                {statisticsList.map((item) => (
                  <li key={item.id}>
                    {lang === "mn" ? item.mongolia : item.english}
                  </li>
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Video src={statisticsSection?.image_url1} />
            </Grid>
          </Grid>
        )}
      </Container>

      {herderSection && (
        <Container sx={{ py: 8 }}>
          {loadingWebsite ? (
            <Skeleton variant="rectangular" width="100%" height={400} />
          ) : (
            <>
              <Typography variant="h4" fontWeight={700} mb={4}>
                {lang === "mn" ? herderSection.mntitle : herderSection.entitle}
              </Typography>
              <Box
                component="img"
                src={herderSection.image_url1}
                alt="supply image"
                sx={{ width: "100%", borderRadius: 2 }}
              />
            </>
          )}
        </Container>
      )}

      {endSection && (
        <Container sx={{ py: 8 }}>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              {loadingWebsite ? (
                <Skeleton variant="rectangular" width="100%" height={200} />
              ) : (
                <>
                  <Typography variant="h4" fontWeight={700} mb={2}>
                    {lang === "mn" ? endSection.mntitle : endSection.entitle}
                  </Typography>
                  <Box
                    component="img"
                    src={endSection.image_url1}
                    alt="end-section"
                    sx={{ width: "100%", borderRadius: 2 }}
                  />
                </>
              )}
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              {loadingWebsite ? (
                <Skeleton variant="rectangular" width="100%" height={200} />
              ) : (
                <FAQSection faqItems={faqs} lang={lang} />
              )}
            </Grid>
          </Grid>
        </Container>
      )}

      <Footer />
    </Box>
  );
};

export default Home;

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
import ImageCard from "../../components/ImageCard";
import FAQSection from "../../components/FAQSection";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";
import { useAppData } from "../../../context/AppDataProvider";

const Home = () => {
  const { website, loadingWebsite } = useAppData();
  const lang = useLocale();
  const t = useTranslations("home");

  const rawData = website?.data || {};
  const websiteData = rawData?.response || [];
  const statisticsList = rawData.statistics || [];
  const faqs = rawData.faq || [];

  const getSingleByTitle = (title) =>
    websiteData.find((item) => item.title === title);

  const homeSectionA = rawData?.hero?.[0];
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
            text: lang === "mn" ? sec.mndescription : sec.endescription,
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
            : `url(${homeSectionA?.image_url})`,
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
              <Skeleton
                width="80%"
                height="3.75rem"
                sx={{ bgcolor: "grey.700" }}
              />
              <Skeleton width="60%" height="2.5rem" sx={{ mt: "0.5rem" }} />
            </>
          ) : (
            <>
              <Box
                sx={{
                  gap: "3.75rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color="common.white"
                  gutterBottom
                  sx={{
                    fontSize: {
                      xs: "1.75rem",
                      sm: "2.25rem",
                      md: "3rem",
                      lg: "3.5rem",
                    },
                  }}
                >
                  {lang === "mn"
                    ? homeSectionA?.mntitle
                    : homeSectionA?.entitle}
                </Typography>
                <Typography
                  variant="h5"
                  color="common.white"
                  mb="1rem"
                  sx={{
                    fontSize: {
                      xs: "0.75rem",
                      sm: "1rem",
                      md: "1.25rem",
                      lg: "1.75rem",
                    },
                    px: {
                      xs: "3rem",
                      sm: "6rem",
                      md: "8rem",
                      lg: "12rem",
                    },
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
                        py: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
                        px: { xs: "2rem", sm: "3rem", md: "4rem" },
                        borderRadius: "0.75rem",
                        background: "white",
                        color: "black",
                        fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                        width: { xs: "auto" },
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
                        py: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
                        px: { xs: "2rem", sm: "3rem", md: "4rem" },
                        color: "white",
                        borderColor: "white",
                        borderRadius: "0.75rem",
                        fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                        width: { xs: "auto" },
                      }}
                    >
                      {t("ourHistory")}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </>
          )}
        </Container>
      </Box>

      <Container>
        {loadingWebsite ? (
          <Skeleton variant="rectangular" width="100%" height="25rem" />
        ) : (
          <SplitSection sections={[splitSections[1]]} reverse={true} />
        )}
      </Container>

      <Container maxWidth="lg" sx={{ py: "2rem" }}>
        {loadingWebsite ? (
          <Grid container spacing={2}>
            {Array.from(new Array(3)).map((_, index) => (
              <Grid size={{ xs: 12, sm: 4 }} key={index}>
                <Skeleton variant="rectangular" width="100%" height="12.5rem" />
                <Skeleton width="80%" sx={{ mt: "0.5rem" }} />
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
                      lang === "mn" ? item.mndescription : item.endescription
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
                      sx={{
                        borderColor: "#8B4513",
                        borderRightWidth: "0.0625rem",
                      }}
                    />
                  </Grid>
                )}
              </React.Fragment>
            ))}
          </Grid>
        )}
      </Container>

      <Container>
        {loadingWebsite ? (
          <Skeleton variant="rectangular" width="100%" height="25rem" />
        ) : (
          <SplitSection sections={[splitSections[0]]} reverse={false} />
        )}
      </Container>

      <Container sx={{ py: "2rem" }}>
        {loadingWebsite ? (
          <Skeleton variant="rectangular" width="100%" height="18.75rem" />
        ) : (
          <ProductImageList sections={homeSectionB} lang={lang} />
        )}
      </Container>

      {herderSection && (
        <Container sx={{ py: "2rem" }}>
          {loadingWebsite ? (
            <Skeleton variant="rectangular" width="100%" height="25rem" />
          ) : (
            <>
              <Typography variant="h4" fontWeight={700} mb="1rem">
                {lang === "mn" ? herderSection.mntitle : herderSection.entitle}
              </Typography>
              <Box
                component="img"
                src={herderSection.image_url1}
                alt="supply image"
                sx={{ width: "100%", borderRadius: "0.125rem" }}
              />
            </>
          )}
        </Container>
      )}

      <Container sx={{ py: "2rem" }}>
        {loadingWebsite ? (
          <Skeleton variant="rectangular" width="100%" height="18.75rem" />
        ) : (
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box component="ul">
                <Typography
                  variant="h4"
                  fontWeight={700}
                  mb="1rem"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                  }}
                >
                  {loadingWebsite
                    ? "..."
                    : lang === "mn"
                    ? statisticsSection?.mntitle
                    : statisticsSection?.entitle}
                </Typography>
                <Typography
                  sx={{
                    pl: "0.75rem",
                    fontSize: "1rem",
                    lineHeight: 2,
                    listStyleType: "disc",
                    m: 0,
                    color: "text.secondary",
                  }}
                >
                  {statisticsList.map((item) => (
                    <li key={item.id}>
                      {lang === "mn" ? item.mongolia : item.english}
                    </li>
                  ))}
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ImageCard src={statisticsSection?.image_url1} />
            </Grid>
          </Grid>
        )}
      </Container>

      {endSection && (
        <Container sx={{ py: "2rem" }}>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              {loadingWebsite ? (
                <Skeleton variant="rectangular" width="100%" height="12.5rem" />
              ) : (
                <>
                  <Typography variant="h4" fontWeight={700} mb="0.5rem">
                    {lang === "mn" ? endSection.mntitle : endSection.entitle}
                  </Typography>
                  <Box
                    component="img"
                    src={endSection.image_url1}
                    alt="end-section"
                    sx={{ width: "100%", borderRadius: "0.125rem" }}
                  />
                </>
              )}
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              {loadingWebsite ? (
                <Skeleton variant="rectangular" width="100%" height="12.5rem" />
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

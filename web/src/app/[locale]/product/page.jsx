"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box, Container, Typography, Grid, Skeleton } from "@mui/material";
import { useTranslations, useLocale } from "next-intl";
import { useAppData } from "../../../context/AppDataProvider";
import TradeSection from "../../components/TradeSection";
import SplitSection from "../../components/SplitSection";

const Product = () => {
  const { product, loading } = useAppData();
  const t = useTranslations("product");
  const lang = useLocale();
  const [selectedId, setSelectedId] = useState(3);

  const renderSplitSkeleton = () => (
    <Container sx={{ py: "2.5rem" }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Skeleton variant="text" height={40} width="80%" sx={{ mb: 2 }} />
          <Skeleton variant="text" height={30} width="100%" />
          <Skeleton variant="text" height={30} width="100%" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Skeleton variant="rectangular" height={300} />
        </Grid>
      </Grid>
    </Container>
  );

  const renderTradeSkeleton = () => (
    <Container sx={{ py: "2.5rem" }}>
      <Skeleton variant="text" width="40%" height={40} sx={{ mb: 2 }} />
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Skeleton variant="rectangular" width="100%" height={250} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Skeleton variant="text" height={30} width="100%" sx={{ mb: 2 }} />
          <Skeleton variant="text" height={30} width="100%" />
          <Skeleton variant="text" height={30} width="80%" />
        </Grid>
      </Grid>
    </Container>
  );

  if (loading || !product || !product.data?.response?.length) {
    return (
      <Box sx={{ bgcolor: "background.default" }}>
        <Header />
        <Box
          sx={{
            width: "100%",
            height: "20rem",
            backgroundColor: "#f0f0f0",
            position: "relative",
          }}
        >
          <Skeleton variant="rectangular" width="100%" height="100%" />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              px: 2,
            }}
          >
            <Container
              maxWidth="sm"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Skeleton variant="text" width="80%" height={40} sx={{ mb: 2 }} />
              <Skeleton variant="text" width="60%" height={30} />
            </Container>
          </Box>
        </Box>

        {renderSplitSkeleton()}
        {renderSplitSkeleton()}
        {renderTradeSkeleton()}
        {renderSplitSkeleton()}

        <Footer />
      </Box>
    );
  }

  const data = product?.data;
  const banner = data?.hero.find((item) => item.id === 2);
  const splitSections = data?.response
    .filter((item) => item.id !== 3 && item.id !== 4)
    .map((sec) => ({
      img: [
        sec.image_url1,
        sec.image_url2,
        sec.image_url3,
        sec.image_url4,
      ].filter(Boolean),
      title: lang === "mn" ? sec.mntitle : sec.entitle,
      text: lang === "mn" ? sec.mndescription : sec.endescription,
    }));

  const selectedTrade =
    selectedId === 3 || selectedId === 4
      ? data?.response?.find((item) => item.id === selectedId)
      : null;

  const tradeMapped = {
    title: lang === "mn" ? selectedTrade?.mntitle : selectedTrade?.entitle,
    description:
      lang === "mn"
        ? selectedTrade?.mndescription
        : selectedTrade?.endescription,
    image: selectedTrade?.image_url1,
  };

  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <Header />

      <Box
        sx={{
          width: "100%",
          height: { xs: "20rem" },
          backgroundImage: `url(${banner?.image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
        />
        <Box
          sx={{
            minHeight: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "black",
            px: 4,
            mt: 10,
            position: "absolute",
            zIndex: 1,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "1.75rem",
                  md: "2rem",
                  color: "white",
                },
                fontWeight: "bold",
              }}
            >
              {lang === "mn" ? banner?.mntitle : banner?.entitle}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                fontSize: {
                  xs: "0.8rem",
                  md: "1rem",
                  lg: "1.2rem",
                  color: "white",
                },
              }}
            >
              {lang === "mn" ? banner?.mnsubtitle : banner?.ensubtitle}
            </Typography>
          </Container>
        </Box>
      </Box>

      <Container>
        <SplitSection sections={[splitSections[0]]} reverse={true} />
      </Container>
      <Container>
        <SplitSection sections={[splitSections[1]]} reverse={false} />
      </Container>

      <Container sx={{ py: "2.5rem" }}>
        <Box mb="2.5rem">
          <TradeSection
            title={tradeMapped.title}
            image={tradeMapped.image}
            description={tradeMapped.description}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </Box>
      </Container>

      <Container>
        <SplitSection sections={[splitSections[2]]} reverse={false} />
      </Container>

      <Footer />
    </Box>
  );
};

export default Product;

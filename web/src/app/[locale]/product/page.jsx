"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Skeleton,
} from "@mui/material";
import { useTranslations, useLocale } from "next-intl";
import { useAppData } from "../../../context/AppDataProvider";
import TradeSection from "../../components/TradeSection";

const Product = () => {
  const { product, loading } = useAppData();
  const t = useTranslations("product");
  const lang = useLocale();
  const [selectedId, setSelectedId] = useState(2);

  if (loading || !product || !product.data?.length) {
    return (
      <Box sx={{ bgcolor: "background.default" }}>
        <Header />
        <Box
          sx={{
            width: "100%",
            height: { xs: "18.75rem", sm: "80vh" },
            backgroundColor: "#f0f0f0",
          }}
        >
          <Skeleton variant="rectangular" width="100%" height="100%" />
        </Box>
        <Container sx={{ py: "2.5rem" }}>
          <Skeleton variant="text" width="60%" height={40} />
          <Skeleton variant="text" width="80%" height={25} sx={{ mt: 2 }} />
          <Grid container spacing={1} mt={3} mb={3}>
            <Grid>
              <Skeleton
                variant="rectangular"
                width={120}
                height={40}
                sx={{ borderRadius: 1 }}
              />
            </Grid>
            <Grid>
              <Skeleton
                variant="rectangular"
                width={150}
                height={40}
                sx={{ borderRadius: 1 }}
              />
            </Grid>
          </Grid>
          <Box>
            <Skeleton variant="rectangular" width="100%" height={300} />
            <Skeleton variant="text" width="100%" height={40} sx={{ mt: 2 }} />
            <Skeleton variant="text" width="100%" height={40} />
          </Box>
        </Container>
        <Footer />
      </Box>
    );
  }

  const data = product.data;
  const banner = data.find((item) => item.id === 1);
  const selectedTrade = data.find((item) => item.id === selectedId);

  const tradeMapped = {
    title: lang === "mn" ? selectedTrade?.mntitle : selectedTrade?.entitle,
    description:
      lang === "mn"
        ? selectedTrade?.mndescription
        : selectedTrade?.endescription,
    image: selectedTrade?.image_url,
  };

  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <Header />
      <Box
        sx={{
          width: "100%",
          height: { xs: "18.75rem", sm: "80vh" },
          backgroundImage: `url(${banner?.image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "0.625rem",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
            color: "white",
          }}
        >
          {lang === "mn" ? banner?.mntitle : banner?.entitle}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "0.75rem", md: "1rem", lg: "1.25rem" },
            color: "white",
          }}
        >
          {lang === "mn" ? banner?.mndescription : banner?.endescription}
        </Typography>
      </Box>

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

      <Footer />
    </Box>
  );
};

export default Product;

"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TradeSection from "../../components/TradeSection";
import { GlobeIcon, HomeHashtagIcon } from "../../components/Icon";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  CircularProgress,
} from "@mui/material";
import { useTranslations, useLocale } from "next-intl";
import { useAppData } from "../../../context/AppDataProvider";

const Product = () => {
  const { product, loading } = useAppData();
  const [selectedId, setSelectedId] = useState(2);

  const t = useTranslations("product");
  const lang = useLocale();

  if (loading || !product || !product.data?.length) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
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
    <Box sx={{ overflow: "hidden", backgroundColor: "white" }}>
      <Header />

      <Box
        sx={{
          width: "100%",
          height: { xs: 300, sm: "80vh" },
          backgroundImage: `url(${banner?.image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      />

      <Container sx={{ py: 10 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          mb={6}
          sx={{
            fontSize: { xs: "24px", sm: "28px", md: "32px" },
            color: "black",
          }}
        >
          {lang === "mn" ? banner?.mntitle : banner?.entitle}
        </Typography>

        <Grid container spacing={2} mb={6}>
          <Grid>
            <Button
              variant={selectedId === 2 ? "contained" : "outlined"}
              onClick={() => setSelectedId(2)}
              sx={{
                backgroundColor: selectedId === 2 ? "#6E1221" : "transparent",
                color: selectedId === 2 ? "#fff" : "#6E1221",
                border: selectedId === 2 ? "none" : "2px solid #6E1221",
                display: "flex",
                alignItems: "start",
                gap: 1,
                px: 2,
              }}
            >
              <HomeHashtagIcon color={selectedId === 2 ? "#fff" : "#4a0d17"} />
              {t("domestic")}
            </Button>
          </Grid>

          <Grid>
            <Button
              variant={selectedId === 3 ? "contained" : "outlined"}
              onClick={() => setSelectedId(3)}
              sx={{
                backgroundColor: selectedId === 3 ? "#6E1221" : "transparent",
                color: selectedId === 3 ? "#fff" : "#6E1221",
                border: selectedId === 3 ? "none" : "2px solid #6E1221",
                display: "flex",
                alignItems: "start",
                gap: 1,
                px: 2,
              }}
            >
              <GlobeIcon color={selectedId === 3 ? "#fff" : "#4a0d17"} />
              {t("international")}
            </Button>
          </Grid>
        </Grid>

        <Box mb={10}>
          <TradeSection
            title={tradeMapped.title}
            image={tradeMapped.image}
            description={tradeMapped.description}
          />
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default Product;

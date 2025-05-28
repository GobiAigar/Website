"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CustomLoader from "../../components/Loading";
import TradeSection from "../../components/TradeSection";
import { GlobeIcon, HomeHashtagIcon } from "../../components/Icon";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
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
        <CustomLoader />
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
        }}
      />

      <Container sx={{ py: "2.5rem" }}>
        <Typography
          variant="h4"
          fontWeight={700}
          mb="1.5rem"
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
            color: "black",
          }}
        >
          {lang === "mn" ? banner?.mntitle : banner?.entitle}
        </Typography>
        <Typography
          variant="h6"
          mb="1.5rem"
          sx={{
            fontSize: { xs: "0.75rem", md: "1rem" },
            color: "#5C4B47",
          }}
        >
          {lang === "mn" ? banner?.mndescription : banner?.endescription}
        </Typography>

        <Grid container spacing="0.5rem" mb="1.5rem">
          <Grid>
            <Button
              variant={selectedId === 2 ? "contained" : "outlined"}
              onClick={() => setSelectedId(2)}
              sx={{
                backgroundColor: selectedId === 2 ? "#6E1221" : "transparent",
                color: selectedId === 2 ? "#fff" : "#6E1221",
                border: selectedId === 2 ? "none" : "0.125rem solid #6E1221",
                display: "flex",
                alignItems: "start",
                gap: "0.25rem",
                px: "0.5rem",
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
                border: selectedId === 3 ? "none" : "0.125rem solid #6E1221",
                display: "flex",
                alignItems: "start",
                gap: "0.25rem",
                px: "0.5rem",
              }}
            >
              <GlobeIcon color={selectedId === 3 ? "#fff" : "#4a0d17"} />
              {t("international")}
            </Button>
          </Grid>
        </Grid>

        <Box mb="2.5rem">
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

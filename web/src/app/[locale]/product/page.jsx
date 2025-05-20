"use client";
import React, { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button, Box, Container, Typography, Grid } from "@mui/material";
import TradeSection from "../../components/TradeSection";
import { GlobeIcon, HomeHashtagIcon } from "../../components/Icon";
import { useTranslations } from "next-intl";

const tradeData = [
  {
    title: "Domestic Trade",
    image: "/domestic.png",
    description: "Product prices for domestic sales are listed in US dollars.",
    list: [
      {
        text: "The exchange rate between USD and MNT will be based on the official rate announced by the Bank of Mongolia on the date of payment, and payment must be made via bank transfer only.",
      },
      {
        text: "Buyers can choose between two types of cooperation:",
        subList: [
          "Supplying their own raw cashmere for sorting, washing, and dehairing (initial processing).",
          "Purchasing dehaired cashmere that is already available in the company’s warehouse.",
        ],
      },
      {
        text: "In both cooperation models, payment terms must be mutually agreed upon and formalized in a contract.",
      },
      {
        text: "Except where otherwise stated in the purchase agreement, the supplier will not cover domestic transportation costs.",
      },
      {
        text: "The supplier guarantees that all dehaired cashmere delivered will fully comply with the technical requirements outlined in MNS 3683:2015.",
      },
      {
        text: "The buyer may request a quality inspection sample to be tested at the supplier’s in-house laboratory. If desired, the buyer may also request third-party certified analysis to verify product quality.",
      },
    ],
  },
  {
    title: "International trade",
    image: "/international.png",
    description: "Product prices for domestic sales are listed in US dollars.",
    list: [
      {
        text: "The prices of products sold in foreign markets are quoted in US dollars, and payments must be made exclusively in US dollars through the international SWIFT banking system.",
      },
      {
        text: "In all cases, preliminary price offers are subject to change depending on the current market price of raw materials.",
      },
      {
        text: "Export sales are conducted under the FCA-Ulaanbaatar Incoterm, meaning the supplier covers all relevant costs up to the Mongolian border. This includes pressing costs to reduce package volume, export and import documentation fees, etc.",
      },
      {
        text: "Clients may either:",
        subList: [
          "Supply their own raw cashmere for initial processing — sorting, washing, and dehairing,",
          "Or purchase dehaired cashmere already available in the company’s warehouse, and agree on a delivery timeline for production.",
        ],
      },
      {
        text: "For either collaboration method, payment terms must be mutually agreed upon and specified in a formal contract between the supplier and the buyer.",
      },
      {
        text: "Clients may arrange transportation using their preferred logistics company, or use the supplier's contracted freight service with available discounts.",
      },
      {
        text: "The supplier guarantees that the dehaired cashmere will fully comply with the technical requirements outlined in MNS 3683:2015.",
      },
      {
        text: "Product samples purchased by the client will be tested in the company’s in-house laboratory. Upon request, third-party accredited organizations can also conduct sample testing to confirm product quality standards.",
      },
    ],
  },
];

const Product = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const t = useTranslations("product");

  const selectedTradeData = tradeData[activeIndex];
  return (
    <Box sx={{ overflow: "hidden", backgroundColor: "white" }}>
      <Header />

      <Box
        sx={{
          width: "100%",
          height: { xs: 300, sm: "80vh" },
          backgroundImage: "url('/product.png')",
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
          {t("title")}
        </Typography>

        <Grid container spacing={2} mb={6}>
          <Grid>
            <Button
              variant={activeIndex === 0 ? "contained" : "outlined"}
              onClick={() => setActiveIndex(0)}
              sx={{
                backgroundColor: activeIndex === 0 ? "#6E1221" : "transparent",
                color: activeIndex === 0 ? "#fff" : "#6E1221",
                border: activeIndex === 0 ? "none" : "2px solid #6E1221",
                display: "flex",
                alignItems: "start",
                gap: 1,
                px: 2,
                "&:hover": {
                  backgroundColor:
                    activeIndex === 0 ? "#4a0d17" : "rgba(78,18,33,0.05)",
                },
              }}
            >
              <HomeHashtagIcon color={activeIndex === 0 ? "#fff" : "#4a0d17"} />
              {t("domestic")}
            </Button>
          </Grid>

          <Grid>
            <Button
              variant={activeIndex === 1 ? "contained" : "outlined"}
              onClick={() => setActiveIndex(1)}
              sx={{
                backgroundColor: activeIndex === 1 ? "#6E1221" : "transparent",
                color: activeIndex === 1 ? "#fff" : "#6E1221",
                border: activeIndex === 1 ? "none" : "2px solid #6E1221",
                display: "flex",
                alignItems: "start",
                gap: 1,
                px: 2,
                "&:hover": {
                  backgroundColor:
                    activeIndex === 1 ? "#4a0d17" : "rgba(78,18,33,0.05)",
                },
              }}
            >
              <GlobeIcon color={activeIndex === 1 ? "#fff" : "#4a0d17"} />
              {t("international")}
            </Button>
          </Grid>
        </Grid>

        <Box mb={10}>
          <TradeSection
            title={selectedTradeData.title}
            image={selectedTradeData.image}
            description={selectedTradeData.description}
            list={selectedTradeData.list}
          />
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default Product;

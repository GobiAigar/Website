"use client";

import { Box, Container, Typography, Grid, Skeleton } from "@mui/material";
import { useLocale } from "next-intl";
import { useAppData } from "../../../context/AppDataProvider";
import MainSection from "../../components/Sections/MainSection";
import TradeSection from "../../components/Sections/TradeSection";
import PageHeaderNarrow from "../../components/keyComponents/PageHeaderNarrow";

const Product = () => {
  const { product, loadingWebsite } = useAppData();
  const lang = useLocale();
  const data = product?.data;
  const banner = data?.hero.find((item) => item.id === 2);
  const tradeDatas = [data?.response[2], data?.response[3]];

  if (loadingWebsite) {
    return (
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <Container
          sx={{
            position: "relative",
            textAlign: "center",
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Skeleton variant="rectangular" color="#333" />
        </Container>
      </Box>
    );
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
      <PageHeaderNarrow data={banner} />
      <Box>
        <MainSection datas={data?.response[0]} reverse={false} />
      </Box>
      <Box backgroundColor="#E8DFD9">
        <MainSection datas={data?.response[1]} reverse={true} />
      </Box>
      <Box
        sx={{
          padding: { xs: 3, sm: 4, md: 8 },
        }}
      >
        <TradeSection datas={tradeDatas} />
      </Box>
      <Box backgroundColor="#E8DFD9">
        <MainSection datas={data?.response[4]} reverse={true} />
      </Box>
    </Box>
  );
};

export default Product;

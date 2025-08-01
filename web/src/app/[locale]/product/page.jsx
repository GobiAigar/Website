"use client";

import { Box, Container, Skeleton, Divider } from "@mui/material";
import { useAppData } from "../../../context/AppDataProvider";
import MainSection from "../../components/Sections/MainSection";
import TradeSection from "../../components/Sections/TradeSection";
import PageHeaderNarrow from "../../components/keyComponents/PageHeaderNarrow";

const Product = () => {
  const { product, loadingWebsite } = useAppData();
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
      <MainSection datas={data?.response[0]} />
      <Divider />
      <MainSection datas={data?.response[1]} />
      <Divider />
      <TradeSection datas={tradeDatas} />
      <Divider />
      <MainSection datas={data?.response[4]} />
    </Box>
  );
};

export default Product;

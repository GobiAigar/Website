"use client";

import { Box, Container, Typography, Grid, Skeleton } from "@mui/material";
import { useLocale } from "next-intl";
import { useAppData } from "../../../context/AppDataProvider";
import MainSection from "../../components/Sections/MainSection";
import TradeSection from "../../components/Sections/TradeSection";

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
          gap: 8,
        }}
      >
        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
        />
        <Box
          sx={{
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

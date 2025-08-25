"use client";

import { Box } from "@mui/material";
import { useAppData } from "../../../context/AppDataProvider";
import TradeSection from "../../components/Sections/TradeSection";
import PageHeaderNarrow from "../../components/keyComponents/PageHeaderNarrow";
import Loading from "../../components/keyComponents/Loading";
import ProductImageSection from "./_ProductImageSection";
import ProductMainSection from "./_ProductMainSection";

const Product = () => {
  const { product, loadingWebsite } = useAppData();
  const data = product?.data;
  const banner = data?.hero.find((item) => item.id === 2);
  const tradeDatas = [data?.response[2], data?.response[3]];

  if (loadingWebsite) {
    return <Loading />;
  }

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        top: 64,
      }}
    >
      <PageHeaderNarrow data={banner} />
      <Box
        sx={{
          backgroundImage: "url('/background.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <ProductMainSection data={data?.response[0]} />
        <ProductImageSection data={data?.response[0]} />
        <ProductMainSection data={data?.response[1]} />
        <ProductImageSection data={data?.response[1]} />
        <TradeSection datas={tradeDatas} />
      </Box>
    </Box>
  );
};

export default Product;

"use client";

import { Box } from "@mui/material";
import { useAppData } from "../../../context/AppDataProvider";
import MainSection from "../../components/Sections/MainSection";
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
      }}
    >
      <PageHeaderNarrow data={banner} />
      <ProductMainSection data={data?.response[0]} />
      <ProductImageSection data={data?.response[1]} />
      <ProductMainSection data={data?.response[4]} />
      <ProductImageSection data={data?.response[1]} />
      <TradeSection datas={tradeDatas} />
    </Box>
  );
};

export default Product;

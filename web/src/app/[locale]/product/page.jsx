"use client";

import { Box } from "@mui/material";
import { useAppData } from "../../../context/AppDataProvider";
import TradeSection from "../../components/Sections/TradeSection";
import PageHeaderNarrow from "../../components/keyComponents/PageHeaderNarrow";
import Loading from "../../components/keyComponents/Loading";
import ProductMainSection from "./_ProductMainSection";
import ProductInspection from "./_ProductInspection";
import OurFactory from "./_OurFactory";

const Product = () => {
  const { product, loadingWebsite } = useAppData();

  const data = product?.data;

  const detials = [
    data?.response[4],
    data?.response[5],
    data?.response[6],
    data?.response[7],
  ];

  const banner = data?.hero.find((item) => item.id === 2);
  const tradeDatas = [data?.response[8], data?.response[9]];

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
        <OurFactory data={data?.response[1]} datas={data?.response[2]} />
        <ProductInspection data={data?.response[3]} detials={detials} />
        <TradeSection datas={tradeDatas} />
      </Box>
    </Box>
  );
};

export default Product;

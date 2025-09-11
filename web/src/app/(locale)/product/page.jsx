"use client";

import { Box } from "@mui/material";
import { useAppData } from "../../../context/AppDataProvider";
import TradeSection from "../../components/Sections/TradeSection";
import PageHeaderNarrow from "../../components/keyComponents/PageHeaderNarrow";
import ProductMainSection from "./_ProductMainSection";
import ProductInspection from "./_ProductInspection";
import OurFactory from "./_OurFactory";
import ProductSkeleton from "./_ProductSkelton";

const Product = () => {
  const { product, loadingAll } = useAppData();

  const data = product?.data;

  const detials = [
    data?.response.rows[4],
    data?.response.rows[5],
    data?.response.rows[6],
    data?.response.rows[7],
  ];

  const banner = data?.hero.rows.find((item) => item.id === 2);
  const tradeDatas = [data?.response.rows[8], data?.response.rows[9]];

  const manufacture = [];
  manufacture.push(data?.response.rows[1]);
  manufacture.push(data?.response.rows[2]);

  if (loadingAll) {
    return <ProductSkeleton />;
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
        <ProductMainSection data={data?.response.rows[0]} />
        <OurFactory data={manufacture} />
        <ProductInspection data={data?.response.rows[3]} detials={detials} />
        <TradeSection datas={tradeDatas} />
      </Box>
    </Box>
  );
};

export default Product;

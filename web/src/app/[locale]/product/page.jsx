"use client";

import { Box, Container, Skeleton, Divider } from "@mui/material";
import { useAppData } from "../../../context/AppDataProvider";
import MainSection from "../../components/Sections/MainSection";
import TradeSection from "../../components/Sections/TradeSection";
import PageHeaderNarrow from "../../components/keyComponents/PageHeaderNarrow";
import Loading from "../../components/keyComponents/Loading";

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
      <MainSection datas={data?.response[0]} />
      {data?.response[0] && <Divider />}
      <MainSection datas={data?.response[1]} />
      {data?.response[2] && <Divider />}
      <TradeSection datas={tradeDatas} />
      {data?.response[4] && <Divider />}
      <MainSection datas={data?.response[4]} />
    </Box>
  );
};

export default Product;

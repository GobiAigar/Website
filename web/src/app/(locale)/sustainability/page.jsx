"use client";

import { useAppData } from "../../../context/AppDataProvider";
import { Box } from "@mui/material";
import Test from "./_Test";
import PageHeaderNarrow from "../../components/keyComponents/PageHeaderNarrow";
import SustainabilitySkeleton from "./_SustainabilitySkeleton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sustainability = () => {
  const { sustainability, loadingAll } = useAppData();

  if (loadingAll) {
    return <SustainabilitySkeleton />;
  }
  const data = sustainability || {};
  const mainInfo = data?.hero;
  const sustainabilityText = sustainability?.response.title || [];
  const certificates = data?.response?.certificates || [];

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        top: 64,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PageHeaderNarrow data={mainInfo} />

      <Test
        sustainabilityText={sustainabilityText}
        certificates={certificates}
      />
    </Box>
  );
};

export default Sustainability;

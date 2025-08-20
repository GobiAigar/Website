"use client";

import { useAppData } from "../../../context/AppDataProvider";
import { Box } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Test from "./Test";
import CerficateSection from "../../components/Sections/CerficateSection";
import PageHeaderNarrow from "../../components/keyComponents/PageHeaderNarrow";
import Loading from "../../components/keyComponents/Loading";

const Sustainability = () => {
  const { sustainability, loadingWebsite } = useAppData();

  if (loadingWebsite) {
    return <Loading />;
  }

  const data = sustainability || {};
  const mainInfo = data?.hero?.[0];
  const sustainabilityText = sustainability?.response?.title?.[0];
  const certificates = data?.response?.cerficates || [];

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PageHeaderNarrow data={mainInfo} />
      <Test sustainabilityText={sustainabilityText} />
      <Box>
        {certificates.map((data, index) => (
          <Box key={data?.id}>
            <CerficateSection data={data} index={index} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sustainability;

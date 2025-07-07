"use client";

import React, { useEffect, useState } from "react";

import {
  Box,
  Container,
  Typography,
  Grid,
  Skeleton,
  Dialog,
  IconButton,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useAppData } from "../../../context/AppDataProvider";
import Test from "./Test";
import TestHeader from "./TestHeader";
import CerficateSection from "../../components/Sections/CerficateSection";

const Sustainability = () => {
  const { sustainability, loading: rawLoading } = useAppData();
  const t = useTranslations("sustainability");
  const lang = useLocale();

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
      <TestHeader mainInfo={mainInfo} />
      <Test sustainabilityText={sustainabilityText} />
      {certificates.map((data, index) => {
        return (
          <Box
            sx={{ width: "100%", bgcolor: index % 2 ?? "grey.100" }}
            key={data?.id}
          >
            <CerficateSection data={data} index={index} />
          </Box>
        );
      })}
    </Box>
  );
};

export default Sustainability;

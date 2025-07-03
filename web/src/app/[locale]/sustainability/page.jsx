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
  const lang = useLocale();
  const t = useTranslations("sustainability");

  const [loading, setLoading] = useState(true);
  const [openImage, setOpenImage] = useState(null);

  useEffect(() => {
    if (rawLoading) {
      setLoading(true);
    } else {
      const timer = setTimeout(() => setLoading(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [rawLoading]);

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
            sx={{ width: "100%", bgcolor: index % 2 ? "grey.100" : "grey.200" }}
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

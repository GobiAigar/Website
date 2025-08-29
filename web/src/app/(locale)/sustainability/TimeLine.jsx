"use client";

import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CerficateDialog from "../../components/Card/CerficateDialog";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function TimeLine({ datas }) {
  const t = useTranslations("sustainability");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [currentIndex, setCurrentIndex] = useState(0);

  const getItemsToShow = () => {
    if (isMobile) return 3;
    if (isTablet) return 4;
    return 5;
  };

  return (
    <Container
      sx={{
        paddingY: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography variant="h4">{t("ourHistory")}</Typography>
        <Box
          sx={{
            gap: 2,
            width: 800,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {datas.map((data) => {
            return <CerficateDialog data={data} />;
          })}
        </Box>
      </Box>
    </Container>
  );
}

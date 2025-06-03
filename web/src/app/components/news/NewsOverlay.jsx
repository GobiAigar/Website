"use client";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const NewsOverlay = () => {
  const t = useTranslations("news");
  return (
    <Box
      className="hoverOverlay"
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bgcolor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0,
        transform: "translateY(100%)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        zIndex: 1,
        pointerEvents: "none",
        willChange: "opacity, transform",
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        sx={{ p: 5, textAlign: "center" }}
      >
        {t("clickSeeMore")}
      </Typography>
    </Box>
  );
};
export default NewsOverlay;

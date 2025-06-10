import * as React from "react";
import { ImageList, ImageListItem, Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function ProductImageList({ sections, lang = "en", gap = 1 }) {
  const t = useTranslations("home");
  const cols = 4;

  const safeSections = sections || {};

  const itemData = [
    safeSections.image_url1,
    safeSections.image_url2,
    safeSections.image_url3,
    safeSections.image_url4,
  ].filter(Boolean);

  const labels = [t("White"), t("Beige"), t("GreyBlue"), t("DarkGrey")];

  const commonTitle =
    lang === "mn" ? safeSections.mntitle : safeSections.entitle;

  return (
    <Box sx={{ width: "100%" }}>
      {commonTitle && (
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            textAlign: "center",
            fontWeight: 600,
            color: "text.primary",
          }}
        >
          {commonTitle}
        </Typography>
      )}

      <ImageList cols={cols} gap={gap} sx={{ width: "100%" }}>
        {itemData.map((img, index) => (
          <ImageListItem
            key={index}
            sx={{
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              "&:hover .overlay": {
                opacity: 1,
              },
            }}
          >
            <Box
              component="img"
              src={img}
              alt={labels[index] || ""}
              loading="lazy"
              sx={{
                width: "100%",
                aspectRatio: "4/3",
                objectFit: "cover",
                display: "block",
              }}
            />
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0,
                transition: "opacity 0.3s ease",
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
            >
              {labels[index]}
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

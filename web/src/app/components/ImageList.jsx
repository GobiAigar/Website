import * as React from "react";
import { ImageList, ImageListItem, Box, Typography } from "@mui/material";

export default function ProductImageList({ sections, lang = "en", gap = 1 }) {
  const cols = 4;

  const safeSections = sections || {};

  const itemData = [
    safeSections.image_url1,
    safeSections.image_url2,
    safeSections.image_url3,
    safeSections.image_url4,
  ].filter(Boolean);

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
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={img}
              alt=""
              loading="lazy"
              sx={{
                width: "100%",
                aspectRatio: "4/3",
                objectFit: "cover",
                display: "block",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

import * as React from "react";
import {
  ImageList,
  ImageListItem,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function ProductImageList({
  itemData = [],
  gap = 8,
  itemStyle = {},
}) {
  const theme = useTheme();

  // Breakpoint бүрийн зураг баганын тоо
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-900px
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); // 900-1200px
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl")); // 1200-1536px

  let cols = 1;
  if (isXs) cols = 4;
  else if (isSm) cols = 4;
  else if (isMd) cols = 4;
  else if (isLg) cols = 4;
  else cols = 4; // ≥1536px буюу 2K дэлгэцнүүд

  return (
    <ImageList cols={cols} gap={gap} sx={{ width: "100%" }}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          sx={{
            position: "relative",
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={item.img}
            alt={item.title}
            loading="lazy"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(0, 0, 0, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: 2,
              boxSizing: "border-box",
              textAlign: "center",
              ...itemStyle,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "common.white",
                textShadow: "0px 0px 4px rgba(0,0,0,0.7)",
                fontSize: isXs ? "12px" : itemStyle.fontSize || "20px",
                fontWeight: 600,
              }}
            >
              {item.title}
            </Typography>
          </Box>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

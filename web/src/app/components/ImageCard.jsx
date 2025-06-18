"use client";

import React from "react";
import { Box, Card, CardMedia } from "@mui/material";

const ImageCard = ({ src, alt = "Image", borderRadius = 2 }) => {
  return (
    <Box display="flex" justifyContent="center">
      <CardMedia
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: "100%",
          height: { md: "27.5rem", xs: "auto" },
          objectFit: "cover",
          borderRadius,
        }}
      />
    </Box>
  );
};

export default ImageCard;

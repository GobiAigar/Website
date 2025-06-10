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
          height: "37.5rem",
          objectFit: "cover",
          borderRadius,
        }}
      />
    </Box>
  );
};

export default ImageCard;

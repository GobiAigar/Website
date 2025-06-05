"use client";

import React from "react";
import { Box, Card, CardMedia } from "@mui/material";

const ImageCard = ({ src, alt = "Image", borderRadius = 2 }) => {
  return (
    <Box>
      <Card sx={{ width: "100%", height: "100%" }}>
        <CardMedia
          component="img"
          src={src}
          alt={alt}
          sx={{
            width: "37.5rem",
            height: "37.5rem",
            objectFit: "cover",
            borderRadius,
          }}
        />
      </Card>
    </Box>
  );
};

export default ImageCard;

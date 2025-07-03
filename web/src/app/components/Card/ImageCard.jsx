import React from "react";
import { Box, CardMedia } from "@mui/material";

const ImageCard = ({ data, fullHeight = false }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: fullHeight ? "100%" : "auto",
      }}
    >
      <CardMedia
        component="img"
        src={data}
        alt={data}
        sx={{
          padding: 0,
          width: "100%",
          height: fullHeight ? "100%" : "auto",
          objectFit: "cover",
          borderRadius: 2,
        }}
      />
    </Box>
  );
};

export default ImageCard;

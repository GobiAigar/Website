import React from "react";
import { Box, Typography, Avatar, useTheme } from "@mui/material";

const InfoCard = ({ imageSrc, title, description }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        px: { xs: 0, sm: 1, md: 2 },
        py: { xs: 2, sm: 3, md: 4 },
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          width: "100%",
          maxWidth: {
            xs: "100%",
            sm: 212,
            md: 270,
            lg: 329,
            xl: 380,
          },
          color: theme.palette.text.primary,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title || "Info image"}
            sx={{ width: 48, height: 48 }}
          />
        )}
        {title && (
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
        )}
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default InfoCard;

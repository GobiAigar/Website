import React from "react";
import { Box, Typography, Avatar, useTheme } from "@mui/material";

const InfoCard = ({ imageSrc, title, description }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        px: { xs: 2, md: 3 },
        py: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          maxWidth: 300,
          width: "100%",
          color: theme.palette.text.primary,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        {imageSrc && (
          <Avatar
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

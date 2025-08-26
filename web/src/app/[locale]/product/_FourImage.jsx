import { Box, Grid } from "@mui/material";
import React from "react";
import { useLocale } from "next-intl";

const FourImage = ({ data }) => {
  const lang = useLocale();
  const getImages = [
    data?.image_url1,
    data?.image_url2,
    data?.image_url3,
    data?.image_url4,
  ].filter(Boolean);

  return (
    <Grid
      container
      size={12}
      spacing={{ xs: 1 }}
      justifyContent="space-between"
    >
      {getImages.map((url, idx) => (
        <Grid
          key={idx}
          size={{
            xs: 6,
            sm: 6,
            md: 2.9,
            lg: 2.9,
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              "&:hover .overlay": {
                opacity: 1,
                transform: "translateY(0)",
              },
            }}
          >
            <Box
              component="img"
              src={url}
              alt={lang === "mn" ? data.mntitle : data.entitle}
              sx={{
                width: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default FourImage;

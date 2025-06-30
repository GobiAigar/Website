import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { useLocale } from "next-intl";
import Title from "../keyComponents/Title";
import Description from "../keyComponents/Description";

const BrandSection = ({ datas }) => {
  const lang = useLocale();
  const theme = useTheme();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {datas?.map((data) => {
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
              }}
            >
              <img
                src={data?.image_url1}
                alt={data?.title || "Info image"}
                sx={{ width: 48, height: 48 }}
              />

              <Title entitle={data?.entitle} mntitle={data?.mntitle} />

              <Description
                endescription={data?.endescription}
                mndescription={data?.mndescription}
              />
            </Box>
          </Box>
        );
      })}
    </Container>
  );
};

export default BrandSection;

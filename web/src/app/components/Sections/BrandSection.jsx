import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { useLocale } from "next-intl";
import Title from "../keyComponents/Title";
import FlagDescription from "../keyComponents/FlagDescription";

const BrandSection = ({ datas }) => {
  const lang = useLocale();
  const theme = useTheme();

  return (
    <Box paddingY={{ sx: 3, sm: 4, md: 5 }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },

          backgroundColor: "#",
        }}
      >
        {datas?.map((data) => {
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
              key={"brand" + data?.id}
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

                <FlagDescription
                  endescription={data?.endescription}
                  mndescription={data?.mndescription}
                  textAlign={"center"}
                />
              </Box>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};

export default BrandSection;

import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import { useLocale } from "next-intl";
import Title from "../keyComponents/Title";
import FlagDescription from "../keyComponents/FlagDescription";

const BrandSection = ({ datas }) => {
  const lang = useLocale();
  const theme = useTheme();

  return (
    <Box padding={{ xs: 4, sm: 3, md: 4 }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          backgroundColor: "#",
          gap: { xs: 2, sm: 3, md: 4 },
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
                  gap: { xs: 0.5, sm: 0.8, md: 1 },
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  src={data?.image_url1}
                  alt={data?.title || "Info image"}
                  sx={{ flexShrink: 0, width: "50px" }}
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

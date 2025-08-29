"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useLocale } from "next-intl";

const ProductImageSection = ({ data }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const lang = useLocale();

  return (
    <Box marginY={{ xs: "5rem", md: "10rem" }}>
      <Grid container size={12}>
        <Grid
          item
          size={{ xs: 12, md: 3 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { sx: "center", md: "end" },
          }}
        >
          <Box height={500} width={"100%"}>
            <img
              src={data?.image_url1}
              alt={`${data?.mntitle} Image`}
              loading="lazy"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>

        <Grid
          item
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { sx: "center", md: "start" },
          }}
        >
          <Box height={500} width={"100%"}>
            <img
              src={data?.image_url2}
              alt={`${data?.mntitle} Image`}
              loading="lazy"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductImageSection;

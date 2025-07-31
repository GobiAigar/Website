"use client";

import { Grid, Box, useMediaQuery, useTheme, Container } from "@mui/material";

import NewDescription from "./NewDescription";
import Title from "../keyComponents/Title";
import { useLocale } from "next-intl";

const NewMainSection = ({ data }) => {
  const lang = useLocale();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box minHeight={"inherit"} width="100%" padding={{ xs: 2, sm: 4, md: 6 }}>
      <Grid container spacing={2} alignItems="stretch" size={12}>
        {isMobile && <Title mntitle={data?.mntitle} entitle={data?.entitle} />}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box height="100%" minHeight="fit-content">
            <img
              src={`${data?.image_url1}`}
              alt="image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              loading="lazy"
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ md: "relative" }}>
          <Box
            sx={{
              position: { md: "sticky" },
              top: 80,
              zIndex: 10,
            }}
          >
            <NewDescription data={data} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewMainSection;

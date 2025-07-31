"use client";

import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";

import TextSide from "../keyComponents/TextSide";
import ImageSide from "../Card/ImageSideCard";

const MainSection = ({ datas, reverse }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const imageUrls = [
    datas?.image_url1,
    datas?.image_url2,
    datas?.image_url3,
    datas?.image_url4,
  ].filter(Boolean);

  return (
    <Box padding={{ xs: 2, sm: 4, md: 6 }} width="100%">
      <Grid
        container
        spacing={3}
        alignItems="flex-start"
        direction={reverse ? "row-reverse" : "row"}
        sx={{ md: "relative" }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <ImageSide data={imageUrls} />
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            position: { md: "sticky" },
            top: 64,
            zIndex: 10,
          }}
        >
          <TextSide
            mntitle={datas?.mntitle}
            entitle={datas?.entitle}
            endescription={datas?.endescription}
            mndescription={datas?.mndescription}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainSection;

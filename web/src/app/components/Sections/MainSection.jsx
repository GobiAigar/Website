"use client";

import { Container, Grid } from "@mui/material";

import TextSide from "../keyComponents/TextSide";
import ImageSide from "../Card/ImageSideCard";

const MainSection = ({ datas, reverse }) => {
  const imageUrls = [
    datas?.image_url1,
    datas?.image_url2,
    datas?.image_url3,
    datas?.image_url4,
  ].filter(Boolean);

  return (
    <Container
      sx={{
        padding: { xs: 3, sm: 4, md: 5 },
      }}
    >
      <Grid
        container
        spacing={3}
        alignItems="flex-start"
        direction={reverse ? "row-reverse" : "row"}
        sx={{ md: "relative" }}
      >
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
            reverse={reverse}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <ImageSide data={imageUrls} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainSection;

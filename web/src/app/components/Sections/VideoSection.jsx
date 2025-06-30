"use client";

import { Container, Grid } from "@mui/material";

import TextMain from "../keyComponents/TextMain";
import VideoSide from "../Card/VideoSideCard";
const VideoSection = ({ datas }) => {
  const imageUrls = [datas.image_url1].filter(Boolean);

  return (
    <Container>
      <Grid container spacing={3} alignItems="flex-start" marginY={4}>
        <Grid size={12}>
          <VideoSide data={imageUrls} />
        </Grid>
        <Grid
          size={12}
          sx={{
            top: 64,
            backgroundColor: "white",
            zIndex: 10,
            padding: 2,
          }}
        >
          <TextMain
            mntitle={datas.mntitle}
            entitle={datas.entitle}
            endescription={datas.endescription}
            mndescription={datas.mndescription}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default VideoSection;

"use client";

import { Box, Container, Grid } from "@mui/material";
import Description from "../keyComponents/Description";
import VideoSide from "../Card/VideoSideCard";
import Title from "../keyComponents/Title";

const VideoSection = ({ datas }) => {
  const imageUrls = [datas?.image_url1].filter(Boolean);

  return (
    <Container>
      <Box padding={{ xs: 2, sm: 4, md: 6 }} width="100%">
        <Grid container spacing={3} alignItems="center">
          <Grid
            size={12}
            sx={{
              top: 64,
              backgroundColor: "white",
              zIndex: 10,
            }}
          >
            <Box width={"80%"} textAlign={"center"} margin="auto">
              <Title
                mntitle={datas?.mntitle}
                entitle={datas?.entitle}
                textAlign={"center"}
              />
              <Description
                mndescription={datas?.mndescription}
                endescription={datas?.endescription}
                textAlign={"center"}
              />
            </Box>
          </Grid>
          <Grid size={12}>
            <VideoSide data={imageUrls} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default VideoSection;

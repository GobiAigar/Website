import { Box, Container, Grid } from "@mui/material";
import React from "react";
import NewTitle from "../newComponents/NewTitle";
import Description from "../keyComponents/Description";

const EndSection = ({ datas }) => {
  return (
    <Box
      sx={{
        marginTop: { xs: 4, md: 6 },
        height: "350px",
        position: "relative",
        backgroundImage: `url(${datas?.image_url1})`,
        backgroundColor: "#E8DFD9",
        backdropFilter: "blur(2px)",
        backgroundOrigin: "border-box",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12 }} color={"#fff"}>
              <NewTitle
                mntitle={datas?.mntitle}
                entitle={datas?.entitle}
                reverse={false}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default EndSection;

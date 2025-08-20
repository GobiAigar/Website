"use client";

import { Grid, Box, useMediaQuery, useTheme, Container } from "@mui/material";

import Title from "../keyComponents/Title";
import Description from "../keyComponents/Description";

const NewMainSection = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container>
      <Box height={"700px"} padding={{ xs: 2, sm: 4, md: 6 }}>
        <Grid container spacing={2} alignItems="stretch" size={12}>
          {isMobile && (
            <Title mntitle={data?.mntitle} entitle={data?.entitle} />
          )}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box height="100%" minHeight="fit-content">
              <img
                src={`${data?.image_url1}`}
                alt={`${data?.mntitle} Image`}
                style={{
                  width: "100%",
                  height: "400px",
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
              {!isMobile && (
                <Title mntitle={data?.mntitle} entitle={data?.entitle} />
              )}
              <Description
                mndescription={data?.mndescription}
                endescription={data?.endescription}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default NewMainSection;

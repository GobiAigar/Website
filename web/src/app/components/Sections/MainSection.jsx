"use client";

import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";

import TextSide from "../keyComponents/TextSide";
import ImageSide from "../Card/ImageSideCard";
import Title from "../keyComponents/Title";
import Description from "../keyComponents/Description";

const MainSection = ({ datas }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const imageUrls = [
    datas?.image_url1,
    datas?.image_url2,
    datas?.image_url3,
    datas?.image_url4,
  ].filter(Boolean);

  return (
    <Box padding={{ xs: 2, sm: 4, md: 6 }} width="100%">
      {isMobile && (
        <Box marginBottom={{ xs: "0.5rem", sm: "1.875rem", md: "2.5rem" }}>
          <Title mntitle={datas?.mntitle} entitle={datas?.entitle} />
        </Box>
      )}
      <Grid
        container
        spacing={3}
        alignItems="flex-start"
        sx={{ md: "relative" }}
      >
        {imageUrls.length > 0 && (
          <Grid size={{ xs: 12, md: 6 }}>
            <ImageSide data={imageUrls} />
          </Grid>
        )}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            position: { md: "sticky" },
            top: 64,
            zIndex: 10,
          }}
        >
          {imageUrls.length > 0 && (
            <TextSide
              mntitle={datas?.mntitle}
              entitle={datas?.entitle}
              endescription={datas?.endescription}
              mndescription={datas?.mndescription}
            />
          )}
        </Grid>

        {imageUrls.length == 0 && (
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              gap: 4,
            }}
          >
            {!isMobile && (
              <Grid size={{ xs: 12, sm: 6 }}>
                <Box width={"80%"}>
                  <Title mntitle={datas?.mntitle} entitle={datas?.entitle} />
                </Box>
              </Grid>
            )}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Description
                mndescription={datas?.mndescription}
                endescription={datas?.endescription}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default MainSection;

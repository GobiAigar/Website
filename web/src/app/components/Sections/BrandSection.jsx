"use client";
import { useState } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useLocale } from "next-intl";
import ImageSide from "../Card/ImageSideCard";
import Description from "../keyComponents/Description";
import Title from "../keyComponents/Title";

const BrandSection = ({ datas }) => {
  const lang = useLocale();
  const [selected, setSelected] = useState([
    datas[0]?.image_url1,
    datas[1]?.image_url1,
    datas[2]?.image_url1,
  ]);

  return (
    <Container>
      <Box padding={{ xs: 2, sm: 4, md: 6 }}>
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ md: "relative" }}
          justifyContent="space-between"
        >
          <Grid
            item
            size={{ xs: 12, sm: 3 }}
            display={"flex"}
            sx={{
              position: { md: "sticky" },
              top: 80,
              zIndex: 10,
            }}
          >
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Title mntitle={datas[0]?.mntitle} entitle={datas[0]?.entitle} />
              <Title mntitle={datas[1]?.mntitle} entitle={datas[1]?.entitle} />
              <Title mntitle={datas[2]?.mntitle} entitle={datas[2]?.entitle} />
            </Box>
          </Grid>
          <Divider orientation="vertical" flexItem />

          {/* Content Section */}
          <Grid container item size={{ xs: 12, sm: 8 }}>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Description
                mndescription={datas[0]?.mndescription}
                endescription={datas[0]?.endescription}
              />
              <Description
                mndescription={datas[1]?.mndescription}
                endescription={datas[1]?.endescription}
              />
              <Description
                mndescription={datas[2]?.mndescription}
                endescription={datas[2]?.endescription}
              />
            </Grid>

            {/* Image Section */}
            <Grid item size={{ xs: 12, sm: 6 }}>
              <ImageSide data={selected} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BrandSection;

"use client";
import { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslations } from "use-intl";
import { useLocale } from "next-intl";
import ImageSide from "../Card/ImageSideCard";

const BrandSection = ({ datas }) => {
  const t = useTranslations("home");
  const lang = useLocale();
  const [selected, setSelected] = useState([
    datas[0]?.image_url1,
    datas[1]?.image_url1,
    datas[2]?.image_url1,
  ]);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box padding={{ xs: 2, sm: 4, md: 6 }} width="100%">
      <Grid
        container
        spacing={4}
        alignItems="flex-start"
        flexDirection={{ xs: "column", sm: "row" }}
        width="100%"
        sx={{ md: "relative" }}
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
            <Typography
              variant="h2"
              fontSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem" }}
            >
              {t("brandSectionTitle")}
            </Typography>
            <Typography
              variant="h4"
              fontWeight="bold"
              fontSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem" }}
            >
              {lang === "mn" ? datas[0]?.mntitle : datas[0]?.entitle}
            </Typography>
            <Typography
              variant="h4"
              fontWeight="bold"
              fontSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem" }}
            >
              {lang === "mn" ? datas[1]?.mntitle : datas[1]?.entitle}
            </Typography>
            <Typography
              variant="h4"
              fontWeight="bold"
              fontSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem" }}
            >
              {lang === "mn" ? datas[2]?.mntitle : datas[2]?.entitle}
            </Typography>
          </Box>
        </Grid>
        <Divider orientation="vertical" flexItem />

        {/* Content Section */}
        <Grid container item size={{ xs: 8 }}>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <Box
              height={"100%"}
              display="flex"
              flexDirection="column"
              justifyContent={"flex-end"}
            >
              <Typography
                variant="body1"
                fontSize={{ xs: "1rem", sm: "1.125rem", md: "1.5rem" }}
              >
                {lang === "mn"
                  ? datas[0]?.mndescription
                  : datas[0]?.endescription}
              </Typography>
              <Typography
                variant="body1"
                fontSize={{ xs: "1rem", sm: "1.125rem", md: "1.5rem" }}
                marginY={{ xs: 2, sm: 4 }}
              >
                {lang === "mn"
                  ? datas[1]?.mndescription
                  : datas[1]?.endescription}
              </Typography>
              <Typography
                variant="body1"
                fontSize={{ xs: "1rem", sm: "1.125rem", md: "1.5rem" }}
              >
                {lang === "mn"
                  ? datas[2]?.mndescription
                  : datas[2]?.endescription}
              </Typography>
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item size={{ xs: 12, sm: 6 }}>
            <ImageSide data={selected} />
          </Grid>
        </Grid>
      </Grid>
    </Box>

    // <Box
    //   paddingX={{ xs: 2, sm: 4 }}
    //   paddingY={{ xs: 4, sm: 6 }}
    //   display={"flex"}
    //   alignItems="center"
    //   justifyContent={"space-between"}
    // >
    //   <BrandDetial datas={datas[0]} />
    //   <Divider
    //     orientation={isSmall ? "horizontal" : "vertical"}
    //     variant="middle"
    //     flexItem
    //   />
    //   <BrandDetial datas={datas[1]} />
    //   <Divider
    //     orientation={isSmall ? "horizontal" : "vertical"}
    //     variant="middle"
    //     flexItem
    //   />
    //   <BrandDetial datas={datas[2]} />
    // </Box>
  );
};

export default BrandSection;

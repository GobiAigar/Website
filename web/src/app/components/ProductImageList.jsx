import * as React from "react";
import { useLocale } from "next-intl";
import { Grid, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Description from "./keyComponents/Description";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Title from "./keyComponents/Title";

export default function ProductImageList({ sections = [] }) {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const lang = useLocale();

  if (isMobile) {
    return (
      <Swiper spaceBetween={10} slidesPerView={1.2} centeredSlides={true}>
        {sections.map((item, index) => (
          <SwiperSlide key={item.id || index}>
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={item.image_url1}
                alt={lang === "mn" ? item.mntitle : item.entitle}
                sx={{
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                  display: "block",
                  borderRadius: 1,
                }}
              />
              <Box sx={{ px: { xs: "0.5rem", md: "1rem" } }}>
                <Title entitle={item?.entitle} mntitle={item?.mntitle} />
                <Description
                  endescription={item?.endescription}
                  mndescription={item?.mndescription}
                />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  if (isTablet) {
    return (
      <Swiper spaceBetween={10} slidesPerView={1.5} centeredSlides={true}>
        {sections.map((item, index) => (
          <SwiperSlide key={item.id || index}>
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={item.image_url1}
                alt={lang === "mn" ? item.mntitle : item.entitle}
                sx={{
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                  display: "block",
                  borderRadius: 1,
                }}
              />
              <Box sx={{ px: { xs: "0.5rem", md: "1rem" } }}>
                <Title entitle={item?.entitle} mntitle={item?.mntitle} />
                <Description
                  endescription={item?.endescription}
                  mndescription={item?.mndescription}
                />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  // Desktop Grid
  return (
    <Grid
      container
      width="100%"
      spacing={{ xs: 2, sm: 0.5 }}
      justifyContent="space-between"
    >
      {sections.map((item, index) => (
        <Grid
          key={item.id || index}
          item
          width={"100%"}
          size={{
            xs: 12,
            sm: 6,
            md: 3,
            lg: 3,
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: 300 },
              overflow: "hidden",
              "&:hover .overlay": {
                opacity: 1,
                transform: "translateY(0)",
              },
            }}
          >
            <Box
              component="img"
              src={item.image_url1}
              alt={lang === "mn" ? item.mntitle : item.entitle}
              sx={{
                width: "100%",
                height: 300,
                objectFit: "cover",
                display: "block",
              }}
            />

            <Box
              className="overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "primary.main",
                background:
                  "linear-gradient(to bottom, rgba(245, 191, 3, 0) 0%, rgba(157, 122, 0, 0.7) 100%)",
                paddingX: "5px",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                opacity: 0,
                transition: "all 0.3s ease",
                transform: "translateY(100%)",
                "&:hover": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              }}
            >
              <Typography variant="h4" fontWeight={700}>
                {lang === "mn" ? item.mntitle : item.entitle}
              </Typography>
              <Typography variant="body1" fontWeight={300}>
                {lang === "mn" ? item.mndescription : item.endescription}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

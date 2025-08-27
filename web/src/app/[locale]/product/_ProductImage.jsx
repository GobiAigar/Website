import { useLocale } from "next-intl";
import { Grid, Box, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ImageZoom from "react-image-magnifier-zoom";

export default function ProductImage({ data }) {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const lang = useLocale();

  const getImages = [
    data?.image_url1,
    data?.image_url2,
    data?.image_url3,
    data?.image_url4,
  ].filter(Boolean);

  if (isMobile) {
    return (
      <Swiper spaceBetween={10} slidesPerView={1.2} centeredSlides>
        {getImages?.map((url, idx) => (
          <SwiperSlide key={idx}>
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={url}
                alt={lang === "mn" ? data.mntitle : data.entitle}
                sx={{
                  width: "100%",
                  height: 300,
                  objectFit: "fit",
                  display: "block",
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  if (isTablet) {
    return (
      <Grid container>
        {getImages?.map((url, idx) => {
          return (
            <Grid size={6} key={idx}>
              <Box
                component="img"
                src={url}
                alt={lang === "mn" ? data.mntitle : data.entitle}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fit",
                  display: "block",
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }

  return (
    <Grid container spacing={{ xs: 2, sm: 0.5 }} justifyContent="space-between">
      {getImages.map((url, idx) => (
        <Grid
          key={idx}
          item
          xs={12}
          sm={6}
          md={3}
          lg={3}
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
              height: "100%",
              overflow: "hidden",
              "&:hover .overlay": {
                opacity: 1,
                transform: "translateY(0)",
              },
            }}
          >
            <ImageZoom
              src={url}
              alt={lang === "mn" ? data.mntitle : data.entitle}
              width={276}
              height={300}
              magnifierSize={100}
              zoomLevel={1.5}
              enabled={true}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

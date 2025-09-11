"use client";
import {
  Box,
  Grid,
  Dialog,
  useMediaQuery,
  useTheme,
  IconButton,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import { useLocale } from "next-intl";
import CloseIcon from "@mui/icons-material/Close";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FourImage = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const lang = useLocale();

  const handleClose = () => setOpen(false);

  const allImages = data.flatMap((item) =>
    [item.image_url1, item.image_url2, item.image_url3, item.image_url4].filter(
      Boolean
    )
  );

  const handleOpen = (idx) => {
    setSelectedIndex(idx);
    setOpen(true);
  };

  // --- Mobile Layout ---
  if (isMobile) {
    return (
      <Container>
        <Swiper
          initialSlide={selectedIndex}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          style={{ width: "100%", height: "100%" }}
        >
          {allImages.map((url, idx) => (
            <SwiperSlide key={idx}>
              <Box
                component="img"
                src={url}
                alt={lang === "mn" ? data?.mntitle : data?.entitle}
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    );
  }

  // --- Tablet Layout ---
  if (isTablet) {
    return (
      <Grid container spacing={2} px={3}>
        {allImages.map((url, idx) => (
          <Grid xs={6} key={idx}>
            <Box
              component="img"
              src={url}
              alt={lang === "mn" ? data.mntitle : data.entitle}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => handleOpen(idx)}
            />
          </Grid>
        ))}
      </Grid>
    );
  }

  // --- Desktop Layout ---
  return (
    <Container>
      <Grid container spacing={2}>
        {allImages.map((url, idx) => (
          <Grid
            key={idx}
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={url}
              alt={lang === "mn" ? data?.mntitle : data?.entitle}
              sx={{
                height: 155,
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => handleOpen(idx)}
            />
          </Grid>
        ))}
      </Grid>

      {/* Dialog with Swiper Carousel */}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "white",
            zIndex: 10,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            ":hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Swiper
          initialSlide={selectedIndex}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          style={{ width: "100%", height: "100%" }}
        >
          {allImages.map((url, idx) => (
            <SwiperSlide key={idx}>
              <Box
                component="img"
                src={url}
                alt={lang === "mn" ? data?.mntitle : data?.entitle}
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Dialog>
    </Container>
  );
};

export default FourImage;

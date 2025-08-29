"use client";
import React, { useRef } from "react";
import { Box, CardMedia, useMediaQuery, useTheme } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocale } from "next-intl";

const ImageSideCard = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const lang = useLocale();
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  if (!data || data.length === 0) {
    return (
      <Box>
        <img src="/smallLogo.png" alt="Logo" />
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Slider ref={sliderRef} {...sliderSettings}>
        {data.map((src, ind) => (
          <CardMedia
            key={`img-${ind}`}
            component="img"
            src={src}
            alt={`Section image ${ind}`}
            loading="lazy"
            sx={{
              border: `2px solid ${theme.palette.primary.main}`,
              width: "100%",
              height: "auto",
              maxHeight: "400px",
              objectFit: "cover",
            }}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSideCard;

"use client";
import React, { useRef } from "react";
import { Box, Card, CardMedia } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const ImageSideCard = ({ data }) => {
  const sliderRef = useRef(null);

  const renderSlides = () =>
    data?.map((src, i) => {
      const commonSx = {
        width: "100%",
        height: { xs: "auto", sm: "20rem", md: "31.5rem" },
        objectFit: "cover",
        display: "block",
        sx: {
          boxShadow: (theme) => theme.shadows[1],
        },
      };
      return (
        <CardMedia
          key={`img-${i}`}
          component="img"
          src={src}
          alt={`Section image ${i + 1}`}
          sx={commonSx}
        />
      );
    });

  const NextArrow = ({ onClick }) => (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: 10,
        transform: "translateY(-50%)",
        zIndex: 1,
        width: 30,
        height: 30,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.7)",
          borderRadius: "50%",
        },
      }}
    >
      <ChevronRightIcon />
    </Box>
  );

  const PrevArrow = ({ onClick }) => (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: 10,
        transform: "translateY(-50%)",
        zIndex: 1,
        width: 30,
        height: 30,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.7)",
          borderRadius: "50%",
        },
      }}
    >
      <ChevronLeftIcon />
    </Box>
  );

  return (
    <Box sx={{ width: "100%" }}>
      {data.length > 1 ? (
        <Slider
          ref={sliderRef}
          dots={true}
          arrows={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={5000}
          pauseOnHover={false}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          fade
        >
          {renderSlides()}
        </Slider>
      ) : (
        renderSlides()
      )}
    </Box>
  );
};

export default ImageSideCard;

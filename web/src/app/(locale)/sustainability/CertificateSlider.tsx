// components/CertificateSlider.tsx
"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Box, Card, CardMedia, IconButton, Dialog } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

const CertificateSlider = ({ certificates }) => {
  const sliderRef = useRef<Slider | null>(null);
  const initialSlide = 2;
  const [centerIndex, setCenterIndex] = useState(initialSlide);

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpen = (src: string) => {
    setSelectedImage(src);
    setOpenModal(true);
  };
  const handleClose = () => setOpenModal(false);

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: "absolute",
          left: { xs: -20, sm: -40, md: -50 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          color: "#8C182A",
          display: { xs: "none", sm: "flex" },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
    );
  };

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: "absolute",
          right: { xs: -20, sm: -40, md: -50 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          color: "#8C182A",
          display: { xs: "none", sm: "flex" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    );
  };

  const settings = {
    centerMode: true,
    Infinity: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    initialSlide,
    beforeChange: (_: any, next: React.SetStateAction<number>) =>
      setCenterIndex(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          my: 4,
          overflow: "visible",
          minHeight: { xs: 250, sm: 300, md: 340 },
          ".slick-track": {
            padding: { xs: "25px 0", sm: "25px 0", md: "35px 0" },
          },
          "& .slick-slide > div": {
            transition:
              "transform 0.3s, opacity 0.3s, width 0.3s, padding 0.3s",
          },
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {certificates.map((src: { image_url1: string }, index: React.Key) => {
            const isCenter = index === centerIndex;
            const isAdjacent =
              index === centerIndex - 1 || index === centerIndex + 1;
            return (
              <Box
                key={index}
                sx={{
                  px: isCenter ? { xs: 2, sm: 3, md: 4.5 } : { xs: 1 },
                  width: isCenter
                    ? { xs: 180, sm: 250, md: 300 }
                    : isAdjacent
                    ? { xs: 150, sm: 220, md: 260 }
                    : { xs: 120, sm: 180, md: 200 },
                  transform: isCenter
                    ? "scale(1.2)"
                    : isAdjacent
                    ? "scale(1.1)"
                    : "scale(1)",
                  transition:
                    "transform 0.3s, opacity 0.3s, width 0.3s, padding 0.3s",
                  zIndex: isCenter ? 2 : isAdjacent ? 1 : 0,
                }}
                onClick={() => handleOpen(src.image_url1)}
              >
                <Card
                  elevation={3}
                  sx={{
                    borderRadius: 0,
                    borderWidth: 3,
                    borderColor: "primary.main",
                    width: "100%",
                    height: { xs: 180, sm: 220, md: 250 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "white",
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    src={src.image_url1}
                    alt={`Certificate ${index}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Card>
              </Box>
            );
          })}
        </Slider>
      </Box>
      <Dialog open={openModal} onClose={handleClose} maxWidth="lg">
        <Box sx={{ position: "relative" }}>
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
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Certificate"
              style={{
                width: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
            />
          )}
        </Box>
      </Dialog>
    </>
  );
};

export default CertificateSlider;

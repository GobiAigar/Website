"use client";
import React, { useRef, useEffect, useState, useMemo } from "react";
import { Box, CardMedia } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSideCard = ({ data }) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef(null);

  const SLIDE_DURATION = 5000;

  useEffect(() => {
    setProgress(0);

    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    if (data && data.length > 1) {
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 100 / (SLIDE_DURATION / 100);

          if (newProgress >= 100) {
            clearInterval(progressIntervalRef.current);

            return 0;
          }
          return newProgress;
        });
      }, 100);
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [currentIndex, data]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setProgress(0);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const renderSlides = useMemo(() => {
    return data.map((src, i) => {
      const commonSx = {
        width: "100%",
        objectFit: "cover",
        display: "block",
        boxShadow: (theme) => theme.shadows[1],
      };
      return (
        <CardMedia
          width="100%"
          key={`img-${i}`}
          component="img"
          src={src}
          alt={`Section image ${i + 1}`}
          sx={commonSx}
        />
      );
    });
  }, [data]);

  const sliderSettings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: SLIDE_DURATION,
    pauseOnHover: true,
    fade: true,
    beforeChange: (oldIndex, newIndex) => handleSlideChange(newIndex),
  };

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      {data && data.length > 1 ? (
        <Box>
          <Box
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              right: 8,
              zIndex: 30,
              display: "flex",
              gap: "4px",
            }}
          >
            {data.map((_, index) => (
              <Box
                key={index}
                onClick={() => goToSlide(index)}
                sx={{
                  flex: 1,
                  height: "4px",
                  backgroundColor: "rgba(255,255,255,0.3)",
                  borderRadius: "2px",
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    minHeight: "400px",
                    maxHeight: "700px",
                    backgroundColor: "white",
                    borderRadius: "2px",
                    transition: "width 0.1s ease-linear",
                    width:
                      index < currentIndex
                        ? "100%"
                        : index === currentIndex
                        ? `${progress}%`
                        : "0%",
                  }}
                />
              </Box>
            ))}
          </Box>

          <Slider ref={sliderRef} {...sliderSettings}>
            {renderSlides}
          </Slider>
        </Box>
      ) : (
        renderSlides
      )}
    </Box>
  );
};

export default ImageSideCard;

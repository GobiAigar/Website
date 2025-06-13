"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslations } from "next-intl";
import { Pause, PlayArrow } from "@mui/icons-material";

const SectionItem = ({ section, index, isReversed }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const sliderRef = useRef(null);
  const t = useTranslations("product");

  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFull, setShowFull] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSliderPlaying, setIsSliderPlaying] = useState(true);
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const animationFrameRef = useRef(null);
  const elapsedRef = useRef(0);
  const startRef = useRef(Date.now());

  const images = section?.img || [];

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      const { scrollHeight, clientHeight } = el;
      setIsOverflowing(scrollHeight > clientHeight);
    }, 50);
    return () => clearTimeout(timer);
  }, [section?.text]);

  const animate = () => {
    const elapsed = Date.now() - startRef.current;
    const percent = (elapsed / 5000) * 100;

    if (percent >= 100) {
      setProgress(100);
      elapsedRef.current = 0;
      return;
    }

    setProgress(percent);

    animationFrameRef.current = requestAnimationFrame(animate);
  };
  useEffect(() => {
    if (images.length <= 1) return;

    if (isSliderPlaying) {
      startRef.current = Date.now() - elapsedRef.current;
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      elapsedRef.current = Date.now() - startRef.current;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [activeIndex, images.length, isSliderPlaying]);

  const handleBeforeChange = (_, next) => {
    setActiveIndex(next);
    setProgress(0);
  };

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMediaClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleSliderPlayPause = () => {
    if (!sliderRef.current) return;

    if (isSliderPlaying) {
      sliderRef.current.slickPause();
    } else {
      sliderRef.current.slickPlay();
    }
    setIsSliderPlaying(!isSliderPlaying);
  };

  const hasMedia = images.length > 0;
  const renderSlides = () =>
    images.map((src, i) => {
      const isVideo = Boolean(src.match(/\.(mp4|webm|ogg)(\?.*)?$/i));
      const commonSx = {
        width: "100%",
        height: { xs: "auto", md: "30rem", lg: "37.5rem" },
        objectFit: "cover",
        borderRadius: 2,
        display: "block",
      };

      if (isVideo) {
        return (
          <Box
            key={`video-${index}-${i}`}
            sx={{ position: "relative" }}
            onClick={handleMediaClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Box
              ref={videoRef}
              component="video"
              src={src}
              loop
              muted
              autoPlay
              playsInline
              sx={commonSx}
            />
            {isHovered && (
              <IconButton
                onClick={handleTogglePlay}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(0,0,0,0.4)",
                  color: "#fff",
                  zIndex: 2,
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.6)",
                  },
                }}
              >
                {isPlaying ? (
                  <PauseCircleIcon sx={{ fontSize: "3rem" }} />
                ) : (
                  <PlayCircleIcon sx={{ fontSize: "3rem" }} />
                )}
              </IconButton>
            )}
          </Box>
        );
      }

      return (
        <Box
          key={`img-${index}-${i}`}
          component="img"
          src={src}
          alt={`Section image ${i + 1}`}
          onClick={handleMediaClick}
          sx={commonSx}
        />
      );
    });

  const mediaContent =
    images.length > 1 ? (
      <Box sx={{ position: "relative" }}>
        <Slider
          ref={sliderRef}
          dots={false}
          arrows={false}
          infinite
          speed={600}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={5000}
          pauseOnHover={false}
          fade
          beforeChange={handleBeforeChange}
        >
          {renderSlides()}
        </Slider>
        <IconButton
          onClick={handleSliderPlayPause}
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 3,
            backgroundColor: "rgba(0,0,0,0.4)",
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.6)",
            },
          }}
        >
          {isSliderPlaying ? (
            <Pause sx={{ fontSize: "1rem" }} />
          ) : (
            <PlayArrow sx={{ fontSize: "1rem" }} />
          )}
        </IconButton>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            display: "flex",
            gap: 0.5,
            px: 1,
            pt: 1,
          }}
        >
          {images.map((_, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                height: 2,
                bgcolor: "rgba(255,255,255,0.3)",
                borderRadius: 1,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width:
                    i < activeIndex
                      ? "100%"
                      : i === activeIndex
                      ? `${progress}%`
                      : "0%",
                  bgcolor: "#8C182A",
                  transition: i === activeIndex ? "none" : "width 0.3s ease",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    ) : (
      <Box sx={{ width: "100%" }}>{renderSlides()}</Box>
    );

  return (
    <Grid
      container
      spacing={4}
      direction={{ xs: "column", md: isReversed ? "row-reverse" : "row" }}
      alignItems="stretch"
      sx={{ width: "100%" }}
    >
      {hasMedia && <Grid size={{ xs: 12, md: 6 }}>{mediaContent}</Grid>}

      <Grid size={{ xs: 12, md: hasMedia ? 6 : 12 }} sx={{ display: "flex" }}>
        <Box>
          {section?.title && (
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{
                textAlign: {
                  xs: "center",
                  md: hasMedia ? (isReversed ? "left" : "right") : "center",
                },
                fontSize: {
                  xs: "1.375rem",
                  sm: "1.625rem",
                  md: "1.875rem",
                  lg: "2rem",
                },
                mb: 2,
              }}
            >
              {section?.title}
            </Typography>
          )}
          {section?.text && (
            <Box
              sx={{
                maxHeight: isDesktop && showFull ? "32rem" : "none",
                overflowY: isDesktop && showFull ? "auto" : "visible",
                pr: isDesktop && showFull ? 1 : 0,
                scrollbarWidth: isDesktop ? "thin" : "none",
                "&::-webkit-scrollbar": {
                  width: isDesktop ? 0 : "0rem",
                },
                "&:hover::-webkit-scrollbar": {
                  width: isDesktop ? "0.375rem" : "0rem",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#aaa",
                  borderRadius: "0.375rem",
                },
              }}
            >
              <Typography
                ref={textRef}
                sx={{
                  textAlign: "justify",
                  color: "text.secondary",
                  whiteSpace: "pre-line",
                  overflow: isDesktop && !showFull ? "hidden" : "visible",
                  display: isDesktop && !showFull ? "-webkit-box" : "block",
                  WebkitLineClamp: isDesktop && !showFull ? 19 : "unset",
                  WebkitBoxOrient: "vertical",
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.875rem",
                    md: "1rem",
                    lg: "1.125rem",
                  },
                }}
              >
                {section?.text}
              </Typography>
            </Box>
          )}
          {isOverflowing && isDesktop && (
            <Typography
              onClick={() => setShowFull(!showFull)}
              sx={{
                mt: 1,
                color: "primary.main",
                cursor: "pointer",
                fontWeight: 500,
                textAlign: "right",
                userSelect: "none",
              }}
            >
              {showFull ? t("seeLess") : t("seeMore")}
            </Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

const SplitSection = ({ sections, reverse }) => {
  return (
    <Box sx={{ py: 8, bgcolor: "background.paper", width: "100%" }}>
      {sections.map((section, index) => (
        <SectionItem
          key={index}
          section={section}
          index={index}
          isReversed={reverse ? true : index % 2 === 1}
        />
      ))}
    </Box>
  );
};

export default SplitSection;

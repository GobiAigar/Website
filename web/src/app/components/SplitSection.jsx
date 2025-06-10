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

const SplitSection = ({ sections, reverse }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ py: 8, bgcolor: "background.paper", width: "100%" }}>
      {sections.map((section, index) => {
        const images = section?.img || [];
        const isReversed = reverse ? true : index % 2 === 1;

        const [isHovered, setIsHovered] = useState(false);
        const [isPlaying, setIsPlaying] = useState(false);
        const [showFull, setShowFull] = useState(false);
        const [isOverflowing, setIsOverflowing] = useState(false);
        const [progress, setProgress] = useState(0);
        const [activeIndex, setActiveIndex] = useState(0);
        const textRef = useRef(null);
        const videoRef = useRef(null);

        useEffect(() => {
          const el = textRef.current;
          if (!el) return;
          const timer = setTimeout(() => {
            const { scrollHeight, clientHeight } = el;
            setIsOverflowing(scrollHeight > clientHeight);
          }, 50);
          return () => clearTimeout(timer);
        }, [section?.text]);

        useEffect(() => {
          let frame;
          let start = Date.now();

          const animate = () => {
            const elapsed = Date.now() - start;
            const percent = (elapsed / 3000) * 100;
            setProgress(percent >= 100 ? 100 : percent);
            if (percent < 100) frame = requestAnimationFrame(animate);
          };

          if (images.length > 1) {
            setProgress(0);
            frame = requestAnimationFrame(animate);
          }

          return () => cancelAnimationFrame(frame);
        }, [activeIndex, images.length]);

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
                sx={commonSx}
              />
            );
          });

        const mediaContent =
          images.length > 1 ? (
            <Box sx={{ position: "relative" }}>
              <Slider
                dots={false}
                arrows={false}
                infinite
                speed={600}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay
                autoplaySpeed={3000}
                pauseOnHover={false}
                fade
                beforeChange={handleBeforeChange}
              >
                {renderSlides()}
              </Slider>
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
                        transition:
                          i === activeIndex ? "none" : "width 0.3s ease",
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
            key={`section-${index}`}
            direction={{ xs: "column", md: isReversed ? "row-reverse" : "row" }}
            alignItems="stretch"
            sx={{ width: "100%" }}
          >
            <Grid size={{ xs: 12, md: 6 }}>{mediaContent}</Grid>

            <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
              <Box
                sx={{
                  flex: 1,
                  textAlign: { xs: "start", md: isReversed ? "right" : "left" },
                }}
              >
                {section?.title && (
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    sx={{
                      textAlign: reverse ? "left" : "right",
                      fontSize: {
                        xs: "22px",
                        sm: "26px",
                        md: "30px",
                        lg: "32px",
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
                        width: isDesktop ? 0 : "0px",
                      },
                      "&:hover::-webkit-scrollbar": {
                        width: isDesktop ? "6px" : "0px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#aaa",
                        borderRadius: "6px",
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
                        display:
                          isDesktop && !showFull ? "-webkit-box" : "block",
                        WebkitLineClamp: isDesktop && !showFull ? 19 : "unset",
                        WebkitBoxOrient: "vertical",
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "18px",
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
                    {showFull ? "See less" : "See more"}
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

export default SplitSection;

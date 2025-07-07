"use client";
import React, { useRef, useState, useEffect } from "react";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslations } from "next-intl";

const isYouTubeUrl = (url) =>
  /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/.test(url);

const getYouTubeEmbedUrl = (url) => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

const isEmbedUrl = (url) =>
  typeof url === "string" && url.includes("youtube.com/embed/");

const SectionItem = ({ section, index, isReversed }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const sliderRef = useRef(null);
  const t = useTranslations("product");

  const [showFull, setShowFull] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);

  const images = section?.img || [];

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      const { scrollHeight, clientHeight } = el;
      setIsOverflowing(scrollHeight > clientHeight);
    }, 50);
    return () => clearTimeout(timer);
  }, [section?.description]);

  const hasMedia = images.some(
    (src) =>
      src &&
      (isYouTubeUrl(src) ||
        isEmbedUrl(src) ||
        /\.(mp4|webm|ogg|jpg|jpeg|png|webp)$/i.test(src))
  );

  const renderSlides = () =>
    images.map((src, i) => {
      const isYouTube = isYouTubeUrl(src);
      const isVideo = Boolean(src.match(/\.(mp4|webm|ogg)(\?.*)?$/i));
      const isEmbed = isEmbedUrl(src);
      const commonSx = {
        width: "100%",
        height: { xs: "auto", sm: "25rem", md: "37.5rem" },
        objectFit: "cover",
        display: "block",
      };

      if (isYouTube || isVideo || isEmbed) {
        const embedUrl = getYouTubeEmbedUrl(src);
        return (
          <Box
            key={`embed-${index}-${i}`}
            sx={{
              position: "relative",
              height: { xs: "auto", md: "30rem", lg: "37.5rem" },
              paddingTop: "56.25%",
              overflow: "hidden",
            }}
          >
            <Box
              component="iframe"
              src={embedUrl}
              title={`Embedded media ${i}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
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
          ref={sliderRef}
          dots={true}
          arrows={true}
          infinite={true}
          speed={600}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={5000}
          pauseOnHover={false}
          fade
        >
          {renderSlides()}
        </Slider>
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
          {section?.description && (
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
                  whiteSpace: "pre-line",
                  overflow: isDesktop && !showFull ? "hidden" : "visible",
                  display: isDesktop && !showFull ? "-webkit-box" : "block",
                  WebkitLineClamp: isDesktop && !showFull ? 19 : "unset",
                  WebkitBoxOrient: "vertical",
                  fontSize: {
                    xs: "0.875rem",
                    sm: "1rem",
                    md: "1.125rem",
                    lg: "1.25rem",
                  },
                }}
              >
                {section?.description}
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

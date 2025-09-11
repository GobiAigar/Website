"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const NewHero = ({ data }) => {
  const [scale, setScale] = useState(1);
  const [viewportHeight, setViewportHeight] = useState("100vh");
  const lang = useLocale();
  const t = useTranslations("home");

  // Refs for GSAP animations
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const scrollButtonRef = useRef(null);
  const theme = useTheme();

  const IsMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1.01 + scrollY * 0.0001;
      setScale(newScale > 1.5 ? 1.5 : newScale);
    };

    // Handle viewport height for mobile browsers
    const handleResize = () => {
      // Use window.innerHeight for more accurate viewport height on mobile
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      setViewportHeight(`${window.innerHeight}px`);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    // Initial call
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  useEffect(() => {
    gsap.set(
      [
        titleRef.current,
        subtitleRef.current,
        buttonRef.current,
        scrollButtonRef.current,
      ],
      {
        y: 60,
        opacity: 0,
      }
    );

    // Animate all elements together
    gsap.to(
      [
        titleRef.current,
        subtitleRef.current,
        buttonRef.current,
        scrollButtonRef.current,
      ],
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Add bouncing animation to scroll button
    gsap.to(scrollButtonRef.current, {
      y: 20,
      duration: 1.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleScrollToContent = () => {
    const nextSection = document.getElementById("hero-subtitle");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      ref={heroRef}
      sx={{
        position: "relative",
        width: "100%",
        height: "95vh", // Use dynamic viewport height
        minHeight: "95vh", // Fallback for older browsers
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${data?.image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `scale(${scale})`,
          transition: "transform 0.1s ease-out",
          zIndex: 0,
        }}
      />

      {/* Dark overlay for better text readability */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "95%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          paddingLeft: { xs: "1.5rem", md: "4rem" },
          paddingRight: { xs: "1.5rem", md: "2rem" },
          paddingBottom: { xs: "8rem", md: "10rem" }, // Add padding to prevent overlap with scroll button
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            maxWidth: "100%",
          }}
        >
          <Box mb={4}>
            <Typography
              ref={titleRef}
              variant="h1"
              fontFamily={"Fraunces"}
              sx={{
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                maxWidth: "90%",
              }}
              color="common.white"
            >
              {lang === "mn" ? data?.mntitle : data?.entitle}
            </Typography>

            <Box ref={subtitleRef}>
              <Typography
                id="hero-subtitle"
                color="common.white"
                variant="body1"
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.25rem",
                    md: "1.5rem",
                  },
                }}
              >
                {lang === "mn" ? data?.mnsubtitle : data?.ensubtitle}
              </Typography>
            </Box>
          </Box>

          <Box ref={buttonRef}>
            <Button
              href="product"
              variant="contained"
              disableRipple
              disableTouchRipple
              sx={{
                position: "relative",
                overflow: "hidden",
                px: 3,
                py: 1.5,
                textTransform: "capitalize",
                border: "none",
                fontWeight: 500,
                color: "#333",
                backgroundColor: "#fff",
                cursor: "pointer",

                // Pseudo element for background slide
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#6E1221",
                  transition: "left 0.4s ease", // 👈 keep transition here
                  zIndex: 0,
                },

                "&:hover::before": {
                  left: 0, // 👈 smooth slide in
                },

                "& span": {
                  position: "relative",
                  zIndex: 1,
                  display: "inline-flex",
                  alignItems: "center",
                  transition: "color 0.3s ease", // 👈 keep transition
                },

                "&:hover span": {
                  color: "#fff",
                },
              }}
            >
              <span>
                {t("seeProduct")}
                <ArrowCircleRightOutlinedIcon sx={{ ml: 1 }} />
              </span>
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Scroll Down Button */}
      {!IsMobile && (
        <IconButton
          ref={scrollButtonRef}
          onClick={handleScrollToContent}
          sx={{
            position: "absolute",
            bottom: { xs: "2rem", md: "3rem" },
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            color: "white",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "50%",
            padding: "12px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",

            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderColor: "rgba(255, 255, 255, 0.6)",
              transform: "translateX(-50%) scale(1.1)",
            },
          }}
          aria-label="Scroll to content"
        >
          <KeyboardDoubleArrowDownIcon sx={{ fontSize: 28 }} />
        </IconButton>
      )}
    </Box>
  );
};

export default NewHero;

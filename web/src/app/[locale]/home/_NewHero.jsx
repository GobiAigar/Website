"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
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
  const dividerRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const scrollButtonRef = useRef(null);

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
        dividerRef.current,
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
        dividerRef.current,
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleScrollToContent = () => {
    const nextSection = document.getElementById("aboutUs");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      ref={heroRef}
      sx={{
        position: "relative",
        width: "100vw",
        height: viewportHeight, // Use dynamic viewport height
        minHeight: "100vh", // Fallback for older browsers
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
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          paddingLeft: { xs: "1.5rem", md: "4rem" },
          paddingRight: { xs: "1.5rem", md: "2rem" },
          paddingBottom: { xs: "6rem", md: "8rem" }, // Add padding to prevent overlap with scroll button
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            gap: "2rem",
            maxWidth: "100%",
          }}
        >
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

          <Box ref={dividerRef} sx={{ maxWidth: { xs: "30%", md: "20%" } }}>
            <Divider
              sx={{
                borderBottomWidth: 2,
                borderColor: "white",
              }}
            />
          </Box>

          <Box ref={subtitleRef} sx={{ maxWidth: { xs: "80%", md: "40%" } }}>
            <Typography
              color="common.white"
              variant="body1"
              sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" } }}
            >
              {lang === "mn" ? data?.mnsubtitle : data?.ensubtitle}
            </Typography>
          </Box>

          <Box ref={buttonRef}>
            <Button
              href="product"
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#333",
                px: 3,
                py: 1.5,
                textTransform: "capitalize",
                border: "none",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  transform: "translateY(-2px)",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                },
              }}
            >
              {t("seeProduct")}
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Fixed Scroll Button with better positioning */}
      <Box
        ref={scrollButtonRef}
        sx={{
          position: "absolute",
          bottom: { xs: "20px", sm: "30px", md: "40px" }, // Responsive bottom spacing
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <Box
          component="button"
          onClick={handleScrollToContent}
          sx={{
            width: { xs: "45px", md: "50px" },
            height: { xs: "45px", md: "50px" },
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "2px solid rgba(255, 255, 255, 0.8)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
              transform: "scale(1.1)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            },
            "&:active": {
              transform: "scale(0.95)",
            },
          }}
          aria-label="Scroll to content"
        >
          <Box
            component="svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            sx={{
              animation: "bounce 2s infinite",
              "@keyframes bounce": {
                "0%, 20%, 50%, 80%, 100%": {
                  transform: "translateY(0)",
                },
                "40%": {
                  transform: "translateY(-5px)",
                },
                "60%": {
                  transform: "translateY(-3px)",
                },
              },
            }}
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewHero;

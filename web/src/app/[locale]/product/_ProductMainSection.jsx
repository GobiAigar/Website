"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Title from "../../components/keyComponents/Title";
import { useLocale } from "next-intl";

const ProductMainSection = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const lang = useLocale();

  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  }, []);

  return (
    <Box marginY={{ xs: "7.5rem", md: "10rem" }}>
      <Container>
        <Grid container gap={2}>
          <Grid
            ref={imgRef}
            item
            size={{ xs: 12, md: 5.5 }}
            sx={{
              opacity: 0,
              transform: "translateX(0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Title mntitle={data?.mntitle} entitle={data?.entitle} />
          </Grid>

          <Grid
            item
            size={{ xs: 12, md: 5.5 }}
            sx={{
              opacity: 0,
              transform: "translateX(0)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
            ref={textRef}
          >
            <Typography
              color="#333"
              variant="body1"
              sx={{
                whiteSpace: "pre-line",
                lineHeight: "1.5",
                marginTop: "1rem",
                marginBottom: {
                  xs: "1rem",
                  lg: "2rem",
                },
                textAlign: "justify",
              }}
            >
              {lang === "mn" ? data?.mndescription : data?.endescription}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductMainSection;

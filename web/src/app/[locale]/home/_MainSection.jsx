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
import GoldenDivider from "../../components/keyComponents/GoldenDivider";
import { useLocale } from "next-intl";
import ImageSideCard from "../../components/Card/ImageSideCard";

const MainSection = ({ data, imgFirst }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const lang = useLocale();
  const imgRef = useRef(null);
  const textRef = useRef(null);

  const images = [
    data?.image_url1,
    data?.image_url2,
    data?.image_url3,
    data?.image_url4,
  ].filter(Boolean);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3,
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
        duration: 1.2,
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
    <Box marginY={{ xs: "5rem", md: "7rem" }}>
      <Container>
        <Grid container gap={3} direction={imgFirst ? "row-reverse" : "row"}>
          <Grid
            ref={imgRef}
            size={{ xs: 12, md: 5.5 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isMobile && (
              <>
                <Title mntitle={data?.mntitle} entitle={data?.entitle} />
                <GoldenDivider />
              </>
            )}
            <ImageSideCard data={images} />
          </Grid>

          <Grid
            size={{ xs: 12, md: 6.2 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "fill",
            }}
            ref={textRef}
          >
            {!isMobile && (
              <>
                <Title mntitle={data?.mntitle} entitle={data?.entitle} />
                <GoldenDivider />
              </>
            )}
            <Typography
              color="#333"
              variant="body1"
              sx={{
                whiteSpace: "pre-line",
                lineHeight: "1.5",
                textAlign: "justify",
                paddingX: 2,
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

export default MainSection;

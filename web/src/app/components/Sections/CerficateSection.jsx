"use client";

import { Box, CardMedia, Container, Divider, Grid } from "@mui/material";

import CerficateTextCard from "../Card/CerficateTextCard";
import { useEffect, useState, useRef } from "react";
import { useLocale } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CerficateSection = ({ data, index }) => {
  const [reverse, setReverse] = useState(false);
  const lang = useLocale();

  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    setReverse(index % 2 !== 0);

    const ctx = gsap.context(() => {
      // Animate text and image from opposite sides
      gsap.fromTo(
        textRef.current,
        { x: reverse ? 200 : -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { x: reverse ? -200 : 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [index, reverse]);

  return (
    <Box ref={sectionRef} sx={{ width: "100%", overflow: "visible" }}>
      <Container sx={{ overflow: "visible" }}>
        <Grid
          container
          paddingY={8}
          direction={reverse ? "row-reverse" : "row"}
          sx={{ xs: { position: "static" }, md: { position: "relative" } }}
        >
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            ref={textRef}
            sx={{
              position: { md: "sticky" },
              top: 64,
              zIndex: 10,
              alignSelf: "flex-start",
              padding: 2,
            }}
          >
            <CerficateTextCard data={data} />
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }} ref={imageRef}>
            <CardMedia
              component="img"
              src={lang === "mn" ? data.image_url2 : data.image_url1}
              alt={data}
              sx={{
                borderRadius: "none",
                border: "1px solid",
                borderColor: "#333",
                padding: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </Box>
  );
};

export default CerficateSection;

"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";
import { useState, useEffect } from "react";
import CustomButton from "./Button";

const Hero = ({ data }) => {
  const [scale, setScale] = useState(1);
  const lang = useLocale();
  const t = useTranslations("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1.01 + scrollY * 0.0001;
      setScale(newScale > 1.5 ? 1.5 : newScale); // clamp the scale
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "98vh",
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

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      />

      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            gap: "3rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography
              variant="h1"
              fontWeight="bold"
              color="common.white"
              gutterBottom
              sx={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontFamily: "nunito",
                fontSize: {
                  xs: "1.75rem",
                  sm: "2.25rem",
                  md: "3rem",
                  lg: "3rem",
                },
              }}
            >
              {lang === "mn" ? data?.mntitle : data?.entitle}
            </Typography>
            <Typography
              color="common.white"
              mb="1rem"
              sx={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontSize: {
                  xs: "0.8rem",
                  md: "1rem",
                  lg: "1.3rem",
                },
                px: {
                  xs: "3rem",
                  sm: "6rem",
                  md: "8rem",
                  lg: "12rem",
                },
              }}
            >
              {lang === "mn" ? data?.mnsubtitle : data?.ensubtitle}
            </Typography>
          </Box>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
              display: { xs: "flex", sm: "flex" },
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Grid item>
              <CustomButton
                url={"product"}
                text={"seeProduct"}
                variant={"contained"}
                color={"white"}
              />
            </Grid>
            <Grid item>
              <CustomButton
                url={"/home#history"}
                text={"ourHistory"}
                variant={"outlined"}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

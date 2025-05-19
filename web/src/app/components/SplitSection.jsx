"use client";
import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";

const SplitSection = ({ sections }) => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, bgcolor: "background.paper", width: "100%" }}>
      {sections.map((section, index) => {
        const images = section.img || [];
        const isReversed = index % 2 === 1;

        return (
          <Grid
            container
            spacing={4}
            key={index}
            direction={{
              xs: "column",
              md: isReversed ? "row-reverse" : "row",
            }}
            alignItems="center"
            justifyContent="center"
            sx={{ mb: 8, width: "100%" }}
          >
            <Grid item size={{ xs: 12, md: 6 }} sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: images.length > 1 ? "grid" : "block",
                  gridTemplateColumns:
                    images.length > 1 ? "repeat(2, 1fr)" : "none",
                  gap: 2,
                  width: "100%",
                  height: "100%",
                }}
              >
                {images.map((imgSrc, i) => (
                  <Box
                    component="img"
                    key={i}
                    src={imgSrc}
                    alt={`Section image ${i + 1}`}
                    sx={{
                      width: "100%",
                      height:
                        images.length > 1
                          ? { xs: 160, sm: 200, md: 240 }
                          : { xs: "auto", md: "100%" },
                      objectFit: "cover",
                      borderRadius: 2,
                      display: "block",
                    }}
                  />
                ))}
              </Box>
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }} sx={{ width: "100%" }}>
              <Box
                sx={{
                  textAlign: {
                    xs: "start",
                    md: isReversed ? "right" : "left",
                  },
                  width: "100%",
                  height: {
                    xs: "auto",
                    md: "100vh",
                  },
                }}
              >
                {section.title && (
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    sx={{
                      textAlign: "center",
                      fontSize: {
                        xs: "22px",
                        sm: "26px",
                        md: "30px",
                        lg: "32px",
                      },
                      mb: 2,
                    }}
                  >
                    {section.title}
                  </Typography>
                )}
                {section.text && (
                  <Typography
                    sx={{
                      textAlign: "start",
                    }}
                  >
                    {section.text}
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

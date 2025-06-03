"use client";
import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";

const SplitSection = ({ sections, reverse }) => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, bgcolor: "background.paper", width: "100%" }}>
      {sections.map((section, index) => {
        const images = section.img || [];
        const isReversed = reverse ? true : index % 2 === 1;

        return (
          <Grid
            container
            spacing={4}
            key={index}
            direction={{
              xs: "column",
              md: isReversed ? "row-reverse" : "row",
            }}
            alignItems="stretch"
            sx={{ width: "100%" }}
          >
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ width: "100%", display: "flex" }}
            >
              <Box
                sx={{
                  display: images.length > 1 ? "grid" : "flex",
                  gridTemplateColumns:
                    images.length > 1 ? "repeat(2, 1fr)" : "none",
                  gap: 2,
                  flex: 1,
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
                          : "100%",
                      objectFit: "cover",
                      borderRadius: 2,
                      display: "block",
                    }}
                  />
                ))}
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  textAlign: {
                    xs: "start",
                    md: isReversed ? "right" : "left",
                  },
                  flex: 1,
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
                      textAlign: "justify",
                      color: "text.secondary",
                      whiteSpace: "pre-line",
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

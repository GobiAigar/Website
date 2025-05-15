import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const SplitSection = ({ sections }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{ px: { xs: 2, sm: 4, md: 8 }, py: 8, bgcolor: "background.paper" }}
    >
      {sections.map((section, index) => {
        const images = section.img || [];
        const isReversed = index % 2 === 1;

        return (
          <Grid
            container
            spacing={4}
            key={index}
            direction={{ xs: "column", md: isReversed ? "row-reverse" : "row" }}
            alignItems="stretch"
            sx={{ mb: 8, flexWrap: "wrap" }}
          >
            <Grid size={{ xs: 6, md: 6 }} zeroMinWidth>
              <Box
                sx={{
                  display: images.length === 1 ? "flex" : "grid",
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
                    alt={section.alt || `Section image ${i + 1}`}
                    sx={{
                      width: "100%",
                      height:
                        images.length > 1
                          ? { xs: 160, sm: 180, md: 220, lg: 260 }
                          : { xs: "auto", md: "100%" },
                      objectFit: "cover",
                      borderRadius: 2,
                    }}
                  />
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 6, md: 6 }} zeroMinWidth>
              <Box
                sx={{
                  px: { xs: 0, sm: 2, md: 4 },
                  py: { xs: 2, sm: 3, md: 4 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {section.title && (
                  <Typography
                    variant="h5"
                    textAlign={{
                      xs: "center",
                      md: isReversed ? "right" : "left",
                    }}
                    sx={{
                      fontSize: {
                        xs: "22px",
                        sm: "26px",
                        md: "30px",
                        lg: "32px",
                      },
                    }}
                    fontWeight={700}
                    gutterBottom
                  >
                    {section.title}
                  </Typography>
                )}
                <Box sx={{ typography: "body2", mb: 2 }}>
                  {section.text && (
                    <Typography paragraph>{section.text}</Typography>
                  )}
                  {section.text2 && (
                    <Typography paragraph>{section.text2}</Typography>
                  )}
                  {section.text3 && (
                    <Typography paragraph>{section.text3}</Typography>
                  )}
                </Box>
                {section.quote && (
                  <Typography
                    variant="subtitle2"
                    sx={{ fontStyle: "italic", color: "text.secondary" }}
                  >
                    {section.quote}
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

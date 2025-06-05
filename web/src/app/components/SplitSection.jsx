"use client";
import React, { useRef, useState } from "react";
import { Box, Grid, Typography, useTheme, IconButton } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

const SplitSection = ({ sections, reverse }) => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, bgcolor: "background.paper", width: "100%" }}>
      {sections.map((section, index) => {
        const images = section?.img || [];
        const isReversed = reverse ? true : index % 2 === 1;

        const [isHovered, setIsHovered] = useState(false);
        const [isPlaying, setIsPlaying] = useState(true);
        const videoRef = useRef(null);

        return (
          <Grid
            container
            spacing={4}
            key={`section-${index}`}
            direction={{
              xs: "column",
              md: isReversed ? "row-reverse" : "row",
            }}
            alignItems="stretch"
            sx={{ width: "100%" }}
          >
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ width: "100%", display: "flex", height: "600px" }}
            >
              <Box
                sx={{
                  display: images.length > 1 ? "grid" : "flex",
                  justifyContent: "center",
                  gridTemplateColumns:
                    images.length > 1 ? "repeat(2, 1fr)" : "none",
                  gap: 2,
                  flex: 1,
                  height: "100%",
                }}
              >
                {images.map((src, i) => {
                  const isVideo = Boolean(
                    src.match(/\.(mp4|webm|ogg)(\?.*)?$/i)
                  );
                  const commonSx = {
                    width: "37.5rem",
                    height: "37.5rem",
                    objectFit: "cover",
                    borderRadius: 2,
                    display: "block",
                  };

                  if (isVideo) {
                    return (
                      <Box
                        key={`video-wrapper-${index}-${i}`}
                        sx={{ position: "relative" }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        <Box
                          ref={videoRef}
                          component="video"
                          src={src}
                          loop
                          sx={commonSx}
                        />
                        {isHovered && (
                          <IconButton
                            onClick={() => {
                              if (!videoRef.current) return;
                              if (isPlaying) {
                                videoRef.current.pause();
                              } else {
                                videoRef.current.play();
                              }
                              setIsPlaying(!isPlaying);
                            }}
                            sx={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              backgroundColor: "rgba(0,0,0,0.4)",
                              color: "#fff",
                              zIndex: 2,
                              "&:hover": {
                                backgroundColor: "rgba(0,0,0,0.6)",
                              },
                            }}
                          >
                            {isPlaying ? (
                              <PauseCircleIcon sx={{ fontSize: 48 }} />
                            ) : (
                              <PlayCircleIcon sx={{ fontSize: 48 }} />
                            )}
                          </IconButton>
                        )}
                      </Box>
                    );
                  }

                  return (
                    <Box
                      key={`image-${index}-${i}`}
                      component="img"
                      src={src}
                      alt={`Section image ${i + 1}`}
                      sx={commonSx}
                    />
                  );
                })}
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                display: "flex",
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
                {section?.title && (
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
                    {section?.title}
                  </Typography>
                )}
                {section?.text && (
                  <Typography
                    sx={{
                      textAlign: "justify",
                      color: "text.secondary",
                      whiteSpace: "pre-line",
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "16px",
                        lg: "18px",
                      },
                    }}
                  >
                    {section?.text}
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

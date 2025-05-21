"use client";

import React, { useRef, useState, useEffect } from "react";
import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

const isDirectVideo = (url) => {
  return /\.(mp4|webm|ogg)$/i.test(url);
};

const isYouTube = (url) => {
  return /youtube\.com|youtu\.be/.test(url);
};

const isVimeo = (url) => {
  return /vimeo\.com/.test(url);
};

const Video = ({ src }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current?.play) {
          videoRef.current.play();
          setIsPlaying(true);
        } else if (videoRef.current?.pause) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.6 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const renderEmbeddedPlayer = () => {
    let embedUrl = src;

    if (isYouTube(src)) {
      const videoId = src.split("v=")[1]?.split("&")[0] || src.split("/").pop();
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (isVimeo(src)) {
      const videoId = src.split("/").pop();
      embedUrl = `https://player.vimeo.com/video/${videoId}`;
    }

    return (
      <iframe
        src={embedUrl}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "8px",
        }}
      />
    );
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        aspectRatio: {
          xs: "4/3",
          sm: "16/9",
        },
        mx: "auto",
        position: "relative",
      }}
    >
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{ width: "100%", height: "100%", position: "relative" }}
      >
        {isDirectVideo(src) ? (
          <>
            <CardMedia
              component="video"
              ref={videoRef}
              src={src}
              muted
              playsInline
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
            {isHovered && (
              <IconButton
                onClick={handlePlayPause}
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
          </>
        ) : (
          renderEmbeddedPlayer()
        )}
      </Card>
    </Box>
  );
};

export default Video;

"use client";

import React, { useRef, useState, useEffect } from "react";
import { Box, Card, CardContent } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

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
        if (entry.isIntersecting) {
          videoRef.current?.play();
          setIsPlaying(true);
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.6,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{ maxWidth: 600, margin: "auto", position: "relative" }}
    >
      <Card>
        <CardContent
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{ p: 0, position: "relative" }}
        >
          <video
            ref={videoRef}
            width="100%"
            className="rounded-2xl h-auto"
            muted
            playsInline
          >
            <source src={src} type="video/mp4" />
            Таны browser энэ бичлэгийг дэмжихгүй байна.
          </video>

          {isHovered && (
            <Box
              onClick={handlePlayPause}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: "50%",
                padding: 1,
                color: "white",
                zIndex: 2,
              }}
            >
              {isPlaying ? (
                <PauseCircleIcon sx={{ fontSize: 40 }} />
              ) : (
                <PlayCircleIcon sx={{ fontSize: 40 }} />
              )}
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Video;

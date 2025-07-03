"use client";
import React, { useEffect, useState } from "react";
import { Fab, Zoom } from "@mui/material";
import { ArrowTopIcon } from "./Icon";

const ScrollTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={showScroll}>
      <Fab
        color="white"
        onClick={scrollToTop}
        aria-label="scroll back to top"
        sx={{
          position: "fixed",
          zIndex: 1300,
          boxShadow: 6,
        }}
      >
        <ArrowTopIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollTopButton;

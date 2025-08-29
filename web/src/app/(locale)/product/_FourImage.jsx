"use client";
import {
  Box,
  Grid,
  Dialog,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { useLocale } from "next-intl";
import CloseIcon from "@mui/icons-material/Close";

const FourImage = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const lang = useLocale();

  const handleClose = () => {
    setOpen(false);
  };

  const getImages = [
    data?.image_url1,
    data?.image_url2,
    data?.image_url3,
    data?.image_url4,
  ].filter(Boolean);

  if (isMobile) {
    return (
      <Grid container spacing={1} sx={{ width: "100%" }} px={2}>
        {getImages?.map((url, idx) => (
          <Grid size={{ xs: 6 }} key={idx}>
            <Box
              sx={{
                position: "relative",
                width: "auto",
                height: "auto",
              }}
            >
              <Box
                component="img"
                src={url}
                alt={lang === "mn" ? data?.mntitle : data?.entitle}
                sx={{
                  width: "auto",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                }}
                onClick={() => {
                  setSelectedImage(url);
                  setOpen(true);
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  }

  if (isTablet) {
    return (
      <Grid container spacing={2} px={3}>
        {getImages?.map((url, idx) => {
          return (
            <Grid size={6} key={idx}>
              <Box
                component="img"
                src={url}
                alt={lang === "mn" ? data.mntitle : data.entitle}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fit",
                  display: "block",
                }}
                onClick={() => {
                  setSelectedImage(url);
                  setOpen(true);
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }

  return (
    <>
      <Grid container spacing={2}>
        {getImages.map((url, idx) => (
          <Grid
            key={idx}
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={url}
              alt={lang === "mn" ? data?.mntitle : data?.entitle}
              sx={{
                height: 155,
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => {
                setSelectedImage(url);
                setOpen(true);
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "white",
            zIndex: 10,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            ":hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          component="img"
          src={selectedImage}
          alt={lang === "mn" ? data?.mntitle : data?.entitle}
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            borderRadius: "0",
            border: "2px solid #F5BF03",
          }}
        />
      </Dialog>
    </>
  );
};

export default FourImage;

"use client";

import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Box,
  Container,
  Typography,
  Grid,
  Skeleton,
  Dialog,
  IconButton,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useAppData } from "../../../context/AppDataProvider";

const Sustainability = () => {
  const { sustainability, loading: rawLoading } = useAppData();
  const lang = useLocale();
  const t = useTranslations("sustainability");

  const [loading, setLoading] = useState(true);
  const [openImage, setOpenImage] = useState(null);

  useEffect(() => {
    if (rawLoading) {
      setLoading(true);
    } else {
      const timer = setTimeout(() => setLoading(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [rawLoading]);

  const data = sustainability?.data || [];
  const mainInfo = data.find((item) => item.id === 1);
  const roadmapItems = data
    .filter((item) => item.id !== 1)
    .map((item) => ({
      label: lang === "mn" ? item.mndescription : item.endescription,
      image: item.image_url,
    }));

  if (loading && (!sustainability || !sustainability.data?.length)) {
    return (
      <Box sx={{ bgcolor: "background.default" }}>
        <Header />
        <Box
          sx={{
            minHeight: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "black",
            px: 4,
            mt: 10,
          }}
        >
          <Container maxWidth="sm">
            <Skeleton variant="text" width="80%" height={50} />
            <Skeleton variant="text" width="100%" height={100} sx={{ mt: 2 }} />
          </Container>
        </Box>

        <Container sx={{ py: 10 }}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "2px",
                bgcolor: "#828282",
                transform: "translateX(-50%)",
                zIndex: 0,
              }}
            />

            {Array.from(new Array(3)).map((_, index) => (
              <Grid
                container
                spacing={4}
                key={index}
                sx={{
                  mb: 12,
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                  alignItems: "flex-start",
                  position: "relative",
                }}
              >
                <Grid
                  size={{ xs: 12, sm: 6 }}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Skeleton
                    variant="rectangular"
                    width={300}
                    height={400}
                    sx={{ borderRadius: 2 }}
                  />
                  <Skeleton
                    variant="text"
                    width={300}
                    height={40}
                    sx={{ mt: 2 }}
                  />
                </Grid>
              </Grid>
            ))}
          </Box>
        </Container>
        <Footer />
      </Box>
    );
  }

  if (!mainInfo) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
        }}
      >
        <Typography variant="h6" color="text.secondary">
          {t("notFoundInformations")}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "18.75rem", sm: "80vh" },
          backgroundImage: `url(${mainInfo?.image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Header />

        <Box
          sx={{
            minHeight: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "black",
            px: 4,
            mt: 10,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              sx={{
                fontSize: {
                  xs: "24px",
                  sm: "28px",
                  md: "32px",
                  color: "white",
                },
                fontWeight: "bold",
              }}
            >
              {lang === "mn" ? mainInfo.mntitle : mainInfo.entitle}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                fontSize: {
                  xs: "12px",
                  sm: "16px",
                  md: "20px",
                  color: "white",
                },
              }}
            >
              {lang === "mn" ? mainInfo.mndescription : mainInfo.endescription}
            </Typography>
          </Container>
        </Box>
      </Box>

      <Container sx={{ pb: 10, color: "black" }}>
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              bgcolor: "#828282",
              transform: "translateX(-50%)",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          {roadmapItems.map((item, index) => (
            <Grid
              container
              spacing={4}
              key={index}
              sx={{
                mb: 12,
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                alignItems: "flex-start",
                position: "relative",
                top: "140px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  width: 16,
                  height: 16,
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  border: "1px solid black",
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                  pointerEvents: "none",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  [index % 2 === 0 ? "right" : "left"]: "50%",
                  width: "calc(35% - 330px)",
                  height: "1px",
                  backgroundColor: "#828282",
                  transform: "translateY(-50%)",
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />

              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: { xs: 300, sm: 450, md: 450, lg: 450 },
                    height: { xs: 400, sm: 550, md: 650, lg: 650 },
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 2,
                    zIndex: 1,
                    cursor: "pointer",
                  }}
                  onClick={() => setOpenImage(item.image)}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.label}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.2s",
                      "&:hover": { transform: "scale(1.05)" },
                      borderRadius: 3,
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    mt: 2,
                    maxWidth: 300,
                    mx: "auto",
                    wordBreak: "break-word",
                  }}
                >
                  {item.label}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Container>

      <Dialog
        open={Boolean(openImage)}
        onClose={() => setOpenImage(null)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={() => setOpenImage(null)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              bgcolor: "rgba(0,0,0,0.5)",
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box
            component="img"
            src={openImage}
            alt="Popup"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              borderRadius: 2,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
            }}
          />
        </Box>
      </Dialog>

      <Footer />
    </Box>
  );
};

export default Sustainability;

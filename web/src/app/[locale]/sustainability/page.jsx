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

  const data = sustainability || [];
  const mainInfo = data?.hero?.[0];
  const roadmapItems = data?.response?.cerficates?.map((item) => ({
    label: lang === "mn" ? item.mndescription : item.endescription,
    image: item.image_url,
  }));

  const sustainabilityText = sustainability?.response?.title?.[0];

  if (loading && (!sustainability || !sustainability.data?.length)) {
    return (
      <Box sx={{ bgcolor: "background.default" }}>
        <Header />
        <Box
          sx={{
            width: "100%",
            height: "20rem",
            backgroundColor: "#f0f0f0",
            position: "relative",
          }}
        >
          <Skeleton variant="rectangular" width="100%" height="100%" />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              px: 2,
            }}
          >
            <Container
              maxWidth="sm"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Skeleton variant="text" width="80%" height={40} sx={{ mb: 2 }} />
              <Skeleton variant="text" width="60%" height={30} />
            </Container>
          </Box>
        </Box>

        <Container sx={{ py: 10 }}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "0.125rem",
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
          height: "20rem",
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
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
        />

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
            position: "absolute",
            zIndex: 1,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "1.75rem",
                  md: "2rem",
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
                  xs: "0.8rem",
                  md: "1rem",
                  lg: "1.2rem",
                  color: "white",
                },
              }}
            >
              {lang === "mn" ? mainInfo.mnsubtitle : mainInfo.ensubtitle}
            </Typography>
          </Container>
        </Box>
      </Box>

      <Container
        disableGutters
        maxWidth={false}
        sx={{
          pt: { xs: 6, md: 10 },
          px: { sm: 6, md: 10, lg: 20 },
          color: "black",
        }}
      >
        <Box
          sx={{
            bgcolor: "#F5F5F5",
            p: { xs: 3, sm: 4, md: 5 },
            borderRadius: 3,
            boxShadow: "0 0.25rem 1.25rem rgba(0, 0, 0, 0.05)",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "1.375rem",
                sm: "1.625rem",
                md: "1.875rem",
                lg: "2rem",
              },
              mb: 3,
            }}
            fontWeight={700}
            textAlign="start"
          >
            {lang === "mn"
              ? sustainabilityText?.mntitle
              : sustainabilityText?.entitle}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              whiteSpace: "pre-line",
              lineHeight: 1.8,
              textAlign: "justify",
              fontSize: {
                xs: "0.875rem",
                sm: "1rem",
                md: "1.125rem",
                lg: "1.25rem",
              },
              color: "text.secondary",
            }}
          >
            {lang === "mn"
              ? sustainabilityText?.mndescription
              : sustainabilityText?.endescription}
          </Typography>
        </Box>
      </Container>

      <Container sx={{ pb: 10, color: "black" }}>
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "0.125rem",
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
                mb: { md: -35, xs: 10 },
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                alignItems: "flex-start",
                position: "relative",
                top: "8.75rem",
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
                  border: "0.0625rem solid black",
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
                  height: "0.0625rem",
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
                    width: "auto",
                    height: "auto",
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
                      width: { sm: "25rem", xs: "auto" },
                      height: { sm: "37.5rem", xs: "auto" },
                      objectFit: "cover",
                      transition: "transform 0.2s",
                      "&:hover": { transform: "scale(1.05)" },
                      borderRadius: 3,
                      boxShadow: "0 0.25rem 1.25rem rgba(0, 0, 0, 0.4)",
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
              boxShadow: "0 0.25rem 1.25rem rgba(0, 0, 0, 0.5)",
            }}
          />
        </Box>
      </Dialog>
      <Box marginBottom={{ md: 50, xs: 10 }}></Box>
      <Footer />
    </Box>
  );
};

export default Sustainability;

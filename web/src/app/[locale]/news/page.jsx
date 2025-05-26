"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CustomLoader from "../../components/Loading";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useAppData } from "../../../context/AppDataProvider";

const truncateWords = (text, limit) => {
  const words = text.split(" ");
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};

const News = () => {
  const { news, loading, error } = useAppData();
  const [selectedNews, setSelectedNews] = useState(null);
  const lang = useLocale();
  const t = useTranslations("news");

  if (loading || !news) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomLoader />
      </Box>
    );
  }

  const displayNews = selectedNews || news[0];

  return (
    <Box sx={{ overflow: "hidden", bgcolor: "background.default" }}>
      <Header />

      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url('${displayNews.image_url}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.5)",
            zIndex: 1,
          }}
        />
        <Container
          maxWidth="lg"
          sx={{ pt: 20, position: "relative", zIndex: 2 }}
        >
          <Typography variant="h3" fontWeight="bold" color="white">
            {lang === "mn" ? displayNews.mntitle : displayNews.entitle}
          </Typography>
        </Container>
      </Box>

      <Container>
        <Box sx={{ py: 8 }}>
          <Typography variant="caption" color="text.secondary">
            {new Date(displayNews.date).toLocaleDateString()}
          </Typography>

          <Typography
            variant="subtitle2"
            align="right"
            color="text.secondary"
            mb={2}
          >
            {t("journalist")}
            <span
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                marginLeft: 4,
              }}
            >
              {lang === "mn"
                ? displayNews.mnjournalist
                : displayNews.enjournalist}
            </span>
          </Typography>

          <Typography variant="body1" color="black">
            {lang === "mn"
              ? displayNews.mndescription
              : displayNews.endescription}
          </Typography>

          {selectedNews && (
            <Box textAlign="right" mt={4}>
              <Button variant="outlined" onClick={() => setSelectedNews(null)}>
                {t("back")}
              </Button>
            </Box>
          )}
        </Box>
      </Container>

      {!selectedNews && (
        <Container>
          <Grid container spacing={3} sx={{ py: 8, px: 2 }}>
            {news.slice(1).map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    boxShadow: 4,
                    overflow: "hidden",
                    minWidth: 280,
                    transition: "all 0.3s ease",
                    "&:hover .hoverOverlay": {
                      transform: "translateY(0%)",
                      opacity: 1,
                    },
                  }}
                  onClick={() => setSelectedNews(item)}
                >
                  <CardActionArea sx={{ height: "100%" }}>
                    <CardMedia
                      component="img"
                      image={item.image_url}
                      alt={item.entitle}
                      sx={{ height: 140 }}
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: 1,
                        height: 100,
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {truncateWords(
                            lang === "mn" ? item?.mntitle : item?.entitle,
                            5
                          )}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {truncateWords(
                          lang === "mn"
                            ? item.mndescription
                            : item.endescription,
                          6
                        )}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  <Box
                    className="hoverOverlay"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      bgcolor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transform: "translateY(100%)",
                      transition: "all 0.4s ease",
                      zIndex: 1,
                      pointerEvents: "none",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{
                        display: "flex",
                        justifyItems: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 5,
                        textAlign: "center",
                      }}
                    >
                      Мэдээн дээр дарж дэлгэрэнгүй уншина уу
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}

      <Footer />
    </Box>
  );
};

export default News;

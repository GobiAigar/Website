"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const truncateWords = (text, limit) => {
  const words = text.split(" ");
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);
  const router = useRouter();
  const lang = useLocale();
  const t = useTranslations("news");

  useEffect(() => {
    fetch("https://website-z9b7.onrender.com/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNewsList(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load news.");
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ overflow: "hidden", bgcolor: "background.default" }}>
      <Header />

      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url('${
            selectedNews ? selectedNews.image_url : "/news.jpg"
          }')`,
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
            {selectedNews
              ? lang === "mn"
                ? selectedNews?.mntitle
                : selectedNews?.entitle
              : t("title")}
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mt: 2 }}
            color="white"
          >
            {selectedNews ? "" : t("subtitle")}
          </Typography>
        </Container>
      </Box>

      <Container>
        {loading ? (
          <Typography sx={{ py: 10 }}>{t("loading")}</Typography>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : selectedNews ? (
          <Box sx={{ py: 8 }}>
            <Typography variant="caption" color="text.secondary">
              {new Date(selectedNews.date).toLocaleDateString()}
            </Typography>

            <Typography
              variant="subtitle2"
              align="right"
              color="text.secondary"
              mb={2}
            >
              {t("journalist")}
              <span
                style={{ fontWeight: "bold", fontSize: "20px", marginLeft: 4 }}
              >
                {lang === "mn"
                  ? selectedNews.mnjournalist
                  : selectedNews.enjournalist}
              </span>
            </Typography>

            <Typography variant="body1" color="black">
              {lang === "mn"
                ? selectedNews.mndescription
                : selectedNews.endescription}
            </Typography>
            <Box textAlign="right" mt={4}>
              <Button variant="outlined" onClick={() => setSelectedNews(null)}>
                {t("back")}
              </Button>
            </Box>
          </Box>
        ) : (
          <Grid container spacing={3} sx={{ py: 8, px: 2 }}>
            {newsList.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 4,
                    overflow: "hidden",
                    height: 200,
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 280,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.image_url}
                    alt={item.entitle}
                    sx={{ height: 100 }}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: 1,
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
                    <Box
                      sx={{
                        mt: "auto",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        gap: 1,
                      }}
                    >
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
                          10
                        )}
                      </Typography>
                      <Button
                        variant="outlined"
                        color="error"
                        sx={{
                          borderRadius: "10px",
                          textTransform: "none",
                          minWidth: 100,
                          maxHeight: 40,
                        }}
                        onClick={() => setSelectedNews(item)}
                      >
                        {t("seeMore")}
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
      <Footer />
    </Box>
  );
};

export default News;

"use client";

import React, { useState, useEffect } from "react";
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
  Pagination,
  Skeleton,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

const truncateWords = (text, limit) => {
  const words = text.split(" ");
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};

const NewsClient = () => {
  const [initialNews, setInitialNews] = useState(null);
  const [news, setNews] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedNews, setSelectedNews] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const itemsPerPage = 6;
  const lang = useLocale();
  const t = useTranslations("news");

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:8000/api/news/paginated?page=${currentPage}&limit=${itemsPerPage}`,
          { cache: "no-store" }
        );
        const { data, total } = await res.json();

        if (currentPage === 1) {
          setInitialNews(data[0]);
          setNews(data.slice(1));
        } else {
          setNews(data);
        }

        setTotal(total);
      } catch (error) {
        console.error("Error fetching paginated news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [currentPage]);

  const handlePageChange = (_, page) => {
    setCurrentPage(page);
    setShowFullDescription(false);
  };

  const displayNews = selectedNews || initialNews;

  if (loading) {
    return (
      <Box sx={{ bgcolor: "background.default" }}>
        <Box
          sx={{
            width: "100%",
            minHeight: "60vh",
            bgcolor: "grey.300",
          }}
        >
          <Skeleton variant="rectangular" width="100%" height="100%" />
        </Box>

        <Container>
          <Box sx={{ py: 8 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Skeleton variant="text" width="30%" height={20} />
              <Skeleton variant="text" width="50%" height={20} />
            </Box>

            <Skeleton variant="rectangular" width="100%" height={100} />
          </Box>
        </Container>

        <Container>
          <Grid container spacing={3} sx={{ py: 8, px: 2 }}>
            {Array.from(new Array(itemsPerPage)).map((_, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={200}
                  sx={{ borderRadius: 2 }}
                />
                <Skeleton width="80%" height={30} sx={{ mt: 1 }} />
                <Skeleton width="60%" height={20} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  }

  if (!displayNews) {
    return (
      <Box
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="white"
      >
        <Typography variant="h6" color="text.secondary">
          {t("notFoundNews")}
        </Typography>
      </Box>
    );
  }

  const description =
    lang === "mn" ? displayNews.mndescription : displayNews.endescription;

  return (
    <Box sx={{ overflow: "hidden", bgcolor: "background.default" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "60vh",
          backgroundImage: `url('${displayNews.image_url}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
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
          <Typography
            variant="h3"
            fontWeight="bold"
            color="white"
            sx={{ fontSize: { xs: "24px", sm: "32px", md: "48px" } }}
          >
            {lang === "mn" ? displayNews.mntitle : displayNews.entitle}
          </Typography>
        </Container>
      </Box>

      <Container>
        <Box sx={{ py: 8 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="caption" color="text.secondary">
              {new Date(displayNews.date).toLocaleDateString()}
            </Typography>

            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {t("journalist")}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginLeft: 7,
                }}
              >
                {lang === "mn"
                  ? displayNews.mnjournalist
                  : displayNews.enjournalist}
              </span>
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="body1"
              color="black"
              sx={{ display: "inline", whiteSpace: "pre-line" }}
            >
              {selectedNews || showFullDescription
                ? description
                : description.split(" ").slice(0, 50).join(" ") + " "}
            </Typography>

            {!selectedNews && description.split(" ").length > 50 && (
              <Typography
                component="span"
                variant="body1"
                onClick={() => setShowFullDescription(!showFullDescription)}
                sx={{
                  cursor: "pointer",
                  color: "primary.main",
                  fontWeight: "bold",
                  ml: 1,
                  display: "inline",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {showFullDescription ? t("seeLess") : t("seeMore")}
              </Typography>
            )}
          </Box>

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
            {news.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    boxShadow: 4,
                    overflow: "hidden",
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
                            lang === "mn" ? item.mntitle : item.entitle,
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
                      sx={{ p: 5, textAlign: "center" }}
                    >
                      {t("clickSeeMore")}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {total > itemsPerPage && (
            <Box display="flex" justifyContent="center" pb={4}>
              <Pagination
                count={Math.ceil((total - 1) / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          )}
        </Container>
      )}
    </Box>
  );
};

export default NewsClient;

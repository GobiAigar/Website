"use client";
import { Box, Container, Typography, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import NewsHeader from "./NewsHeader";
import NewsList from "./NewsList";
import NewsSkeleton from "./NewsSkeleton";

const NewsClient = () => {
  const [initialNews, setInitialNews] = useState(null);
  const [news, setNews] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const lang = useLocale();
  const t = useTranslations("news");

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:8000/api/news/paginated?page=${currentPage}&limit=6`,
          { cache: "no-store" }
        );
        const { data, total } = await res.json();
        setNews(data);
        setTotal(total);

        if (currentPage === 1 && data.length > 0) {
          const detailRes = await fetch(
            `http://localhost:8000/api/news/${data[0].id}`
          );
          const detailData = await detailRes.json();
          setInitialNews(detailData);
        } else {
          setInitialNews(data[0]);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [currentPage]);

  if (loading) return <NewsSkeleton itemsPerPage={6} />;

  if (!initialNews) {
    return (
      <Box
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography>{t("notFoundNews")}</Typography>
      </Box>
    );
  }

  const description =
    lang === "mn" ? initialNews.mndescription : initialNews.endescription;
  const words = description?.split(" ") || [];
  const isLongDescription = words.length > 50;
  const truncatedDescription = words.slice(0, 40).join(" ") + " ";

  return (
    <Box sx={{ overflow: "hidden", bgcolor: "background.default" }}>
      <NewsHeader displayNews={initialNews} />

      <Container>
        <Box sx={{ py: 8 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="caption" color="text.secondary">
              {new Date(initialNews.date).toLocaleDateString()}
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Typography variant="subtitle2" color="text.secondary">
                {t("journalist")}
              </Typography>
              <Typography variant="subtitle2" fontWeight="bold" color="black">
                {lang === "mn"
                  ? initialNews.mnjournalist
                  : initialNews.enjournalist}
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="body1"
              color="black"
              sx={{ display: "inline", whiteSpace: "pre-line" }}
            >
              {showFullDescription || !isLongDescription
                ? description
                : truncatedDescription}
            </Typography>

            {isLongDescription && (
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
        </Box>
      </Container>

      <Container>
        <NewsList news={news} initialNews={initialNews} />
      </Container>

      {total > 6 && (
        <Box display="flex" justifyContent="center" pb={4}>
          <Pagination
            count={Math.ceil((total - 1) / 6)}
            page={currentPage}
            onChange={(_, page) => setCurrentPage(page)}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
};

export default NewsClient;

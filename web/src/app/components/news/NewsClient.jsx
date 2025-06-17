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

  const t = useTranslations("news");

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
       const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/news/paginated?page=${currentPage}&limit=3`,
          { cache: "no-store" }
        );
        const data = await res.json();

        setNews(data?.data);
        setTotal(data?.total || 0);
        setInitialNews(data?.header?.[0]);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [currentPage]);

  if (loading) return <NewsSkeleton itemsPerPage={3} />;

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

  return (
    <Box sx={{ overflow: "hidden", bgcolor: "background.default" }}>
      <NewsHeader displayNews={initialNews} />

      <Container>
        <NewsList news={news} />
      </Container>

      {total > 3 && (
        <Box display="flex" justifyContent="center" pb={4}>
          <Pagination
            count={Math.ceil(total / 3)}
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

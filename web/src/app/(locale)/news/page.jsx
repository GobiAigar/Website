"use client";

import { Box, Container, Typography, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import NewsList from "./NewsList";
import PageHeaderNarrow from "../../components/keyComponents/PageHeaderNarrow";
import NewsSkeleton from "./_NewsSkeleton";

const NewsClient = () => {
  const [initialNews, setInitialNews] = useState(null);
  const [news, setNews] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const t = useTranslations("news");

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/news/paginated?page=${currentPage}`,
          { cache: "no-store" }
        );
        const data = await res.json();

        setNews(data?.data);

        setInitialNews(data?.header?.[0]);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <NewsSkeleton />;
  }

  if (!initialNews) {
    return (
      <Box
        minHeight="90vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        backgroundColor="#ddd"
        sx={{
          position: "relative",
          top: 64,
        }}
      >
        <PageHeaderNarrow data={initialNews} />
        <Box display="flex" justifyContent="center">
          <Typography>{t("notFoundNews")}</Typography>
        </Box>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        overflow: "hidden",
        bgcolor: "background.default",
        position: "relative",
        top: 64,
      }}
    >
      <PageHeaderNarrow data={initialNews} />
      <Container>
        <NewsList news={news} />
      </Container>
    </Box>
  );
};

export default NewsClient;

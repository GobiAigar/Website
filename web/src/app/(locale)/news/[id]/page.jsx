"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Typography, Box, Button, Stack } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import NewsDetailSkeleton from "./_SlugNewsSkeleton";
import PageHeaderNarrow from "../../../components/keyComponents/PageHeaderNarrow";

export default function NewsDetailPage() {
  const { id } = useParams();
  const lang = useLocale();
  const t = useTranslations("news");
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/news/${id}`
      );
      const data = await res.json();

      setNewsItem(data);
      setLoading(false);
    };
    fetchNews();
  }, [id]);

  if (loading) {
    return <NewsDetailSkeleton />;
  }

  if (!newsItem) {
    return (
      <Box
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography>
          {lang === "mn" ? "Одоогоор мэдээ оруулаагүй байна" : "News not found"}
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <PageHeaderNarrow data={newsItem} />
      <Container>
        <Box sx={{ py: 4 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Stack direction="row">
              <Typography
                fontWeight={600}
                color="#333"
                sx={{ display: "flex", alignItems: "center" }}
              >
                {t("date")}
              </Typography>
              <Typography
                style={{
                  fontSize: "1rem",

                  marginLeft: 7,
                  textTransform: "capitalize",
                }}
              >
                {new Date(newsItem.date).toLocaleDateString()}
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography
                fontWeight={600}
                color="#333"
                sx={{ display: "flex", alignItems: "center" }}
              >
                {t("source")}
              </Typography>
              <Typography
                style={{
                  fontSize: "1rem",

                  marginLeft: 7,
                  textTransform: "capitalize",
                }}
              >
                {lang === "mn"
                  ? newsItem?.mnjournalist
                  : newsItem?.enjournalist}
              </Typography>
            </Stack>
          </Box>
          <Typography
            color="#333"
            variant="body1"
            sx={{
              whiteSpace: "pre-line",
              lineHeight: "1.5",
              marginTop: "1rem",
              marginBottom: {
                xs: "1rem",
                lg: "2rem",
              },
              textAlign: "justify",
            }}
          >
            {lang === "mn" ? newsItem?.mndescription : newsItem?.endescription}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

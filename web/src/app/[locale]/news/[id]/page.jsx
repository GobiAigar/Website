"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Button,
  Skeleton,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function NewsDetailPage() {
  const { id } = useParams();
  const lang = useLocale();
  const t = useTranslations("news");
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(`http://localhost:8000/api/news/${id}`);
      const data = await res.json();
      setNewsItem(data);
      setLoading(false);
    };
    fetchNews();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ bgcolor: "white" }}>
        <Header />

        <Box
          sx={{
            width: "100%",
            minHeight: "60vh",
            bgcolor: "grey.300",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
              <Skeleton variant="text" width="40%" height={20} />
            </Box>

            <Skeleton
              variant="rectangular"
              width="100%"
              height={100}
              sx={{ borderRadius: 2 }}
            />
          </Box>
        </Container>

        <Footer />
      </Box>
    );
  }

  if (!newsItem) {
    return (
      <Box
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography>News not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "white" }}>
      <Header />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "60vh",
          backgroundImage: `url('${newsItem.image_url}')`,
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
            {lang === "mn" ? newsItem.mntitle : newsItem.entitle}
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
              {new Date(newsItem.date).toLocaleDateString()}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ display: "flex", alignItems: "center" }}
            >
              {t("journalist")}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginLeft: 7,
                }}
              >
                {lang === "mn" ? newsItem.mnjournalist : newsItem.enjournalist}
              </span>
            </Typography>
          </Box>

          <Typography
            variant="body1"
            color="black"
            sx={{ whiteSpace: "pre-line" }}
          >
            {lang === "mn" ? newsItem.mndescription : newsItem.endescription}
          </Typography>
        </Box>
        <Box textAlign="end">
          <Button variant="outlined" onClick={() => router.back()}>
            {t("back") || "Буцах"}
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

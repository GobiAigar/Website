"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Loading from "../../../components/keyComponents/Loading";
import Description from "../../../components/keyComponents/Description";

export default function NewsDetailPage() {
  const { id } = useParams();
  const lang = useLocale();
  const t = useTranslations("news");
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
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
    return <Loading />;
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
    <Box
      sx={{
        bgcolor: "white",
        minHeight: "90vh",
        position: "relative",
        top: 64,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "20rem" },
          backgroundImage: `url('${newsItem.image_url}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          paddingBottom: "5rem",
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
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "3rem",
              },
            }}
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
              {t("source")}
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  marginLeft: 7,
                  textTransform: "capitalize",
                }}
              >
                {lang === "mn"
                  ? newsItem?.mnjournalist
                  : newsItem?.enjournalist}
              </span>
            </Typography>
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
        <Box textAlign="end" sx={{ mb: "1.5rem" }}>
          <Button variant="outlined" onClick={() => router.back()}>
            {t("back") || "Буцах"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

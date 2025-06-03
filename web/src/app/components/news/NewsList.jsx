"use client";
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Box,
  Typography,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import NewsOverlay from "./NewsOverlay";
import { useRouter } from "next/navigation";

const truncateWords = (text, limit) =>
  text.split(" ").length > limit
    ? text.split(" ").slice(0, limit).join(" ") + "..."
    : text;

const NewsList = ({ news, initialNews }) => {
  const lang = useLocale();
  const t = useTranslations("news");

  const router = useRouter();

  return (
    <Grid container spacing={3} sx={{ py: 8, px: 2 }}>
      {news
        .filter((el) => el.id !== initialNews?.id)
        .map((item) => (
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
              onClick={() => router.push(`/${lang}/news/${item.id}`)}
            >
              <CardActionArea sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  image={item.image_url}
                  alt={item.entitle}
                  sx={{ height: 140 }}
                  loading="lazy"
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
                  <Typography variant="subtitle1" fontWeight="bold">
                    {truncateWords(
                      lang === "mn" ? item.mntitle : item.entitle,
                      5
                    )}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 2,
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Typography variant="subtitle2" color="text.secondary">
                        {t("journalist")}:
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="text.primary"
                        fontWeight="bold"
                      >
                        {lang === "mn" ? item.mnjournalist : item.enjournalist}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle2">
                      {new Date(item.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
              <NewsOverlay />
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};
export default NewsList;

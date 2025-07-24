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
import { useRouter } from "next/navigation";

const truncateChars = (text, limit) =>
  text.length > limit ? text.slice(0, limit) + "..." : text;

const NewsList = ({ news }) => {
  const lang = useLocale();
  const t = useTranslations("news");
  const router = useRouter();

  return (
    <Grid container spacing={3} sx={{ py: 8, px: 2 }}>
      {news.map((item) => (
        <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card
            sx={{
              position: "relative",
              borderRadius: 3,
              boxShadow: 4,
              overflow: "hidden",
              height: "18.75rem",
              cursor: "pointer",
              "&:hover .media": {
                transform: "scale(1.05)",
              },
              "&:hover .overlay": {
                opacity: 1,
              },
            }}
            onClick={() => router.push(`/${lang}/news/${item.id}`)}
          >
            <CardActionArea sx={{ height: "100%", position: "relative" }}>
              <CardMedia
                component="img"
                image={item.thumbnail}
                alt={item.entitle}
                className="media"
                sx={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                loading="lazy"
              />

              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "80%",
                  bgcolor: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: 2,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  zIndex: 2,
                }}
              >
                {t("news")}
              </Box>

              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  bgcolor: "rgba(255, 255, 255, 0.95)",
                  px: 2,
                  py: 1.5,
                  zIndex: 3,
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  {truncateChars(
                    lang === "mn" ? item.mntitle : item.entitle,
                    39
                  )}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    mt: 1,
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
                      {t("source")}:
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
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsList;

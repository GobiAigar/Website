"use client";
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const NewsList = ({ news }) => {
  const lang = useLocale();
  const t = useTranslations("news");
  const router = useRouter();

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  if (!news || news.length === 0) {
    return (
      <Box sx={{ pt: 8, pb: 16, px: 2, textAlign: "center" }}>
        <Typography>No news available</Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3} sx={{ pt: 8, pb: 16, px: 2 }}>
      {!isSmall && news[0] && (
        <Grid size={12}>
          <Card
            sx={{
              borderRadius: "0",
              position: "relative",
              boxShadow: 4,
              cursor: "pointer",
              "&:hover .media": {
                transform: "scale(1.05)",
              },
              "&:hover .overlay": {
                opacity: 1,
              },
            }}
          >
            <Grid
              container
              sx={{
                bgcolor: "#FDF5D8",
                cursor: "pointer",
                borderRadius: 1,
                overflow: "hidden",
              }}
              onClick={() => router.push(`/${lang}/news/${news[0].id}`)}
            >
              <Grid size={6}>
                <CardMedia
                  component="img"
                  image={news[0]?.thumbnail}
                  alt={news[0]?.entitle}
                  className="media"
                  sx={{
                    height: "400px",
                    width: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    borderRadius: "0",
                  }}
                  loading="lazy"
                />
              </Grid>
              <Grid size={6}>
                <Box
                  sx={{
                    p: 3,
                    height: "400px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "#292929",
                      fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
                      mb: 2,
                    }}
                  >
                    {lang === "mn" ? news[0]?.mntitle : news[0]?.entitle}
                  </Typography>
                  <Box sx={{ flex: 1, overflow: "hidden" }}>
                    <Typography
                      sx={{
                        color: "#292929",
                        textAlign: "justify",
                        fontSize: { xs: "1rem" },
                        display: "-webkit-box",
                        WebkitLineClamp: 8,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {lang === "mn"
                        ? news[0]?.mndescription
                        : news[0]?.endescription}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      )}
      <Grid container size={12} width={"100%"}>
        {news.slice(isSmall ? 0 : 1).map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 4 }}>
            <Card
              sx={{
                borderRadius: "0",
                position: "relative",
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
                    borderRadius: "0",
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
                    height: "88px",
                    px: 2,
                    py: 1.5,
                    zIndex: 3,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {lang === "mn" ? item.mntitle : item.entitle}
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
                    ></Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default NewsList;

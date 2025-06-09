"use client";
import { Box, Container, Typography } from "@mui/material";
import { useLocale } from "next-intl";

const NewsHeader = ({ displayNews }) => {
  const lang = useLocale();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "18.75rem", sm: "80vh" },
        backgroundImage: `url('${displayNews?.image_url}')`,
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
          minHeight: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "black",
          px: 4,
          mt: 10,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xs: "24px",
                sm: "28px",
                md: "32px",
                color: "white",
              },
              fontWeight: "bold",
            }}
          >
            {lang === "mn" ? displayNews.mntitle : displayNews.entitle}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontSize: {
                xs: "12px",
                sm: "16px",
                md: "20px",
                color: "white",
              },
            }}
          >
            {lang === "mn" ? displayNews.mnsubtitle : displayNews.ensubtitle}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};
export default NewsHeader;

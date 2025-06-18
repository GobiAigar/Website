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
        height: "20rem",
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
        sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
      />
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
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.75rem",
                md: "2rem",
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
                xs: "0.8rem",
                md: "1rem",
                lg: "1.2rem",
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

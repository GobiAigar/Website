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
        minHeight: "60vh",
        backgroundImage: `url('${displayNews.image_url}')`,
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
      <Container maxWidth="lg" sx={{ pt: 20, position: "relative", zIndex: 2 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          color="white"
          sx={{ fontSize: { xs: "24px", sm: "32px", md: "48px" } }}
        >
          {lang === "mn" ? displayNews.mntitle : displayNews.entitle}
        </Typography>
      </Container>
    </Box>
  );
};
export default NewsHeader;

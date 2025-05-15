import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsCard from "../components/Card";

const News = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
      ></Box>
      <Header />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          backgroundImage: "url('/news.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
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
          sx={{ pt: 40, position: "relative", zIndex: 2 }}
        >
          <Typography variant="h3" fontWeight="bold" color="white">
            CULTURAL BRILLIANCE
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mt: 2 }}
            color="white"
          >
            From Mongolia, with Love.
          </Typography>
        </Container>
      </Box>
      <Container>
        <NewsCard />
      </Container>
      <Footer />
    </Box>
  );
};

export default News;

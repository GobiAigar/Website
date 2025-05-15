import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const roadmapItems = [
  {
    image: "/certificate.jpg",
    label: "ISO 9001:2015 Чанарын удирдлагын тогтолцоо",
  },
  {
    image: "/certificate.jpg",
    label: "ISO 22000:2018 Хүнсний аюулгүй байдлын тогтолцоо",
  },
  {
    image: "/certificate.jpg",
    label: "OEKO-TEX Standard 100 батламж",
  },
];

const Sustainability = () => {
  return (
    <Box sx={{ overflow: "hidden", bgcolor: "background.default" }}>
      <Header />

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
          <Typography variant="h3" fontWeight="bold">
            Sustainability
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            All the cashmere fiber North Land uses is sustainable Mongolian
            cashmere that comes from cashmere goats living in Inner Mongolia,
            famous for the best cashmere quality it produces.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 10, color: "black" }}>
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              bgcolor: "#828282",
              transform: "translateX(-50%)",
              zIndex: 0,
            }}
          />

          {roadmapItems.map((item, index) => (
            <Grid
              container
              spacing={4}
              key={index}
              sx={{
                mb: 12,
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  height: 0,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    width: 16,
                    height: 16,
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    border: "1px solid black",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    [index % 2 === 0 ? "right" : "left"]: "50%",
                    width: "calc(50% - 330px)",
                    height: "2px",
                    backgroundColor: "#828282",
                    transform: "translateY(-50%)",
                    zIndex: 1,
                  }}
                />
              </Box>

              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: 300,
                    height: 400,
                    overflow: "hidden",
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 2,
                    zIndex: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.label}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    mt: 2,
                    maxWidth: 300,
                    mx: "auto",
                    wordBreak: "break-word",
                  }}
                >
                  {item.label}
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}></Grid>
            </Grid>
          ))}
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default Sustainability;

"use client";

import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocale } from "next-intl";

const Sustainability = () => {
  const lang = useLocale();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mainInfo, setMainInfo] = useState(null);
  const [roadmapItems, setRoadmapItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/sustainability");
        const json = await res.json();
        setData(json.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch sustainability data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const main = data.find((item) => item.id === 1);
      const roadmap = data
        .filter((item) => item.id !== 1)
        .map((item) => ({
          label: lang === "mn" ? item.mndescription : item.endescription,
          image: item.image_url,
        }));
      setMainInfo(main);
      setRoadmapItems(roadmap);
    }
  }, [data, lang]);

  if (loading || !mainInfo) {
    return (
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "text.primary",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
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
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xs: "24px",
                sm: "28px",
                md: "32px",
              },
              fontWeight: "bold",
            }}
          >
            {lang === "mn" ? mainInfo.mntitle : mainInfo.entitle}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontSize: {
                xs: "12px",
                sm: "16px",
                md: "20px",
              },
            }}
          >
            {lang === "mn" ? mainInfo.mndescription : mainInfo.endescription}
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
                    height: "1px",
                    backgroundColor: "#828282",
                    transform: "translateY(-50%)",
                    zIndex: 1,
                  }}
                />
              </Box>

              <Grid
                size={{ xs: 12, sm: 6 }}
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
            </Grid>
          ))}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Sustainability;

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";

const data = [
  {
    image: "/Background.png",
    title: "Introduction to Mongolia",
    description: "Its capital is Ulaanbaatar.",
  },
  {
    image: "/Background.png",
    title: "Culture & Tradition",
    description: "Rich in nomadic heritage.",
  },
  {
    image: "/Background.png",
    title: "Naadam Festival",
    description: "Celebration of wrestling, archery, and horse racing.",
  },
  {
    image: "/Background.png",
    title: "Traditional Clothing",
    description: "Del is the traditional outfit of Mongolia.",
  },
  {
    image: "/Background.png",
    title: "Mongolian Throat Singing",
    description: "Unique sound created by overtone singing.",
  },
  {
    image: "/Background.png",
    title: "Gobi Desert",
    description: "Home to camels and epic landscapes.",
  },
];

const truncateWords = (text, limit) => {
  const words = text.split(" ");
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};

const NewsCard = () => {
  return (
    <Grid container spacing={3} sx={{ py: 8, px: 2 }}>
      {data.map((item, index) => (
        <Grid
          alignItems="center"
          key={index}
          size={{ xs: 12, sm: 6, md: 4 }}
        >
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 4,
              overflow: "hidden",
              height: 200,
              maxWidth: { md: 350, sm: 400 },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              sx={{ height: 100 }}
            />

            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.title}
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: "auto",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: 1,
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {truncateWords(item.description, 10)}
                </Typography>

                <Button
                  variant="outlined"
                  color="error"
                  sx={{
                    borderRadius: "10px",
                    textTransform: "none",
                    minWidth: 100,
                    maxHeight: 40,
                  }}
                >
                  See more
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsCard;

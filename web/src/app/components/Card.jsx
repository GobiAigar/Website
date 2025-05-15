import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

const NewsCard = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 4,
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          height="180"
          image="/Background.png"
          alt="Mongolian Steppe"
        />

        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Introduction to Mongolia
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Its capital is Ulaanbaatar.
            </Typography>
          </Box>

          <Button
            variant="outlined" 
            color="error"
            sx={{
              borderRadius: "20px",
              textTransform: "none",
            }}
          >
            See more
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NewsCard;

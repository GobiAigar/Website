import React from "react";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h1" sx={{ marginBottom: 2 }}>
            4
          </Typography>
          <Box>
            <img src="/goat.png" alt="404 Not Found" />
          </Box>
          <Typography variant="h1" sx={{ marginBottom: 2 }}>
            4
          </Typography>
        </Box>
        <Typography variant="h4">Хуудас олдсонгүй</Typography>
        <Button>
          <Link href="/mn/home">Нүүр хуудас руу буцна уу</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;

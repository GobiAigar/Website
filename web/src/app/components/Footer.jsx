"use client";
import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import ScrollTopButton from "./ScrollTopButton";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "white", py: { xs: 6, sm: 8, lg: 10 }, color: "black" }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Box
                component="img"
                src="logo.png"
                alt="logo"
                sx={{ width: { xs: 120, sm: 160 } }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography variant="body1">
                130a, manufacturing west area, 20th khoroo Bayangol District,
                Ulaanbaatar, Mongolia
              </Typography>
              <Typography variant="body2">+(976) 7777 6040</Typography>
              <Typography variant="body2">support@agrixglobal.com</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" justifyContent="space-between" gap={4}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Link href="#" underline="hover" color="inherit">
                  About
                </Link>
                <Link href="#" underline="hover" color="inherit">
                  Product
                </Link>
                <Link href="#" underline="hover" color="inherit">
                  Sustainability
                </Link>
                <Link href="#" underline="hover" color="inherit">
                  Partners
                </Link>
                <Link href="#" underline="hover" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box display="flex" flexDirection="column" gap={1}>
                <Link href="#" underline="hover" color="inherit">
                  Facebook
                </Link>
                <Link href="#" underline="hover" color="inherit">
                  Twitter
                </Link>
                <Link href="#" underline="hover" color="inherit">
                  Linkedin
                </Link>
                <Link href="#" underline="hover" color="inherit">
                  Instagram
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box mt={{ xs: 2, lg: 0 }}>
              <ScrollTopButton />
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 6 }}
        >
          © 2025 GOBI AIGAR. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

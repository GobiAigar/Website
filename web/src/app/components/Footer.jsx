"use client";
import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import ScrollTopButton from "./ScrollTopButton";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <Box
      sx={{ bgcolor: "white", py: { xs: 6, sm: 8, lg: 10 }, color: "black" }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={5}
          justifyContent="space-between"
          alignItems="flex-start"
          textAlign="start"
        >
          <Grid size={{ xs: 6, md: 3 }}>
            <Box>
              <Box
                component="img"
                src="/logo.png"
                alt="logo"
                sx={{
                  width: { xs: 120, sm: 160 },
                  height: "auto",
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography variant="body1">{t("address")}</Typography>
              <Typography variant="body2">{t("phone")}</Typography>
              <Typography variant="body2">{t("email")}</Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Box display="flex" flexDirection="column" gap={1}>
              <Link href="#" passHref underline="hover" color="inherit">
                {t("nav.about")}
              </Link>
              <Link href="product" passHref underline="hover" color="inherit">
                {t("nav.product")}
              </Link>
              <Link
                href="sustainability"
                passHref
                underline="hover"
                color="inherit"
              >
                {t("nav.sustainability")}
              </Link>
              <Link href="#" passHref underline="hover" color="inherit">
                {t("nav.partners")}
              </Link>
              <Link href="contact" passHref underline="hover" color="inherit">
                {t("nav.contact")}
              </Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 6, sm: 6, md: 3 }}>
            <Box display="flex" flexDirection="column" gap={1}>
              <Link href="#" underline="hover" color="inherit">
                {t("social.facebook")}
              </Link>
              <Link href="#" underline="hover" color="inherit">
                {t("social.twitter")}
              </Link>
              <Link href="#" underline="hover" color="inherit">
                {t("social.linkedin")}
              </Link>
              <Link href="#" underline="hover" color="inherit">
                {t("social.instagram")}
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Grid size={{ xs: 6, sm: 6, md: 3 }}>
          <Box mt={{ xs: 2, lg: 0 }}>
            <ScrollTopButton />
          </Box>
        </Grid>

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 6 }}
        >
          {t("copyright")}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

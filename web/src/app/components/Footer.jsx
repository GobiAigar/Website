"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import ScrollTopButton from "./ScrollTopButton";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("footer");
  const navLinks = [
    { href: "/#", label: t("nav.about") },
    { href: "/product", label: t("nav.product") },
    { href: "/sustainability", label: t("nav.sustainability") },
    { href: "/#", label: t("nav.partners") },
    { href: "/contact", label: t("nav.contact") },
  ];
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
              {navLinks.map(({ href, label }, index) => (
                <Link
                  key={index}
                  href={href}
                  underline="hover"
                  color="inherit"
                  sx={{ mx: 1 }}
                  component="a"
                >
                  {label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 6, sm: 6, md: 3 }}>
            <Box display="flex" flexDirection="column" gap={1}>
              <MuiLink href="#" underline="hover" color="inherit">
                {t("social.facebook")}
              </MuiLink>
              <MuiLink href="#" underline="hover" color="inherit">
                {t("social.twitter")}
              </MuiLink>
              <MuiLink href="#" underline="hover" color="inherit">
                {t("social.linkedin")}
              </MuiLink>
              <MuiLink href="#" underline="hover" color="inherit">
                {t("social.instagram")}
              </MuiLink>
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

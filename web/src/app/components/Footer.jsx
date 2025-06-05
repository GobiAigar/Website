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
import { useLocale } from "next-intl";
import Link from "next/link";
import { GobiAigarIcon } from "./Icon";

const Footer = () => {
  const t = useTranslations("footer");
  const locale = useLocale();
  const navLinks = [
    { href: `/${locale}/`, label: t("nav.about") },
    { href: `/${locale}/product`, label: t("nav.product") },
    { href: `/${locale}/sustainability`, label: t("nav.sustainability") },
    { href: `/${locale}/`, label: t("nav.partners") },
    { href: `/${locale}/contact`, label: t("nav.contact") },
  ];

  return (
    <Box
      sx={{
        bgcolor: "white",
        py: { xs: 6, sm: 8, lg: 10 },
        color: "black",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          borderTopWidth: "1px",
          borderTopStyle: "solid",
          borderTopColor: "grey",
        }}
      >
        <Grid
          container
          spacing={5}
          justifyContent="space-between"
          alignItems="flex-start"
          textAlign="start"
          sx={{ pt: 2 }}
        >
          <Grid size={{ xs: 6, md: 3 }}>
            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
              <GobiAigarIcon />
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
                <Link key={index} href={href} passHref legacyBehavior>
                  <MuiLink underline="hover" color="inherit" sx={{ mx: 1 }}>
                    {label}
                  </MuiLink>
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

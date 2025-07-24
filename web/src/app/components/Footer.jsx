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
import { GobiAigarIcon } from "./Icon";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { useAppData } from "../../context/AppDataProvider";
import Link from "next/link";

const Footer = () => {
  const { company } = useAppData();
  const t = useTranslations("footer");
  const locale = useLocale();
  console.log(company);

  const getValue = (id) => {
    const item = company?.find((e) => e.id === id);
    return locale === "mn" ? item?.mongolia : item?.english;
  };

  const aboutText = getValue(7) || null;

  return (
    <Box
      sx={{
        bgcolor: "#1A1A1A",
        py: { xs: 6, sm: 8, lg: 10 },
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="stretch">
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600, mt: 2 }}>
              {t("CompanyName")}
            </Typography>
            <Typography variant="body2">{getValue(1)}</Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, mt: 2 }}>
              {t("location")}
            </Typography>
            <Typography variant="body2">{getValue(3)}</Typography>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {t("connection")}
            </Typography>
            <Typography variant="body2">
              {t("email")}: {getValue(6)}
            </Typography>

            <Link variant="body2" type="button" href={`tel:${getValue(5)}`}>
              {t("phone")}: {getValue(5)}
            </Link>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 4 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "start" },
              textAlign: { xs: "center", md: "start" },
              justifyContent: "flex-start",
              gap: 2,
            }}
          >
            <GobiAigarIcon size={170} />

            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <MuiLink href={getValue(9)} target="_blank" rel="noopener">
                <LinkedInIcon sx={{ color: "white" }} />
              </MuiLink>
              <MuiLink href={getValue(10)} target="_blank" rel="noopener">
                <InstagramIcon sx={{ color: "white" }} />
              </MuiLink>
              <MuiLink href={getValue(8)} target="_blank" rel="noopener">
                <FacebookIcon sx={{ color: "white" }} />
              </MuiLink>
              <MuiLink href="#" target="_blank" rel="noopener">
                <XIcon sx={{ color: "white" }} />
              </MuiLink>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <ScrollTopButton />
        </Box>

        <Typography variant="body2" color="white" align="center" sx={{ mt: 6 }}>
          {t("copy")} {new Date().getFullYear()} {t("copyright")}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

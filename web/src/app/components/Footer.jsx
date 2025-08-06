"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
} from "@mui/material";
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

  const getValue = (id) => {
    const item = company?.find((e) => e.id === id);
    return locale === "mn" ? item?.mongolia : item?.english;
  };

  return (
    <Box
      sx={{
        bgcolor: "#1A1A1A",
        py: { xs: 6, sm: 8, lg: 10 },
        color: "white",
      }}
    >
      <Container>
        <Grid container justifyContent="space-between" spacing={6}>
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {t("CompanyName")}
            </Typography>
            <Typography variant="body2">{getValue(1)}</Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, mt: 2 }}>
              {t("location")}
            </Typography>
            <Typography variant="body2">{getValue(2)}</Typography>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {t("connection")}
            </Typography>
            <Typography variant="body2">
              {t("email")}: {getValue(4)}
            </Typography>

            <Link variant="body2" type="button" href={`tel:${getValue(5)}`}>
              {t("phone")}: {getValue(3)}
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

            <MuiLink href={`faq`} underline="hover" color="white">
              {t("faq")}
            </MuiLink>

            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <MuiLink href={getValue(5)} target="_blank" rel="noopener">
                <FacebookIcon sx={{ color: "white" }} />
              </MuiLink>
              <MuiLink href={getValue(6)} target="_blank" rel="noopener">
                <LinkedInIcon sx={{ color: "white" }} />
              </MuiLink>
              <MuiLink href={getValue(7)} target="_blank" rel="noopener">
                <InstagramIcon sx={{ color: "white" }} />
              </MuiLink>
              <MuiLink href={getValue(8)} target="_blank" rel="noopener">
                <XIcon sx={{ color: "white" }} />
              </MuiLink>
            </Box>
          </Grid>
        </Grid>

        <Typography variant="body2" color="white" align="center" sx={{ mt: 6 }}>
          {t("copy")} {new Date().getFullYear()} {t("copyright")}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

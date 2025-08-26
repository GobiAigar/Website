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
      position={"relative"}
      sx={{
        width: "100%",
        bgcolor: "#111928",
        py: { xs: "2.5rem" },
        px: "auto",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <Container
        sx={{
          display: { xs: "flex" },
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: { xs: "flex" },
            flexDirection: { xs: "column" },
            gap: 2,
          }}
        >
          <Link variant="body2" href={"product/#tradeTerm"}>
            {t("term")}
          </Link>

          <Link variant="body2" href={"faq"}>
            {t("faq")}
          </Link>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: { xs: "flex" },
            flexDirection: { xs: "column" },

            gap: 2,
          }}
        >
          <Typography type="button" variant="body2">
            {t("email")}: {getValue(4)}
          </Typography>

          <Link variant="body2" type="button" href={`tel:${getValue(5)}`}>
            {t("phone")}: {getValue(3)}
          </Link>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: { xs: "flex" },
            flexDirection: { xs: "column" },
            gap: 2,
          }}
        >
          <Box display={"flex"} gap={2}>
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
          <Typography variant="body2" color="white">
            {t("copy")} {new Date().getFullYear()} {t("copyright")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

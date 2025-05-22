"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ToggleButton from "./Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  ListItemButton,
} from "@mui/material";

import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { GobiAigarIcon } from "./Icon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const t = useTranslations();
  const locale = useLocale();

  const isHome = pathname === `/${locale}/home`;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { label: t("nav.home"), path: "home" },
    { label: t("nav.product"), path: "product" },
    { label: t("nav.sustainability"), path: "sustainability" },
    { label: t("nav.news"), path: "news" },
    { label: t("nav.contact"), path: "contact" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={isScrolled ? 4 : 0}
      sx={{
        backgroundColor:
          isHome && !isScrolled
            ? "transparent"
            : isScrolled
            ? "rgba(0,0,0,0.4)"
            : "white",
        color: !isHome && !isScrolled ? "black" : "white",
        backdropFilter: isScrolled ? "blur(6px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: { xs: 30, sm: 40 },
              width: { xs: 120, sm: 160, md: 200 },
              backgroundColor: "white",
            }}
          >
            <GobiAigarIcon />
          </Box>

          {isMobile ? (
            <IconButton onClick={toggleMobileMenu} color="inherit">
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          ) : (
            <Box
              sx={{
                display: "flex",
                gap: { lg: 5, md: 4, sm: 1.5 },
                alignItems: "center",
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={`/${locale}/${link.path}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontSize: { sm: 12, md: 18, lg: 20 } }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
              <ToggleButton />
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="left"
        open={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        PaperProps={{
          sx: {
            background: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(2px)",
            color: "white",
            width: "250px",
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem
                key={link.path}
                disablePadding
                onClick={toggleMobileMenu}
              >
                <ListItemButton
                  component={Link}
                  href={`/${locale}/${link.path}`}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem>
              <ToggleButton />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;

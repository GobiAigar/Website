"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import LanguageButton from "./LanguageButton";
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

  const isHome = pathname === `/home`;
  const isActive = (path) => {
    if (path === "home") {
      return pathname === `/home`;
    }
    return pathname === `/${path}`;
  };
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
        // backgroundColor: isScrolled ? "#fff" : "rgba(0,0,0,0)",
        backgroundColor: "#fff",
        backdropFilter: isScrolled ? "blur(6px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Container disableGutters>
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              transition: "background-color 0.3s ease",
            }}
          >
            {isScrolled ? (
              <Link href={"/"}>
                <GobiAigarIcon size={200} />
              </Link>
            ) : (
              <Link href={"/"}>
                <GobiAigarIcon size={200} />
                {/* <GobiAigarIcon size={200} color={"#fff"} /> */}
              </Link>
            )}
          </Box>

          {isMobile ? (
            <Box sx={{ marginLeft: "auto" }}>
              <IconButton onClick={toggleMobileMenu} color="inherit">
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                gap: { lg: 5, md: 4, sm: 1.5 },
                alignItems: "center",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              {navLinks.map((link) => (
                <Box
                  key={link.path}
                  sx={{
                    position: "relative",
                    cursor: "pointer",
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -4,
                      width: isActive(link.path) ? "100%" : 0,
                      height: "0.125rem",
                      backgroundColor: isActive(link.path)
                        ? "black"
                        : isScrolled
                        ? "black"
                        : "white",
                      transition: "width 0.3s ease",
                    },
                    "&:hover:after": {
                      width: "100%",
                    },
                    display: "flex",
                  }}
                >
                  <Link
                    href={`/${link.path}`}
                    style={{
                      textDecoration: "none",
                      // color: isScrolled ? "#333" : "white",
                      color: "#333",
                    }}
                  >
                    <Typography component="span" variant="body1">
                      {link.label}
                    </Typography>
                  </Link>
                </Box>
              ))}
              <LanguageButton isMobile={false} />
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
            zIndex: (theme) => theme.zIndex.modal + 5,
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
                <ListItemButton component={Link} href={`/${link.path}`}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}

            <LanguageButton isMobile={true} />
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;

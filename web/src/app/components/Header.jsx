"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import ToggleButton from "./Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";
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
} from "@mui/material";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 10);
      }
    };

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/product" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
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
            ? "rgba(0,0,0,0.7)"
            : "white",
        color: isHome && !isScrolled ? "white" : "white",
        backdropFilter: isScrolled ? "blur(6px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box>
            <Image src="/logo.png" alt="Logo" width={200} height={40} />
          </Box>

          {isMobile ? (
            <IconButton onClick={toggleMobileMenu} color="inherit">
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography variant="body1">{link.label}</Typography>
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
        ref={menuRef}
        PaperProps={{
          sx: { backgroundColor: "black", color: "white", width: "250px" },
        }}
      >
        <Box sx={{ p: 3 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem
                button
                key={link.href}
                onClick={toggleMobileMenu}
                component={Link}
                href={link.href}
              >
                <ListItemText primary={link.label} />
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

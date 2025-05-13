"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import ToggleButton from "./Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

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

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/40 shadow-md text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between items-center py-4 px-6 md:py-5 md:px-12">
        <Image src="/logo.png" alt="Logo" width={200} height={40} />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 md:gap-14 items-center">
          <Link href="/">Home</Link>
          <Link href="/product">Product</Link>
          <Link href="/sustainability">Sustainability</Link>
          <Link href="/news">News</Link>
          <Link href="/contact">Contact</Link>
          <ToggleButton />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 left-0 h-full bg-black/60 text-white transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 py-8">
          <Link href="/" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link href="/product" onClick={toggleMobileMenu}>
            Product
          </Link>
          <Link href="/sustainability" onClick={toggleMobileMenu}>
            Sustainability
          </Link>
          <Link href="/news" onClick={toggleMobileMenu}>
            News
          </Link>
          <Link href="/contact" onClick={toggleMobileMenu}>
            Contact
          </Link>
          <ToggleButton />
        </div>
      </div>
    </div>
  );
};

export default Header;

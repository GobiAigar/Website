import Link from "next/link";
import React from "react";
import ToggleButton from "./Button";

const Header = () => {
  return (
    <div className="flex justify-between pt-5 px-12">
      <img src="/logo.png" alt="Logo" />

      <div className="flex gap-14 text-center items-center">
        <Link href="/">Home</Link>
        <Link href="/product">Product</Link>
        <Link href="/sustainability">Sustainability</Link>
        <Link href="/news">News</Link>
        <Link href="/contact">Contact</Link>
        <ToggleButton />
      </div>
    </div>
  );
};

export default Header;

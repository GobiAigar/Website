import { Avatar, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import Logo from "../constants/logo";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-4 shadow-md sticky top-0 bg-white z-10 h-[64px]">
      <Link href="/">
        <div className="flex w-[200px]">
          <Logo />
        </div>
      </Link>

      <div className="flex items-center h-[64px]">
        <Link
          href="/website
        "
        >
          <Button variant="primary">Загвар өөрчлөх</Button>
        </Link>
        <Link href="/messages">
          <Button variant="primary">Мессеж</Button>
        </Link>
        <Link href="/post">
          <Button variant="primary">Мэдээнүүд</Button>
        </Link>
        <Avatar>H</Avatar>
      </div>
    </div>
  );
};

export default Navbar;

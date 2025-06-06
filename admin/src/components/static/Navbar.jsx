import { Avatar, Button } from "@mui/material";
import Link from "next/link";
import Logo from "../constants/logo";

const Navbar = () => {
  const path = "website";
  return (
    <div className="w-full flex justify-between items-center p-4 shadow-md sticky top-0 bg-white z-10 h-[64px]">
      <Link href="/">
        <div className="flex w-[200px]">
          <Logo />
        </div>
      </Link>

      <div className="flex items-center h-[64px]">
        <Link href={`/${path}`}>
          <Button variant="primary">Загвар өөрчлөх</Button>
        </Link>
        <Link href="faq">
          <Button variant="primary">Асуулт хариулт</Button>
        </Link>
        <Link href="/messages">
          <Button variant="primary">Мессеж</Button>
        </Link>
        <Link href="/news">
          <Button variant="primary">Мэдээнүүд</Button>
        </Link>
        <Avatar>H</Avatar>
      </div>
    </div>
  );
};

export default Navbar;

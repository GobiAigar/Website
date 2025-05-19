"use client";

import Navbar from "@/components/static/Navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }) {
  const router = useRouter();
  useEffect(() => {
    const user = sessionStorage.getItem("user_id");
    if (!user) router.push("/");
  }, []);
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}

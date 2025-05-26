"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-9TCLSPVFEL", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}

"use client";

import { Button, Box, Typography } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const ToggleButton = () => {
  const pathname = usePathname();
  const currentLocale = useLocale();

  const toggleLocale = () => {
    const newLocale = currentLocale === "mn" ? "en" : "mn";
    const regex = /^\/(en|mn)(\/|$)/;
    const pathWithoutLocale = pathname.replace(regex, "/");
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    window.location.assign(newPath);
  };

  return (
    <Button
      variant="text"
      onClick={toggleLocale}
      sx={{
        minWidth: "2.5rem",
        "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
        px: "0.5rem",
        lineHeight: 1,
      }}
    >
      <ReactCountryFlag
        countryCode={currentLocale === "mn" ? "MN" : "US"}
        svg
        style={{
          fontSize: "1.7rem",
          display: "block",
          verticalAlign: "middle",
        }}
      />
    </Button>
  );
};

export default ToggleButton;

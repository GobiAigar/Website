"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Tooltip,
} from "@mui/material";

const LanguageButton = () => {
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
    <Box>
      <FormControl sx={{ width: "fit" }} size="small" color="white">
        <Select
          color="white"
          defaultValue="MN"
          value={currentLocale}
          onChange={toggleLocale}
        >
          <MenuItem value="mn">MN</MenuItem>
          <MenuItem value="en">EN</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageButton;

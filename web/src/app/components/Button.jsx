"use client";

import { Button, Menu, MenuItem, ListItemText } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";

const ToggleButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (selectedLang) => {
    const regex = /^\/(en|mn)(\/|$)/;
    const pathWithoutLocale = pathname.replace(regex, "/");
    const newPath = `/${selectedLang}${pathWithoutLocale}`;

    window.location.assign(newPath);
    handleClose();
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        sx={{ backgroundColor: "#f3f3f3", color: "black", minWidth: 40 }}
      >
        {currentLocale === "mn" ? "Монгол" : "English"}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => handleSelect("en")}>
          <ListItemText>English</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleSelect("mn")}>
          <ListItemText>Монгол</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ToggleButton;

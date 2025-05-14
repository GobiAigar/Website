"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";

const ToggleButton = () => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          backgroundColor: selected ? "#fff" : "",
          color: selected ? "#000" : "",
          border: selected ? "1px solid #000" : "",
        }}
      >
        {selected ? "MN" : "EN"}
      </Button>
    </div>
  );
};

export default ToggleButton;

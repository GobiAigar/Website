import { Typography } from "@mui/material";
import { useLocale } from "next-intl";
import React from "react";

const BrandDescription = ({ mndescription, endescription }) => {
  const lang = useLocale();
  return (
    <Typography
      variant="body1"
      sx={{
        textAlign: "center",
        whiteSpace: "pre-line",
        color: "graphite",

        marginBottom: {
          xs: "1rem",
        },

        fontSize: {
          xs: "0.85",
          md: "1rem",
        },
      }}
    >
      {lang === "mn" ? mndescription : endescription}
    </Typography>
  );
};

export default BrandDescription;

import { Typography } from "@mui/material";
import { useLocale } from "next-intl";

const BrandDescription = ({ mndescription, endescription }) => {
  const lang = useLocale();
  return (
    <Typography
      variant="body1"
      sx={{
        color: "#333",
        textAlign: "center",
        whiteSpace: "pre-line",
        color: "graphite",

        marginBottom: {
          xs: "1rem",
        },
      }}
    >
      {lang === "mn" ? mndescription : endescription}
    </Typography>
  );
};

export default BrandDescription;

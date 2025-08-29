import { Typography } from "@mui/material";
import { useLocale } from "next-intl";

const WhiteDescription = ({ mndescription, endescription, textAlign }) => {
  const lang = useLocale();

  return (
    <Typography
      variant="body1"
      sx={{
        textAlign: `${textAlign}`,
        whiteSpace: "pre-line",
        color: "white",
        lineHeight: "1.5",
        textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
        marginBottom: {
          xs: "0.875rem",
          lg: "2rem",
        },
        marginTop: "1rem",
      }}
    >
      {lang === "mn" ? mndescription : endescription}
    </Typography>
  );
};

export default WhiteDescription;

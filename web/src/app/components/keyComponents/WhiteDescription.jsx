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

        marginBottom: {
          xs: "1rem",
          lg: "2rem",
        },
        marginTop: "1rem",

        fontSize: {
          xs: "0.5",
          md: "0.875rem",
        },
      }}
    >
      {lang === "mn" ? mndescription : endescription}
    </Typography>
  );
};

export default WhiteDescription;

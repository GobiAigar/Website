import { Typography } from "@mui/material";
import { useLocale } from "next-intl";

const Description = ({ mndescription, endescription, textAlign }) => {
  const lang = useLocale();

  return (
    <Typography
      variant="body1"
      sx={{
        textAlign: textAlign || "left",
        whiteSpace: "pre-line",
        color: "graphite",
        lineHeight: "1.5",
        marginTop: "1rem",
        marginBottom: {
          xs: "1rem",
          lg: "2rem",
        },

        fontSize: {
          xs: "1rem",
          md: "1.125rem",
          lg: "1.25rem",
        },
      }}
    >
      {lang === "mn" ? mndescription : endescription}
    </Typography>
  );
};

export default Description;

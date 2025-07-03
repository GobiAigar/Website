import { Typography } from "@mui/material";
import { useLocale } from "next-intl";

const Description = ({ mndescription, endescription, textAlign }) => {
  const lang = useLocale();

  return (
    <Typography
      variant="body1"
      sx={{
        textAlign: `${textAlign}`,
        whiteSpace: "pre-line",
        color: "graphite",
        lineHeight: "1.5",

        marginBottom: {
          xs: "1rem",
          lg: "2rem",
        },
        marginTop: "1rem",

        fontSize: {
          xs: "1",
          md: "1.2rem",
        },
      }}
    >
      {lang === "mn" ? mndescription : endescription}
    </Typography>
  );
};

export default Description;

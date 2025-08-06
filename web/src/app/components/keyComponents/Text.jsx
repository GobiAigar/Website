import { Typography } from "@mui/material";
import { useLocale } from "next-intl";

const Text = ({ mndescription, endescription }) => {
  const lang = useLocale();
  return (
    <Typography
      variant="body1"
      sx={{
        textAlign: "left",
        whiteSpace: "pre-line",
        color: "graphite",
        lineHeight: "1.5",
        marginTop: "1rem",
        marginBottom: {
          xs: "1rem",
          lg: "2rem",
        },

        fontSize: {
          xs: "0.875rem",
          md: "1rem",
          lg: "1.125rem",
        },
      }}
    >
      {lang === "mn" ? mndescription : endescription}
    </Typography>
  );
};

export default Text;

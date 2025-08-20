import { Typography } from "@mui/material";
import { useLocale } from "next-intl";

const Description = ({ mndescription, endescription }) => {
  const lang = useLocale();

  return (
    <Typography
      color="#333"
      variant="body1"
      sx={{
        textAlign: "center",
        whiteSpace: "pre-line",
        lineHeight: "1.5",
      }}
    >
      {lang === "mn" ? mndescription : endescription}
    </Typography>
  );
};

export default Description;

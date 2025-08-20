import { Typography } from "@mui/material";
import { useLocale } from "next-intl";

const WhiteTitle = ({ mntitle, entitle, reverse }) => {
  const lang = useLocale();
  if (!reverse) false;
  return (
    <Typography
      variant="h4"
      sx={{
        marginTop: 0,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: "150%",
        color: "white",
        textAlign:
          reverse === undefined ? "center" : reverse ? "right" : "left",

        maxHeight: {
          xs: "none",
          md: "37.5rem",
        },
      }}
    >
      {lang === "mn" ? mntitle : entitle}
    </Typography>
  );
};

export default WhiteTitle;

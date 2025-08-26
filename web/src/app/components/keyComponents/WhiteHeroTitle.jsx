import { Typography } from "@mui/material";
import { useLocale } from "next-intl";

const WhiteTitle = ({ mntitle, entitle, reverse }) => {
  const lang = useLocale();
  if (!reverse) false;
  return (
    <Typography
      sx={{
        marginTop: 0,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: "150%",
        color: "white",
        textAlign:
          reverse === undefined ? "center" : reverse ? "right" : "left",

        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        fontSize: {
          xs: "1.75rem",
          sm: "2.25rem",
          md: "3rem",
          lg: "3rem",
        },
      }}
    >
      {lang === "mn" ? mntitle : entitle}
    </Typography>
  );
};

export default WhiteTitle;

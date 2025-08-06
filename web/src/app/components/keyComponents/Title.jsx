import { Divider, Typography } from "@mui/material";
import { useLocale } from "next-intl";

const Title = ({ mntitle, entitle, textAlign }) => {
  const lang = useLocale();
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          lineHeight: "150%",
          color: "#292929",
          textAlign: textAlign ? "center" : "left",

          fontSize: {
            xs: "2rem",
            md: "2.25rem",
            lg: "2.5rem",
          },

          maxHeight: {
            xs: "none",
            md: "37.5rem",
          },
        }}
      >
        {lang === "mn" ? mntitle : entitle}
      </Typography>
    </>
  );
};

export default Title;

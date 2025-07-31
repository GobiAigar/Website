import { Typography } from "@mui/material";
import { useLocale } from "next-intl";

const NewTitle = ({ mntitle, entitle, textAlign }) => {
  const lang = useLocale();
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          lineHeight: "150%",
          color: "#fff",
          textAlign: textAlign ? "center" : "left",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          fontSize: {
            xs: "2rem",
            md: "2.5rem",
            lg: "3rem",
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

export default NewTitle;

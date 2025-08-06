import { Typography } from "@mui/material";
import { useLocale } from "next-intl";
const BrandTitle = ({ entitle, mntitle }) => {
  const lang = useLocale();

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "600",
          fontStyle: "normal",
          lineHeight: "150%",
          color: "#44372B",
          textAlign: "center",
          fontSize: {
            xs: "1rem",
            md: "1.125rem",
            lg: "1.2rem",
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

export default BrandTitle;

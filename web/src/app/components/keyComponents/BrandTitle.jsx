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
        }}
      >
        {lang === "mn" ? mntitle : entitle}
      </Typography>
    </>
  );
};

export default BrandTitle;

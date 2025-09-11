import { Typography } from "@mui/material";
import { useLocale } from "next-intl";

const Subtitle = ({ mntitle, entitle }) => {
  const lang = useLocale();
  return (
    <>
      <Typography
        sx={{
          textAlign: "left",
          color: "#292929",
          lineHeight: 1,
          fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
          fontWeight: "500",
        }}
      >
        {lang === "mn" ? mntitle : entitle}
      </Typography>
    </>
  );
};

export default Subtitle;

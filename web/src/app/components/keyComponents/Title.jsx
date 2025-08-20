import { Typography } from "@mui/material";
import { useLocale } from "next-intl";

const Title = ({ mntitle, entitle }) => {
  const lang = useLocale();
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          color: "#292929",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
        }}
      >
        {lang === "mn" ? mntitle : entitle}
      </Typography>
    </>
  );
};

export default Title;

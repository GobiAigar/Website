import { Typography } from "@mui/material";
import { useLocale } from "next-intl";

const NewTitle = ({ mntitle, entitle }) => {
  const lang = useLocale();
  return (
    <>
      <Typography
        sx={{
          color: "#1f2A37",
          textShadow: " 1px 1px 1px #333",
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
        }}
      >
        {lang === "mn" ? mntitle : entitle}
      </Typography>
    </>
  );
};

export default NewTitle;

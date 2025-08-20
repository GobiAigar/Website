import { Box, Typography } from "@mui/material";
import Title from "../keyComponents/Title";
import { useLocale } from "next-intl";

const CerficateTextCard = ({ data }) => {
  const lang = useLocale();
  return (
    <Box sx={{ width: "100%" }}>
      <Title entitle={data?.entitle} mntitle={data?.mntitle} />
      <Typography
        color="#333"
        variant="body1"
        sx={{
          whiteSpace: "pre-line",
          lineHeight: "1.5",
        }}
      >
        {lang === "mn" ? data?.mndescription : data?.endescription}
      </Typography>
    </Box>
  );
};

export default CerficateTextCard;

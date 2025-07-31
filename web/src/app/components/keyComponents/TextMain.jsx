import { Box, Typography } from "@mui/material";
import { useLocale } from "next-intl";
import Title from "./Title";
import Description from "./Description";

const TextMain = ({ entitle, mntitle, mndescription, endescription }) => {
  const lang = useLocale();

  return (
    <Box sx={{ width: "100%" }}>
      <Title entitle={entitle} mntitle={mntitle} textAlign={"center"} />

      <Description
        mndescription={mndescription}
        endescription={endescription}
        textAlign={"center"}
      />
    </Box>
  );
};

export default TextMain;

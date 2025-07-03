import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useLocale } from "next-intl";
import Title from "./Title";
import FlagDescription from "./FlagDescription";

const TextSide = ({
  entitle,
  mntitle,
  mndescription,
  endescription,
  reverse,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const lang = useLocale();

  return (
    <Box sx={{ width: "100%", textAlign: reverse ? "right" : "left" }}>
      <Title entitle={entitle} mntitle={mntitle} reverse={reverse} />

      <FlagDescription
        endescription={endescription}
        mndescription={mndescription}
        textAlign={"justify"}
      />
    </Box>
  );
};

export default TextSide;

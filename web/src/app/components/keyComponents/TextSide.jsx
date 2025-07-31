import { Box, useMediaQuery, useTheme } from "@mui/material";

import { useLocale } from "next-intl";
import Title from "./Title";
import Description from "./Description";

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
    <Box sx={{ width: "100%", textAlign: "right" }}>
      {!isMobile && (
        <Title entitle={entitle} mntitle={mntitle} reverse={reverse} />
      )}

      <Description
        endescription={endescription}
        mndescription={mndescription}
        justifyContent={isMobile ? "center" : "flex-end"}
      />
    </Box>
  );
};

export default TextSide;

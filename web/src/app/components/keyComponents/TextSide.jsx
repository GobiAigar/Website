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
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const lang = useLocale();

  return (
    <Box sx={{ width: "100%", textAlign: "right" }}>
      {!isTablet && (
        <Title entitle={entitle} mntitle={mntitle} reverse={reverse} />
      )}

      <Description
        endescription={endescription}
        mndescription={mndescription}
        justifyContent={isTablet ? "center" : "flex-end"}
      />
    </Box>
  );
};

export default TextSide;

import { useLocale } from "next-intl";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Title from "../keyComponents/Title";
import Description from "../keyComponents/Description";

const NewDescription = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const lang = useLocale();

  return (
    <>
      <Box display="flex" flexDirection="column" height="100%" gap={2}>
        {!isMobile && <Title mntitle={data?.mntitle} entitle={data?.entitle} />}
        <Description
          mndescription={data?.mndescription}
          endescription={data?.endescription}
        />
      </Box>
    </>
  );
};

export default NewDescription;

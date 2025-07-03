import { Box } from "@mui/material";
import Title from "../keyComponents/Title";
import Description from "../keyComponents/Description";

const CerficateTextCard = ({ data }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Title entitle={data?.entitle} mntitle={data?.mntitle} />

      <Description
        endescription={data?.endescription}
        mndescription={data?.mndescription}
      />
    </Box>
  );
};

export default CerficateTextCard;

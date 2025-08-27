import { Box, CardMedia, Container, Grid } from "@mui/material";
import GoldenDivider from "../../components/keyComponents/GoldenDivider";
import Title from "../../components/keyComponents/Title";
import FourImage from "./_FourImage";

const OurFactory = ({ data, datas }) => {
  return (
    <Box marginY={"2rem"}>
      <Title entitle={data?.entitle} mntitle={data?.mntitle} />
      <GoldenDivider />
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        marginY={"2rem"}
        alignItems={"center"}
      >
        <FourImage data={data} />
        <FourImage data={datas} />
      </Box>
      \
    </Box>
  );
};

export default OurFactory;

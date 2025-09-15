import { Box, CardMedia, Container, Grid } from "@mui/material";
import GoldenDivider from "../../components/keyComponents/GoldenDivider";
import Title from "../../components/keyComponents/Title";
import FourImage from "./_FourImage";

const OurFactory = ({ data }) => {
  return (
    <Box marginY={"4rem"}>
      <Title entitle={data[0]?.entitle} mntitle={data[0]?.mntitle} />
      <GoldenDivider />
      <FourImage data={data} />
    </Box>
  );
};

export default OurFactory;

import { Box, CardMedia, Container, Grid } from "@mui/material";
import GoldenDivider from "../../components/keyComponents/GoldenDivider";
import Title from "../../components/keyComponents/Title";
import FourImage from "./_FourImage";

const OurFactory = ({ data }) => {
	return (
		<Box marginY={"2rem"}>
			<Container>
				<Title entitle={data?.entitle} mntitle={data?.mntitle} />
				<GoldenDivider />
				<Box display={"flex"} flexDirection={"column"} gap={1} marginY={"2rem"}>
					<FourImage data={data} />
					<FourImage data={data} />
				</Box>
			</Container>
		</Box>
	);
};

export default OurFactory;

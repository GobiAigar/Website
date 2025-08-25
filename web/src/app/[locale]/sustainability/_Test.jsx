import { Box, Container } from "@mui/material";

import Title from "../../components/keyComponents/Title";
import Description from "../../components/keyComponents/Description";
import GoldenDivider from "../../components/keyComponents/GoldenDivider";
import CertificateSlider from "./CertificateSlider";

const Test = ({ sustainabilityText, certificates }) => {
	console.log(sustainabilityText);

	return (
		<Container
			disableGutters
			maxWidth={false}
			sx={{
				py: { xs: 6, md: 10 },
				px: { sm: 6, md: 10, lg: 20 }
			}}
		>
			<Box
				sx={{
					position: "relative",
					zIndex: 1,
					color: "white",
					textAlign: "center"
				}}
			>
				<Title entitle={sustainabilityText?.entitle} mntitle={sustainabilityText?.mntitle} />
				<GoldenDivider />
				<Description entitle={sustainabilityText?.endescription} mntitle={sustainabilityText?.mndescription} />
				<CertificateSlider certificates={certificates} />
			</Box>
		</Container>
	);
};

export default Test;

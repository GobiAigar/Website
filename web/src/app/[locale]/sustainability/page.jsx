"use client";

import { useAppData } from "../../../context/AppDataProvider";
import { Box } from "@mui/material";
import Test from "./_Test";
import PageHeaderNarrow from "../../components/keyComponents/PageHeaderNarrow";
import Loading from "../../components/keyComponents/Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sustainability = () => {
	const { sustainability, loadingWebsite } = useAppData();

	if (loadingWebsite) {
		return <Loading />;
	}

	const data = sustainability || {};
	const mainInfo = data?.hero?.[0];
	const sustainabilityText = sustainability?.response?.title?.[0];
	const certificates = data?.response?.cerficates || [];

	return (
		<Box
			sx={{
				backgroundImage: "url(./background.png)",
				backgroundImage: "url('/background.png')",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
				width: "100%",
				position: "relative",
				top: 64,
				display: "flex",
				flexDirection: "column"
			}}
		>
			<PageHeaderNarrow data={mainInfo} />
			<Box>
				<Test sustainabilityText={sustainabilityText} certificates={certificates} />
			</Box>
		</Box>
	);
};

export default Sustainability;

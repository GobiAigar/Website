"use client";

import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import Title from "../../components/keyComponents/Title";
import { useLocale } from "next-intl";
import ProductImage from "./_ProductImage";
import GoldenDivider from "../../components/keyComponents/GoldenDivider";

const ProductMainSection = ({ data }) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const lang = useLocale();

	return (
		<Box marginY={{ xs: "1.5rem", md: "2rem" }} width={"100%"}>
			<Container>
				<Title mntitle={data?.mntitle} entitle={data?.entitle} />

				<GoldenDivider />
				<Typography
					color="#333"
					variant="body1"
					sx={{
						whiteSpace: "pre-line",
						lineHeight: "1.5",
						marginTop: "1rem",
						marginBottom: {
							xs: "1rem",
							lg: "2rem"
						},
						textAlign: "justify"
					}}
				>
					{lang === "mn" ? data?.mndescription : data?.endescription}
				</Typography>
				<ProductImage data={data} />
			</Container>
		</Box>
	);
};

export default ProductMainSection;

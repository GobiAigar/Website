"use client";

import { Box, Container, Divider, Grid } from "@mui/material";
import Description from "../keyComponents/Description";
import VideoSide from "../Card/VideoSideCard";
import Title from "../keyComponents/Title";
import GoldenDivider from "../keyComponents/GoldenDivider";

const VideoSection = ({ datas }) => {
	const imageUrls = [datas?.image_url1].filter(Boolean);

	return (
		<Box>
			<Box width="100%" id="aboutUs">
				<Container>
					<Grid
						size={12}
						sx={{
							top: 80,
							zIndex: 10
						}}
					>
						<Box
							width={"80%"}
							textAlign={"center"}
							margin="auto"
							paddingTop={{ xs: 6, sm: 8, md: 6 }}
							paddingBottom={{ xs: 4, sm: 6, md: 8 }}
						>
							<Title mntitle={datas?.mntitle} entitle={datas?.entitle} />

							<GoldenDivider />

							<Description
								mndescription={datas?.mndescription}
								endescription={datas?.endescription}
								textAlign={"center"}
							/>
						</Box>
					</Grid>
				</Container>

				<VideoSide data={imageUrls} />
			</Box>
		</Box>
	);
};

export default VideoSection;

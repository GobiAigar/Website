import { Box, Container, Typography } from "@mui/material";

import WhiteHero from "./WhiteHeroTitle";
import WhiteDescription from "./WhiteHeroDescription";

const PageHeaderNarrow = ({ data }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "25rem" },
        backgroundImage: `url(${data?.image_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <Box
        sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "black",
          px: 4,
          mt: 10,
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Container maxWidth="sm">
          <WhiteHero entitle={data?.entitle} mntitle={data?.mntitle} />
          <WhiteDescription
            endescription={data?.ensubtitle}
            mndescription={data?.mnsubtitle}
          />
        </Container>
      </Box>
    </Box>
  );
};

export default PageHeaderNarrow;

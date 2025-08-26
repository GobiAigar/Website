import { Box, Container } from "@mui/material";

import Title from "../../components/keyComponents/Title";
import Description from "../../components/keyComponents/Description";
import GoldenDivider from "../../components/keyComponents/GoldenDivider";
import CertificateSlider from "./CertificateSlider";

const Test = ({ sustainabilityText, certificates }) => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        py: { xs: 6, md: 10 },
        px: { sm: 6, md: 10, lg: 20 },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          color: "white",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        paddingX={{ xs: "2rem", sm: "1rem" }}
      >
        <Box maxWidth={"48rem"}>
          <Title
            entitle={sustainabilityText?.entitle}
            mntitle={sustainabilityText?.mntitle}
          />
          <GoldenDivider />
          <Description
            endescription={sustainabilityText?.endescription}
            mndescription={sustainabilityText?.mndescription}
          />
        </Box>
        <CertificateSlider certificates={certificates} />
      </Box>
    </Container>
  );
};

export default Test;

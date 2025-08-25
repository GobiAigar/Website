import { Box, Container } from "@mui/material";

import Title from "../../components/keyComponents/Title";
import Description from "../../components/keyComponents/Description";
import GoldenDivider from "../../components/keyComponents/GoldenDivider";

const Test = ({ sustainabilityText }) => {
  console.log(sustainabilityText);

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
        }}
      >
        <Title
          entitle={sustainabilityText?.entitle}
          mntitle={sustainabilityText?.mntitle}
        />
        <GoldenDivider />
        <Description
          entitle={sustainabilityText?.endescription}
          mntitle={sustainabilityText?.mndescription}
        />
      </Box>
    </Container>
  );
};

export default Test;

import { Box, Container } from "@mui/material";
import WhiteDescription from "../../components/keyComponents/WhiteHeroDescription";
import WhiteTitle from "../../components/keyComponents/WhiteHeroTitle";

const Test = ({ sustainabilityText }) => {
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
          backgroundImage: `url(${sustainabilityText?.image_url})`,
          backgroundSize: "cover",
          position: "relative",
          top: 0,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          p: { xs: 3, sm: 4, md: 5 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            top: 0,
            bgcolor: "rgba(0, 0, 0, 0.6)",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            color: "white",
            textAlign: "center",
          }}
        >
          <WhiteTitle
            entitle={sustainabilityText?.entitle}
            mntitle={sustainabilityText?.mntitle}
          />
          <WhiteDescription
            mndescription={sustainabilityText?.mndescription}
            endescription={sustainabilityText?.endescription}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Test;

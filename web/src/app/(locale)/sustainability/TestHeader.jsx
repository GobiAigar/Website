import { Box, Typography } from "@mui/material";
import { useLocale } from "next-intl";

const TestHeader = ({ mainInfo }) => {
  const lang = useLocale();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "18rem", md: "20rem" },
        backgroundImage: `url(${mainInfo?.image_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          px: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "1.75rem",
              md: "2rem",
              color: "white",
            },
            fontWeight: "bold",
          }}
        >
          {lang === "mn" ? mainInfo?.mntitle : mainInfo?.entitle}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            width: { xs: "100%", sm: "80%", md: "60%" },
            mt: 2,
            fontSize: {
              xs: "0.8rem",
              md: "1rem",
              lg: "1.2rem",
              color: "white",
            },
          }}
        >
          {lang === "mn" ? mainInfo?.mnsubtitle : mainInfo?.ensubtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default TestHeader;

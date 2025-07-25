import { Box, Container, Typography } from "@mui/material";
import { useLocale } from "next-intl";

const PageHeaderNarrow = ({ data }) => {
  const lang = useLocale();
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
            {lang === "mn" ? data?.mntitle : data?.entitle}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontSize: {
                xs: "0.8rem",
                md: "1rem",
                lg: "1.2rem",
                color: "white",
              },
            }}
          >
            {lang === "mn" ? data?.mnsubtitle : data?.ensubtitle}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default PageHeaderNarrow;

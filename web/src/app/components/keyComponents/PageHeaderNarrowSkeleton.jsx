import { Box, Container, Skeleton } from "@mui/material";

const PageHeaderNarrowSkeleton = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "250px", sm: "400px", md: "600px" },
        backgroundColor: "#f0f0f0", // fallback background
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          mt: 10,
          position: "absolute",
          zIndex: 1,
          width: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Skeleton
            variant="text"
            width="80%"
            height={50}
            sx={{ mx: "auto", mb: 2 }}
          />

          <Skeleton
            variant="text"
            width="60%"
            height={30}
            sx={{ mx: "auto", mb: 1 }}
          />
          <Skeleton
            variant="text"
            width="50%"
            height={30}
            sx={{ mx: "auto" }}
          />
        </Container>
      </Box>
    </Box>
  );
};

export default PageHeaderNarrowSkeleton;

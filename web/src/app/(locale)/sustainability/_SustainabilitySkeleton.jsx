import { Box, Container, Skeleton } from "@mui/material";

const SustainabilitySkeleton = () => {
  return (
    <Box>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height={600}
      />
      <Container>
        <Box
          width="100%"
          my={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Skeleton variant="text" width="60%" height={50} />
          <Skeleton variant="text" width="50%" height={20} />
          <Skeleton variant="text" width="45%" height={20} />
          <Skeleton variant="text" width="40%" height={20} />
          <Skeleton variant="text" width="35%" height={20} />
        </Box>
        <Box
          width="100%"
          my={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="20%"
            height={250}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="20%"
            height={260}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="20%"
            height={270}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="20%"
            height={260}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="20%"
            height={250}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default SustainabilitySkeleton;

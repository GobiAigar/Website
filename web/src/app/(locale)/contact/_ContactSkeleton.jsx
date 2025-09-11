import { Box, Container, Skeleton } from "@mui/material";

const ContactSkeleton = () => {
  return (
    <Box>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height={600}
      />
      <Container
        width="100 "
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <Box
          width="60%"
          gap={4}
          my={4}
          sx={{
            display: "flex",
            flexDirection: "column",

            gap: 4,
          }}
        >
          <Box
            width="100%"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <Skeleton
              animation="wave"
              variant="rectangular"
              width="50%"
              height="40px"
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              width="50%"
              height="40px"
            />
          </Box>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="100%"
            height="40px"
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="100%"
            height="200px"
          />
          <Skeleton variant="button" width="100%" height="40px" />
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSkeleton;

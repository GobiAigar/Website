import { Box, Container, Skeleton } from "@mui/material";
import React from "react";

const NewsSkeleton = () => {
  return (
    <Box>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height={600}
      />
      <Container>
        <Box width="100%" height={400} my={4} sx={{ display: "flex", gap: 4 }}>
          <Box width={"100%"}>
            <Skeleton
              height="100%"
              animation="wave"
              variant="rectangular"
              width="100%"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              gap: 1,
            }}
            width={"100%"}
          >
            <Skeleton variant="text" width="100%" height={20} />
            <Skeleton variant="text" width="100%" height={20} />
            <Skeleton variant="text" width="100%" height={20} />
            <Skeleton variant="text" width="100%" height={20} />
            <Skeleton variant="text" width="40%" height={20} />
          </Box>
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
            width="33%"
            height={250}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="33%"
            height={250}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="33%"
            height={250}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default NewsSkeleton;

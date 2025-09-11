import { Box, Container, Skeleton } from "@mui/material";

const ProductSkeleton = () => {
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
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="100%" height={20} />
        </Box>
        {/*  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="30%"
            height={300}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="30%"
            height={300}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="30%"
            height={300}
          />
        </Box>
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
        </Box>
        {/*  */}
        <Box sx={{ display: "flex", gap: 2, width: "100%" }} my={4}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="25%"
            height={150}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="25%"
            height={150}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="25%"
            height={150}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="25%"
            height={150}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 2, width: "100%" }} my={4}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="25%"
            height={150}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="25%"
            height={150}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="25%"
            height={150}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="25%"
            height={150}
          />
        </Box>
        {/*  */}
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
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="100%" height={20} />
        </Box>
        {/*  */}
      </Container>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height={300}
      />
      {/*  */}
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
          <Box
            width="100%"
            height={400}
            my={4}
            sx={{ display: "flex", gap: 4 }}
          >
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
              <Skeleton variant="text" width="100%" height={20} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductSkeleton;

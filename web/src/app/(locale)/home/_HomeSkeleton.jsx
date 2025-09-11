import { Box, Skeleton } from "@mui/material";

const HomeSkeleton = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 1,
        mb: 2,
      }}
    >
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height="100vh"
      />
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
        <Skeleton variant="text" width="60%" height={20} />
        <Skeleton variant="text" width="50%" height={20} />
        <Skeleton variant="text" width="40%" height={20} />
      </Box>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height={600}
      />

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
        <Skeleton variant="text" width="60%" height={60} />
      </Box>
      <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="20%"
          height={300}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="25%"
          height={300}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="25%"
          height={300}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="25%"
          height={300}
        />
      </Box>
      {/*  */}
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height={300}
      />
      {/*  */}
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
          <Skeleton variant="text" width="100%" height={20} />
        </Box>
      </Box>
      {/*  */}
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
          <Skeleton variant="text" width="100%" height={20} />
        </Box>
      </Box>
      {/**/}
      <Box width={"100%"}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height={300}
          mb={0}
        />
      </Box>
    </Box>
  );
};

export default HomeSkeleton;

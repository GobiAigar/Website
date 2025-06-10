"use client";
import { Box, Container, Skeleton, Grid } from "@mui/material";

const NewsSkeleton = ({ itemsPerPage }) => (
  <Box sx={{ bgcolor: "background.default" }}>
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "20rem",
        backgroundColor: "grey.300",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.3)",
        }}
      />
      <Box
        sx={{
          minHeight: "60vh",
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
          <Skeleton
            variant="text"
            width="80%"
            height={40}
            sx={{
              mx: "auto",
              bgcolor: "grey.500",
            }}
          />
          <Skeleton
            variant="text"
            width="60%"
            height={24}
            sx={{
              mt: 2,
              mx: "auto",
              bgcolor: "grey.500",
            }}
          />
        </Container>
      </Box>
    </Box>
    <Container>
      <Box sx={{ py: 8 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Skeleton variant="text" width="30%" height={20} />
          <Skeleton variant="text" width="50%" height={20} />
        </Box>
        <Skeleton variant="rectangular" width="100%" height={100} />
      </Box>
    </Container>
    <Container>
      <Grid container spacing={3} sx={{ py: 8, px: 2 }}>
        {Array.from(new Array(itemsPerPage)).map((_, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Skeleton
              variant="rectangular"
              width="100%"
              height={200}
              sx={{ borderRadius: 2 }}
            />
            <Skeleton width="80%" height={30} sx={{ mt: 1 }} />
            <Skeleton width="60%" height={20} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);
export default NewsSkeleton;

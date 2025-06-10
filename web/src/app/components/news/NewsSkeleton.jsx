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
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          px: 2,
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Skeleton variant="text" width="80%" height={40} sx={{ mb: 2 }} />
          <Skeleton variant="text" width="60%" height={30} />
        </Container>
      </Box>
    </Box>
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

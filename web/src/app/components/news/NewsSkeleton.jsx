"use client";
import { Box, Container, Skeleton, Grid } from "@mui/material";

const NewsSkeleton = ({ itemsPerPage }) => (
  <Box sx={{ bgcolor: "background.default" }}>
    <Box sx={{ width: "100%", minHeight: "60vh", bgcolor: "grey.300" }}>
      <Skeleton variant="rectangular" width="100%" height="100%" />
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

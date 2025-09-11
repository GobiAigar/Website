"use client";
import { Box, Container, Skeleton } from "@mui/material";

export default function NewsDetailSkeleton() {
  return (
    <Box
      sx={{
        bgcolor: "white",
        minHeight: "90vh",
        position: "relative",
        top: 64,
      }}
    >
      {/* Banner skeleton */}
      <Skeleton
        variant="rectangular"
        width="100%"
        height={600}
        animation="wave"
      />

      <Container>
        <Box sx={{ py: 8 }}>
          {/* Date + Journalist row */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Skeleton variant="text" width={120} height={20} />
            <Skeleton variant="text" width={200} height={20} />
          </Box>

          {/* Title skeleton */}
          <Skeleton variant="text" width="80%" height={50} />

          {/* Body skeleton */}
          <Skeleton
            variant="rectangular"
            width="100%"
            height={200}
            sx={{ my: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={200}
            sx={{ mb: 2 }}
          />
        </Box>
      </Container>
    </Box>
  );
}
